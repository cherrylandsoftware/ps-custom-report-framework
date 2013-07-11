//Core Custom Report Manager Object
var crm ={
	preftype:{},
	coredata:{},
	catfilters:{},
	cache:{}
};
//number of seconds that cache will be used before a rescan
//crm.cache.expirelength = 3200; //Moved to customreports.html page to control caching based on File or CPM

//Predefined preference types
crm.preftype.global ='g';
crm.preftype.user ='u';
crm.preftype.school='s';

/*School category filter. 
[key]=schoolid to hide categories from.  
[contents]= list of categories to be hidden from associated key.  

--DEFAULT CONFIG--
crm.catfilters.school['0'] = ['schedule']; //hide these categories from district
crm.catfilters.school['-0'] = [''];  //hide these categories from non-district
crm.catfilters.school['*'] = ['c_reportmanager','sqlreports','includes','vendor','dashboards'];  //hide these categories at all times
--END DEFAULT CONFIG--
*/
crm.catfilters.school = new Array();
crm.catfilters.school['0'] = ['schedule'];
crm.catfilters.school['-0'] = [''];
crm.catfilters.school['*'] = ['c_reportmanager','sqlreports','includes','vendor','dashboards'];


/*Filter report categories based on current security group.  
[key]= Category to apply security group filter
[values] = List of comma seperated numbers that match security group numbers.  A positive group number will hide the category from that group.  A negative group number will retain the category for the defined group, but will hide it from all other groups.

--DEFAULT CONFIG--
var crm.catfilters.securitygroup = new Array(); 
crm.catfilters.securitygroup['validation'] = [-9];
--END DEFAULT CONFIG--
*/
crm.catfilters.securitygroup = new Array();
crm.catfilters.securitygroup['validation'] = [-9];

//Known Sources Config
crm.sources = new Array();
crm.sources['PDS'] = { title:"PowerDataSolutions", link:'http://powerdatasolutions.org'};
crm.sources['SIS Resources'] = {title:"SIS Resources", link:"http://www.sisresources.com"};
crm.sources['crb-core'] = {title:"Custom Report Bundle",link:"http://powerdatasolutions.org"};

//Default report object settings
crm.reportDefaults = {
	name:'',
	author:'Unknown',
	version:'1.0',
	description:'&nbsp;',
	hidden:false,
	querystring:'',
	schoolonly:false,
	districtonly:false,
	statereport:'',
	previewsource:'',
	require_pref:'',
	matchrules:{
		securitygroup:'',
		schoolid:'',
		pref:'',
		schoolpref:'',
		userpref:'',
		sql:''
	},
	other:{}
}
//end configuration