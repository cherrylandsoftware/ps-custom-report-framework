var DashboardManager = (function($){
	/*Private variables*/
	var m_dashboards = {};//collection of all defined dashboards
	var m_activeKey = '';//currently selected dashboard key
	var m_portlets = [];//active collection of portlets
	// max number of portlets that we currently support.
	// NOTE: if this is increased the html layout will also need to be adjusted.
	var MAX_PORTLETS =12;
	var m_defaults_portlet = {
		key:'',
		title:'',
		display:false,
		selectable:true
	};
	var m_defaults_dashboard = {
		key:'',
		label:'',
		show:true,
		paramsUrl:'',
		portlets:[]
	};
	return {
	//public methods
		addDashboard: function(dashboard){
			dashboard = $.extend({}, m_defaults_dashboard, dashboard);
			if(isValidDashboard(dashboard)){
				if(m_dashboards[dashboard.key] == undefined){
					for(var key in dashboard.portlets){
						dashboard.portlets[key] = $.extend({},m_defaults_portlet,dashboard.portlets[key]);
						dashboard.portlets[key].key = key;
					}
					m_dashboards[dashboard.key] = dashboard;
				}
				else{
					logDashboardError("Dashboard key already defined: " + dashboard.key, dashboard);
				}
			}
		},
		setActiveDashboard: function(key){
			if(m_dashboards[key] == undefined){
				logDashboardError("setActiveDashboard: Invalid dashboard key=" + key, key);
				return null;
			}
			m_activeKey = key;
			m_portlets = m_dashboards[key].portlets;
			return m_dashboards[key];
		},	
		getDashboards: function(){
			return m_dashboards;
		},
		getActiveDashboard: function(){
			return m_dashboards[m_activeKey];
		},
		getCookie: function(name){
			if (document.cookie.length>0) {
				start=document.cookie.indexOf(name + "=")
				if (start!=-1) { 
					start=start + name.length+1 
					end=document.cookie.indexOf(";",start)
					if (end==-1) end=document.cookie.length
					return unescape(document.cookie.substring(start,end))
				} 
			}
			return "";
		},
		setCookie: function(name, value){
		   var date = new Date ();
		   var twentyYears =  60 * 60 * 24 * 365 * 20;
		   date.setTime(date.getTime()+(20*365*24*60*60*1000));
		   var expires = "; expires=" + date.toGMTString();
		   document.cookie=name+ "=" + escape(value)  + expires;
		}	
	}

/*Private methods*/	

	/*function isValidDashboard
	*  Description:  Determine if dashboard object is configured properly
	*  Parameters:
	*	dashboard:  Dashboard object that defines a dashboard tab and associated portlets
	*  Returns:  true if dashboard object is valid; otherwise false.
	*/
	function isValidDashboard(dashboard){
		var retval = true;
		if(dashboard.key ==undefined || dashboard.key ==''){retval = false;}
		if(dashboard.label ==undefined || dashboard.label==''){retval=false;}
		if(dashboard.portlets == undefined || dashboard.portlets.length<=0 || dashboard.portlets.length >MAX_PORTLETS){retval=false;}
		if(!retval){logDashboardError('Invalid Dashboard', dashboard);}
		return retval;
	}

	/*TODO:Implement message logging
	*/
	function logDashboardError(msg, obj){
	}

})(jQuery);//end DashboardManager

	//Begin Dashboard UI
var DashboardUI = (function($){
	var m_portletSelectorID = 'portlet-selection';
	var m_portletContainerID = 'portlet-container';
	var m_portletPrefixID = 'portlet_';
	var m_portletFormID = 'portlet-form';
	var m_dashboardFormID = 'dashboard-form';
	var m_dashboardContainerID = 'dashboard_container';
	var m_template_tab = '<li><a href="#%dashboard-key%" >%dashboard-label%</a></li>'
	var m_template_portlet = '<div class="portlet ui-widget ui-widget-content ui-corner-all"><h3><span class="portlet-title"></span><a href="javascript:DashboardUI.removePortlet(\'%portlet-key%\')">X</a></h3><div class="portlet-data"></div></div>';
	var m_template_dashboard = '<div id="%dashboard-key%"> <div style="clear:both;">&nbsp;</div></div>'
	var m_opts = {};
	return {
	//public functions
		init: function(opts){
			m_opts = opts;
			var dashboards = DashboardManager.getDashboards();
			$.each(dashboards, function(index, dashboard){
				if(dashboard.show ==true){
					var $tab = $(m_template_tab.replace('%dashboard-key%', dashboard.key).replace('%dashboard-label%', dashboard.label));
					$('#'+m_dashboardContainerID+' ul').append($tab);
					$('#'+m_dashboardContainerID).append(m_template_dashboard.replace('%dashboard-key%', dashboard.key));
				}
			});
			//create tabs
			$('#'+m_dashboardContainerID).tabs({
				select: function(event, ui){
					DashboardUI.loadDashboard(ui.panel.id);
				},
				selected:-1	
			});
			//select initial dashboard.  use db-load url parameter if it is set.
			if(m_opts.db_load !== undefined && $('#'+m_dashboardContainerID+' > #'+m_opts.db_load).length >0){
				$('#'+m_dashboardContainerID).tabs('select','#'+m_opts.db_load);
			}
			else{
				$('#'+m_dashboardContainerID).tabs('select',0);
			}
			//bind dashboard form submission
			$('#'+m_dashboardFormID).submit(function(){
				var fd = $(this).serializeObject();
				$.post('/admin/home.html', fd)
				.done(function(portletdata){
					DashboardUI.refreshPortlets();
				})
				.fail(function(jqxhr, status, err){
					DashboardManager.logDashboardError('Failed to submit dashboard form.' + ' Error:' +err);
				});
				return false;
			});
		},
		loadDashboard: function(key){
			var dashboard = DashboardManager.setActiveDashboard(key);
			if(dashboard == undefined){
				DashboardManager.logDashboardError('Failed to set active dashboard to key: ' + key);
				return;
			}
			clearDashboard();
			if(dashboard.paramsUrl !=''){
				loadDashboardForm(dashboard.paramsUrl, function(){initPortlets(dashboard);});
			}
			else{
				initPortlets(dashboard);
			}
			//DashboardTimer.init();
		},
		addSelectedPortlet: function(){
			var key = getSelectedPortletKey();
			var p = DashboardManager.getActiveDashboard().portlets[key];
			if(p != undefined){
				p.display = true;
				DashboardManager.setCookie(key, '');
				removePortletFromSelector(key);
				DashboardUI.addPortlet(key);
			}
		},
		addPortlet: function(key, opts){
			if(opts ==undefined){opts={};}
			if($('#'+m_portletPrefixID + key).length >0){//portlet exists
				DashboardUI.updatePortletContent(key, opts);
				return;
			}
			var dashboard = DashboardManager.getActiveDashboard();
			var p = dashboard.portlets[key];
			if(p !=undefined){
				if(p.defaultoptions !=undefined){opts=$.extend({},p.defaultoptions, opts);}
				var o = $(m_template_portlet.replace('%portlet-key%', key)).attr('id', m_portletPrefixID + key);
				$('.portlet-title', o).text(p.title);
				$('#'+dashboard.key).prepend(o);
				removePortletFromSelector(key);
				DashboardUI.updatePortletContent(key, opts);
			}
		},
		updatePortletContent: function(key, opts){
			if(opts ==undefined){opts={};}
			$.extend(opts, {"portletkey":key});
			if($('#'+m_portletPrefixID + key).length ==0){return;}//portlet does not exist
			var dashboard = DashboardManager.getActiveDashboard();
			var p = dashboard.portlets[key];
			var fd = $('#'+m_dashboardFormID).serializeObject();
			opts = $.extend(fd, opts);
			if($('#'+m_portletPrefixID + key + ' .paramform').length >0){
				var fd = $('#'+m_portletPrefixID + key + ' .paramform').serializeObject();
				opts = $.extend(opts, fd);
			}
			if(p.defaultoptions !=undefined){opts=$.extend({},p.defaultoptions, opts);}
			$.get(dashboard.source, opts)
			.done(function(portletdata){
				$('#'+m_portletPrefixID + key).find('.portlet-data').html(portletdata);
			})
			.fail(function(jqxhr, status, err){
				DashboardManager.logDashboardError('Failed to load portlet content.  Portlet Key:'+key+' Error:' +err);
			});
		},
		clearPortlet: function(key){
			$('#'+m_portletPrefixID + key + ' .portlet-data').empty();
		},
		removePortlet: function(key){
			// set a cookie so that when we refresh the portlet doesn't show up
			DashboardManager.setCookie(key,"false");
			$('#'+m_portletPrefixID + key).remove();
			// add to the list of portlets that can be added back.
			DashboardUI.addPortletToSelector(key);
		 },
		 refreshPortlets: function(){
			var dashboard = DashboardManager.getActiveDashboard();
			for (var key in dashboard.portlets) {
			 if (DashboardManager.getCookie(key) != "false" && dashboard.portlets[key].display == true){
			    DashboardUI.updatePortletContent(key);
			 }
		   }
		},
		setSelectedPortletKey: function(key){
			$('#'+m_portletSelectorID).val(key);
		},
		addPortletToSelector: function(key){
			var p = DashboardManager.getActiveDashboard().portlets[key]
			if(p.selectable ==true){
				var sel = document.getElementById(m_portletSelectorID);
				sel.options[sel.length] = new Option(p.title, key);
				if (sel.selectedIndex = -1){
					sel.selectedIndex = 0;
				}	
			}
		},
		submitDashboardForm: function(){
			$('#'+m_dashboardFormID).submit();
		}
	}
/*Private functions */
	function removePortletFromSelector(key){
		$('#'+m_portletSelectorID + ' option[value="'+key+'"]').remove();
	}
	function getSelectedPortletKey(){
		var retval = null;
		var selected = $('#'+m_portletSelectorID + ' option:selected');
		if(selected.length >0){retval = $(selected).val();}
		return retval;
	}
	function clearDashboardForm(){
		$('#'+m_dashboardFormID).empty();
	}
	function clearPortlets(){
		$('.portlet-data').empty();
	}
	function clearPortletSelector(){
		$('#'+m_portletSelectorID).empty();
	}
	function clearDashboard(){
		clearDashboardForm();
		clearPortlets();
		clearPortletSelector();
	}
	function loadDashboardForm(url,callback){
		$.get(url)
		.done(function(data){
			$('#'+m_dashboardFormID).html(data);
			$('#'+m_dashboardFormID).append('<button id="btnSubmit" name="btnSubmit" type="submit">Submit</button>');
			//set default parameter values  based on options that were passed to the dashbaord screen
			if(!$.isEmptyObject(m_opts)){
				$.each(m_opts, function(key, val){
					var e = $('#'+m_dashboardFormID +' [name="'+key+'"]');
					if(e.length){
						e.val(val);
					}
				});
			}
		})
		.fail(function(jqxhr, status, err){
			DashboardManager.logDashboardError('Failed to load dashboard form.  URL:'+url + ' Error:' +err);
		})
		.complete(function(){
			if(typeof callback ==='function'){callback();}
		});
	}
	function initPortlets(dashboard){
		for(var key in dashboard.portlets){
			if (DashboardManager.getCookie(key) != "false" && dashboard.portlets[key].display == true){
				DashboardUI.addPortlet(key);
			} 
			else {
				DashboardUI.addPortletToSelector(key);
			}
		}
	}
})(jQuery);//end Dashboard UI
var DashboardTimer = (function(){
	var secs = 300
	var timerID = null
	var timerRunning = false
	var delay = 1000

	return {
		//public methods
		init: function() {
			this.StopTheClock()
			this.StartTheTimer()
		},
		StopTheClock: function() {
			if(timerRunning)
				clearTimeout(timerID)
			timerRunning = false
		},
		StartTheTimer: function() {
			if (secs==0) {
				this.StopTheClock()
				DashboardUI.refreshPortlets();
				// reset
				secs = 300;
				this.StartTheTimer();
			} 
			else {
				self.status = secs
				secs = secs - 1
				timerRunning = true
				timerID = self.setTimeout("DashboardTimer.StartTheTimer()", delay)
			}
		}
	}
})();