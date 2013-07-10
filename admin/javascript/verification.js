var newwindow;
function poptastic(url)
{
	newwindow=window.open(url,'name','height=600,width=600,tip=100,left=150,resizable=yes,scrollbars=yes,status=yes');
	if (window.focus) {newwindow.focus()}
}
function poptastic_wide(url)
{
	newwindow=window.open(url,'name','height=500,width=1100,tip=100,left=150,resizable=yes,scrollbars=yes,status=yes');
	if (window.focus) {newwindow.focus()}
}
function poptastic_sm(url)
{
	newwindow=window.open(url,'name','height=325,width=400,tip=100,left=150,resizable=yes,scrollbars=yes,status=yes');
	if (window.focus) {newwindow.focus()}
}

function fillStoreCodeLbls(n) {
  if (gverify1 != '') {
	  tableRows[0].cells[n].innerHTML = gverify1;tableRows[0].cells[n].id = gverify1;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify2 != '') {
	  tableRows[0].cells[n].innerHTML = gverify2;tableRows[0].cells[n].id = gverify2;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify3 != '') {
	  tableRows[0].cells[n].innerHTML = gverify3;tableRows[0].cells[n].id = gverify3;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify4 != '') {
	  tableRows[0].cells[n].innerHTML = gverify4;tableRows[0].cells[n].id = gverify4;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify5 != '') {
	  tableRows[0].cells[n].innerHTML = gverify5;tableRows[0].cells[n].id = gverify5;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify6 != '') {
	  tableRows[0].cells[n].innerHTML = gverify6;tableRows[0].cells[n].id = gverify6;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify7 != '') {
	  tableRows[0].cells[n].innerHTML = gverify7;tableRows[0].cells[n].id = gverify7;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify8 != '') {
	  tableRows[0].cells[n].innerHTML = gverify8;tableRows[0].cells[n].id = gverify8;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify9 != '') {
	  tableRows[0].cells[n].innerHTML = gverify9;tableRows[0].cells[n].id = gverify9;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
}

function verificationReportHdr() { 
  tableRows[0].cells[0].innerHTML = 'Teacher';
  tableRows[0].cells[1].innerHTML = 'Crs Num';
  tableRows[0].cells[2].innerHTML = 'GR';
  tableRows[0].cells[3].innerHTML = 'Student';
  tableRows[0].cells[4].innerHTML = 'Std #';
  tableRows[0].cells[numCols-2].innerHTML = 'Last Update';
  tableRows[0].cells[numCols-1].innerHTML = showterm + ' Comments';
  fillStoreCodeLbls(5);
}

function verificationHdr() {
  tableRows[0].cells[0].innerHTML = 'GR';
  tableRows[0].cells[1].innerHTML = 'Student';
  var n = 2;
  if (gverify1 != '') {
	  tableRows[0].cells[n].innerHTML = gverify1;tableRows[0].cells[n].id = gverify1;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify2 != '') {
	  tableRows[0].cells[n].innerHTML = gverify2;tableRows[0].cells[n].id = gverify2;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify3 != '') {
	  tableRows[0].cells[n].innerHTML = gverify3;tableRows[0].cells[n].id = gverify3;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify4 != '') {
	  tableRows[0].cells[n].innerHTML = gverify4;tableRows[0].cells[n].id = gverify4;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify5 != '') {
	  tableRows[0].cells[n].innerHTML = gverify5;tableRows[0].cells[n].id = gverify5;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify6 != '') {
	  tableRows[0].cells[n].innerHTML = gverify6;tableRows[0].cells[n].id = gverify6;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify7 != '') {
	  tableRows[0].cells[n].innerHTML = gverify7;tableRows[0].cells[n].id = gverify7;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify8 != '') {
	  tableRows[0].cells[n].innerHTML = gverify8;tableRows[0].cells[n].id = gverify8;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  if (gverify9 != '') {
	  tableRows[0].cells[n].innerHTML = gverify9;tableRows[0].cells[n].id = gverify9;n += 1;
	  if (spXtra == 1) {tableRows[0].cells[n].innerHTML = spLbl;n += 1;}
	  if (cgshowcit == 1) {tableRows[0].cells[n].innerHTML = 'Cit.';n += 1;}
  }
  
  tableRows[0].cells[numCols-2].innerHTML = 'Last Update';
  tableRows[0].cells[numCols-1].innerHTML = showterm + ' Comments';
}

function detailGradeHdr() {
  if (grp == 'student') {
	tableRows[0].cells[0].innerHTML = "Student";
	tableRows[0].cells[1].innerHTML = "GR";
	tableRows[0].cells[2].innerHTML = "Team";
	tableRows[0].cells[3].innerHTML = "House";
	tableRows[0].cells[4].innerHTML = "Teacher";
	tableRows[0].cells[5].innerHTML = "Course";
	tableRows[0].cells[6].innerHTML = "Crs Num";
	applyStrike = 4;
  } else if (grp == 'teacher') {
	tableRows[0].cells[0].innerHTML = "Teacher";
	tableRows[0].cells[1].innerHTML = "Course";
	tableRows[0].cells[2].innerHTML = "Crs Num";
	tableRows[0].cells[3].innerHTML = "Student";
	tableRows[0].cells[4].innerHTML = "GR";
	tableRows[0].cells[5].innerHTML = "Team";
	tableRows[0].cells[6].innerHTML = "House";
	applyStrike = 7;
  } else if (grp == 'course') {
	tableRows[0].cells[0].innerHTML = "Course";
	tableRows[0].cells[1].innerHTML = "Crs Num";
	tableRows[0].cells[2].innerHTML = "Teacher";
	tableRows[0].cells[3].innerHTML = "Student";
	tableRows[0].cells[4].innerHTML = "GR";
	tableRows[0].cells[5].innerHTML = "Team";
	tableRows[0].cells[6].innerHTML = "House";
	applyStrike = 7;
  }
  tableRows[0].cells[numCols-1].innerHTML = 'Last Update';
  fillStoreCodeLbls(7);
}

function verificationBdy() {
  if (loc == '') {loc = 'admin';}

	//array for holding the JSON data
	var sn = [];

	//declare vars for asynch request
	var callbacks = {

		//if request for JSON data is successful then perform this function
		success : function (o) {
				
			// process the JSON data returned from the server
			sn = YAHOO.lang.JSON.parse(o.responseText);

			// set b to 0, add 1 for a new row if needed
			var b = 0;
			var lastSDCID = 0,lastCCfrn = 0;
			var l = tableRows[0].cells.length-1;
				
			for(var s in sn) {
			  if ((lastSDCID != sn[s].sdcid) && (lastCCfrn != sn[s].ccfrn)) {
				b = b + 1;
				lastSDCID = sn[s].sdcid;
				lastCCfrn = sn[s].ccfrn;
					
				//create new row
				var tRow = document.createElement('TR');
				// create row cells
				for(var c=0;c<tableRows[0].cells.length;c++) {
					var tCell = document.createElement('TD');
					tCell.innerHTML = '-';
					tCell.align = 'center';
					tRow.appendChild(tCell);
				}
				tbody.appendChild(tRow);
					
				// set alternate row colors
				if(b % 2 == 1){tableRows[b].className = "oddRow" + sn[s].studentLeft;} else {tableRows[b].className = sn[s].studentLeft;}
					
				tableRows[b].cells[0].innerHTML = sn[s].gr;
				tableRows[b].cells[0].align = '';
				tableRows[b].cells[1].innerHTML = sn[s].student;
				tableRows[b].cells[1].align = '';
				tableRows[b].cells[l-1].innerHTML = sn[s].LastGradeUpdate;
			  }
			  //if store code is same as curfgname then enter comment
			  if (curfgname == sn[s].storeCode) {
				  tableRows[b].cells[l].innerHTML = sn[s].teachercomments;
				  tableRows[b].cells[l].align = '';
			  }
			  
			  var ltr='',ltrLnk='',per='',perLnk='',c1='',c2='',n=99;
			  ltr = sn[s].gbLtr+'&nbsp;';
			  ltrLnk = '<b><a href="javascript:poptastic(\'/admin/verification/VerificationScores.html?ac=buildsel;table=students;list=001'+sn[s].sdcid+'&frn=004'+sn[s].ccfrn+'&fg='+sn[s].storeCode+'\');">'+sn[s].gbLtr+'&nbsp;</a></b>';
			  per = sn[s].gbPer;
			  perLnk = '<b><a href="javascript:poptastic(\'/admin/verification/VerificationScores.html?ac=buildsel;table=students;list=001'+sn[s].sdcid+'&frn=004'+sn[s].ccfrn+'&fg='+sn[s].storeCode+'\');">'+sn[s].gbPer+'&nbsp;</a></b>';
			  
			  if (showper == '0') {
				  if (sn[s].sgLtr != '') {c1 = sn[s].sgLtr + '/' + ltrLnk;} else {c1 = ltrLnk;}
			  }
			  if (showper == '1') {
				  if (sn[s].sgLtr != '') {c1 = sn[s].sgLtr + '/' + ltrLnk;} else {c1 = ltrLnk;}
				  c2 = per;
			  }
			  if (showper == '2') {
				  if (sn[s].sgLtr != '') {c1 = sn[s].sgLtr + '/' + ltrLnk;} else {c1 = ltrLnk;}
				  if (sn[s].sgPer != '') {c2 = sn[s].sgPer + '/' + per;} else {c2 = per;}
			  }
			  if (showper == '3') {
				  if (sn[s].sgPer != '') {c1 = sn[s].sgPer + '/' + perLnk;} else {c1 = perLnk;}
				  c2 = ltr;
			  }
			  if (showper == '4') {
				  if (sn[s].sgPer != '') {c1 = sn[s].sgPer + '/' + perLnk;} else {c1 = perLnk;}
			  }
			  
			  //find which column to start with based on which store code it is
			    for (var d=0;d<tableRows[0].cells.length;d++) {
			      if (tableRows[0].cells[d].id == sn[s].storeCode) {
				    n = d;
				  }
			    }
			  
			  //if grades are from gverify1 then put in the first rows
			  if ((gverify1 != '')&&(gverify1 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify2 then put in the first rows
			  if ((gverify2 != '')&&(gverify2 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify3 then put in the first rows
			  if ((gverify3 != '')&&(gverify3 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify4 then put in the first rows
			  if ((gverify4 != '')&&(gverify4 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify5 then put in the first rows
			  if ((gverify5 != '')&&(gverify5 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify6 then put in the first rows
			  if ((gverify6 != '')&&(gverify6 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify7 then put in the first rows
			  if ((gverify7 != '')&&(gverify7 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify8 then put in the first rows
			  if ((gverify8 != '')&&(gverify8 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify9 then put in the first rows
			  if ((gverify9 != '')&&(gverify9 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  
			}
				
		},
		failure : function (o) {
			if (!YAHOO.util.Connect.isCallInProgress(o)) {
				alert("Failed to connect.");
			}
		},

		timeout : 60000
	}

	// Make the call to the server for JSON data
	YAHOO.util.Connect.asyncRequest('GET','/'+loc+'/verification/verificationJSON.html?sectionid='+sectionid, callbacks);
}

function verificationReportBdy() {
	var cur = s;

	//array for holding the JSON data
	var sn = [];

	//declare vars for asynch request
	var callbacks = {
		cache:false,

		//if request for JSON data is successful then perform this function
		success : function (o) {
				
			// process the JSON data returned from the server
			sn = YAHOO.lang.JSON.parse(o.responseText); 

			// set b to 0, add 1 for a new row if needed
			var b=0,r=0,lastSDCID = 0,lastCCfrn = 0,lastSec='',l=tableRows[0].cells.length-1;
				
			for(var s in sn) { 
			  if (lastCCfrn != sn[s].ccfrn) {
				b = b + 1;
				lastSDCID = sn[s].sdcid;
				lastCCfrn = sn[s].ccfrn;
				
				if ((b != 1)&&(lastSec != sn[s].crsSection)&&(cur != 'cur')) {
					var tRow = document.createElement('TR');
					var tCell = document.createElement('TD');
					tCell.innerHTML = '<hr>';
					tCell.colSpan = tableRows[0].cells.length;
					tRow.appendChild(tCell);
					tbody.appendChild(tRow);
					b = b + 1;
				}
					
				//create new row
				var tRow = document.createElement('TR');
				// create row cells
				for(var c=0;c<tableRows[0].cells.length;c++) {
					var tCell = document.createElement('TD');
					tCell.innerHTML = '-';
					tCell.align = 'center';
					tRow.appendChild(tCell);
				}
				tbody.appendChild(tRow);
					
				// set alternate row colors
				if(b % 2 == 1){tableRows[b].className = "oddRow" + sn[s].studentLeft;} else {tableRows[b].className = sn[s].studentLeft;}
				if(lastSec != sn[s].crsSection) {
				  lastSec = sn[s].crsSection;
				  r=b;
				  tableRows[b].cells[0].innerHTML = sn[s].teacher;
				  tableRows[b].cells[0].align = '';
				  tableRows[b].cells[1].innerHTML = sn[s].crsSection;
				  tableRows[b].cells[1].align = '';
				} else {
				  tableRows[b].cells[0].style.display = 'none';
				  tableRows[r].cells[0].rowSpan = b-r+1;
				  tableRows[b].cells[1].style.display = 'none';
				  tableRows[r].cells[1].rowSpan = b-r+1;
				}
				tableRows[b].cells[2].innerHTML = sn[s].gr;
				tableRows[b].cells[2].align = '';
				tableRows[b].cells[3].innerHTML = sn[s].student;
				tableRows[b].cells[3].align = '';
				tableRows[b].cells[4].innerHTML = sn[s].stdNum;
				tableRows[b].cells[4].align = '';
				tableRows[b].cells[l-1].innerHTML = sn[s].LastGradeUpdate;
			  }
			  //if store code is same as curfgname then enter comment
			  if (curfgname == sn[s].storeCode) {
				  tableRows[b].cells[l].innerHTML = sn[s].teachercomments;
				  tableRows[b].cells[l].align = '';
			  }
			  
			  var ltr='',ltrLnk='',per='',perLnk='',c1='',c2='',n=99;
			  ltr = sn[s].gbLtr+'&nbsp;';
			  ltrLnk = '<b><a href="javascript:poptastic(\'/admin/verification/VerificationScores.html?ac=buildsel;table=students;list=001'+sn[s].sdcid+'&frn=004'+sn[s].ccfrn+'&fg='+sn[s].storeCode+'\');">'+sn[s].gbLtr+'&nbsp;</a></b>';
			  per = sn[s].gbPer;
			  perLnk = '<b><a href="javascript:poptastic(\'/admin/verification/VerificationScores.html?ac=buildsel;table=students;list=001'+sn[s].sdcid+'&frn=004'+sn[s].ccfrn+'&fg='+sn[s].storeCode+'\');">'+sn[s].gbPer+'&nbsp;</a></b>';
			  
			  if (showper == '0') {
				  if (sn[s].sgLtr != '') {c1 = sn[s].sgLtr + '/' + ltrLnk;} else {c1 = ltrLnk;}
			  }
			  if (showper == '1') {
				  if (sn[s].sgLtr != '') {c1 = sn[s].sgLtr + '/' + ltrLnk;} else {c1 = ltrLnk;}
				  c2 = per;
			  }
			  if (showper == '2') {
				  if (sn[s].sgLtr != '') {c1 = sn[s].sgLtr + '/' + ltrLnk;} else {c1 = ltrLnk;}
				  if (sn[s].sgPer != '') {c2 = sn[s].sgPer + '/' + per;} else {c2 = per;}
			  }
			  if (showper == '3') {
				  if (sn[s].sgPer != '') {c1 = sn[s].sgPer + '/' + perLnk;} else {c1 = perLnk;}
				  c2 = ltr;
			  }
			  if (showper == '4') {
				  if (sn[s].sgPer != '') {c1 = sn[s].sgPer + '/' + perLnk;} else {c1 = perLnk;}
			  }
			  
			  //find which column to start with based on which store code it is
			    for (var d=0;d<tableRows[0].cells.length;d++) {
			      if (tableRows[0].cells[d].id == sn[s].storeCode) {
				    n = d;
				  }
			    }
			  
			  //if grades are from gverify1 then put in the first rows
			  if ((gverify1 != '')&&(gverify1 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify2 then put in the first rows
			  if ((gverify2 != '')&&(gverify2 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify3 then put in the first rows
			  if ((gverify3 != '')&&(gverify3 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify4 then put in the first rows
			  if ((gverify4 != '')&&(gverify4 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify5 then put in the first rows
			  if ((gverify5 != '')&&(gverify5 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify6 then put in the first rows
			  if ((gverify6 != '')&&(gverify6 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify7 then put in the first rows
			  if ((gverify7 != '')&&(gverify7 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify8 then put in the first rows
			  if ((gverify8 != '')&&(gverify8 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  //if grades are from gverify9 then put in the first rows
			  if ((gverify9 != '')&&(gverify9 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  }
			  
			}
				
		},
		failure : function (o) {
			if (!YAHOO.util.Connect.isCallInProgress(o)) {
				alert("Failed to connect.");
			}
		},

		timeout : 600000
	}

	// Make the call to the server for JSON data
	YAHOO.util.Connect.asyncRequest('GET',qryLoc, callbacks);
	//YAHOO.util.Connect.asyncRequest('GET','/admin/reports/grading/verificationDetailJSON.html?dothisfor=selected&t='+t, callbacks);
}

function detailGradeBody() {

	//array for holding the JSON data
	var sn = [];

	//declare vars for asynch request
	var callbacks = {
		cache:false,

		//if request for JSON data is successful then perform this function
		success : function (o) {
				
			// process the JSON data returned from the server
			sn = YAHOO.lang.JSON.parse(o.responseText); 

			// set b to 0, add 1 for a new row if needed
			var a=0,b=0,hr=0,r=0,l=tableRows[0].cells.length-1,lastSDCID = 0,lastCCfrn = 0,lastSec='',lastRec="",thisRec="";
			
			for(var s in sn) { 
				var ltr='',ltrLnk='',per='',perLnk='',c1='',c2='',x='',n=99;
				  
				//if the record involves a group change then add in the group information otherwise leave those cells blank
				if (grp == 'student') {thisRec = sn[s].stdNum;}
				if (grp == 'teacher') {thisRec = sn[s].crsSection;}
				if (grp == 'course') {thisRec = sn[s].crsSection;}
				if (lastRec == thisRec) {x = '<br>';}
				
				if (lastCCfrn != sn[s].ccfrn) {
					a = a + 1;
					b = b + 1;
					//lastSDCID = sn[s].sdcid;
					lastCCfrn = sn[s].ccfrn;
				
					if ((b != 1)&&(lastRec != thisRec)) {
						var tRow = document.createElement('TR');
						var tCell = document.createElement('TD');
						tCell.innerHTML = '<hr>';
						hr = hr + 1;
						tCell.colSpan = tableRows[0].cells.length;
						tRow.appendChild(tCell);
						tbody.appendChild(tRow);
						b = b + 1;
					}
					
					//create new row
					var tRow = document.createElement('TR');
					// create row cells
					for(var c=0;c<tableRows[0].cells.length;c++) {
						var tCell = document.createElement('TD');
						tCell.innerHTML = '-';
						tCell.align = 'center';
						tRow.appendChild(tCell);
					}
					tbody.appendChild(tRow);
					
					// set alternate row colors
					if((b-hr) % 2 == 1){tableRows[b].className = "oddRow" + sn[s].studentLeft;} else {tableRows[b].className = sn[s].studentLeft;}
					
					// set non-repeating values
					tableRows[b].cells[l].innerHTML = sn[s].LastGradeUpdate;
					if (grp == 'student') {
					  	if (lastRec != thisRec) {
							r=b;
							tableRows[b].cells[0].innerHTML = '<a href="/admin/students/home.html?frn=001' + sn[s].sdcid + '" target="_blank" >' + sn[s].student + '</a>';
							tableRows[b].cells[1].innerHTML = sn[s].gr;
							tableRows[b].cells[2].innerHTML = sn[s].team;
							tableRows[b].cells[3].innerHTML = sn[s].house;
					  	} else {
							tableRows[b].cells[0].style.display = 'none';
							tableRows[r].cells[0].rowSpan = b-r+1;
							tableRows[b].cells[1].style.display = 'none';
							tableRows[r].cells[1].rowSpan = b-r+1;
							tableRows[b].cells[2].style.display = 'none';
							tableRows[r].cells[2].rowSpan = b-r+1;
							tableRows[b].cells[3].style.display = 'none';
							tableRows[r].cells[3].rowSpan = b-r+1;
						}
					  	tableRows[b].cells[4].innerHTML = sn[s].teacher;
					  	tableRows[b].cells[5].innerHTML = sn[s].crsName;
					  	tableRows[b].cells[6].innerHTML = sn[s].crsSection;  
					} else if (grp == 'teacher') {
					  	if (lastRec != thisRec) {
							r=b;
							tableRows[b].cells[0].innerHTML = sn[s].teacher;
							tableRows[b].cells[1].innerHTML = sn[s].crsName;
							tableRows[b].cells[2].innerHTML = sn[s].crsSection;
					  	} else {
							tableRows[b].cells[0].style.display = 'none';
							tableRows[r].cells[0].rowSpan = b-r+1;
							tableRows[b].cells[1].style.display = 'none';
							tableRows[r].cells[1].rowSpan = b-r+1;
							tableRows[b].cells[2].style.display = 'none';
							tableRows[r].cells[2].rowSpan = b-r+1;
						}
					  	tableRows[b].cells[3].innerHTML = '<a href="/admin/students/home.html?frn=001' + sn[s].sdcid + '" target="_blank" >' + sn[s].student + '</a>';
					  	tableRows[b].cells[4].innerHTML = sn[s].gr;
					  	tableRows[b].cells[5].innerHTML = sn[s].team;
					  	tableRows[b].cells[6].innerHTML = sn[s].house;
					} else if (grp == 'course') {
					  	if (lastRec != thisRec) {
							r=b;
							tableRows[b].cells[0].innerHTML = sn[s].crsName;
							tableRows[b].cells[1].innerHTML = sn[s].crsSection;
							tableRows[b].cells[2].innerHTML = sn[s].teacher;
					  	} else {
							tableRows[b].cells[0].style.display = 'none';
							tableRows[r].cells[0].rowSpan = b-r+1;
							tableRows[b].cells[1].style.display = 'none';
							tableRows[r].cells[1].rowSpan = b-r+1;
							tableRows[b].cells[2].style.display = 'none';
							tableRows[r].cells[2].rowSpan = b-r+1;
						}
					  	tableRows[b].cells[3].innerHTML = '<a href="/admin/students/home.html?frn=001' + sn[s].sdcid + '" target="_blank" >' + sn[s].student + '</a>';
					  	tableRows[b].cells[4].innerHTML = sn[s].gr;
					  	tableRows[b].cells[5].innerHTML = sn[s].team;
					  	tableRows[b].cells[6].innerHTML = sn[s].house;
					}
				}
				ltr = sn[s].gbLtr+'&nbsp;';
				ltrLnk = '<b><a href="javascript:poptastic(\'/admin/verification/VerificationScores.html?ac=buildsel;table=students;list=001'+sn[s].sdcid+'&frn=004'+sn[s].ccfrn+'&fg='+sn[s].storeCode+'\');">'+sn[s].gbLtr+'&nbsp;</a></b>';
				per = sn[s].gbPer;
				perLnk = '<b><a href="javascript:poptastic(\'/admin/verification/VerificationScores.html?ac=buildsel;table=students;list=001'+sn[s].sdcid+'&frn=004'+sn[s].ccfrn+'&fg='+sn[s].storeCode+'\');">'+sn[s].gbPer+'&nbsp;</a></b>';
				  
				if (showper == '0') {
					if (sn[s].sgLtr != '') {c1 = sn[s].sgLtr + '/' + ltrLnk;} else {c1 = ltrLnk;}
			  	}
				if (showper == '1') {
				  	if (sn[s].sgLtr != '') {c1 = sn[s].sgLtr + '/' + ltrLnk;} else {c1 = ltrLnk;}
				  	c2 = per;
			  	}
			  	if (showper == '2') {
				  	if (sn[s].sgLtr != '') {c1 = sn[s].sgLtr + '/' + ltrLnk;} else {c1 = ltrLnk;}
				  	if (sn[s].sgPer != '') {c2 = sn[s].sgPer + '/' + per;} else {c2 = per;}
			  	}
			  	if (showper == '3') {
				  	if (sn[s].sgPer != '') {c1 = sn[s].sgPer + '/' + perLnk;} else {c1 = perLnk;}
				  	c2 = ltr;
			  	}
			  	if (showper == '4') {
				  	if (sn[s].sgPer != '') {c1 = sn[s].sgPer + '/' + perLnk;} else {c1 = perLnk;}
			  	}
			  
			  	//find which column to start with based on which store code it is
			    for (var d=0;d<tableRows[0].cells.length;d++) {
			      if (tableRows[0].cells[d].id == sn[s].storeCode) {
				    n = d;
				  }
			    }
			    
			  	//if grades are from gverify1 then put in the first rows
			  	if ((gverify1 != '')&&(gverify1 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  	}
			  	//if grades are from gverify2 then put in the first rows
			  	if ((gverify2 != '')&&(gverify2 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  	}
			  	//if grades are from gverify3 then put in the first rows
			  	if ((gverify3 != '')&&(gverify3 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  	}
			  	//if grades are from gverify4 then put in the first rows
			  	if ((gverify4 != '')&&(gverify4 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  	}
			  	//if grades are from gverify5 then put in the first rows
			  	if ((gverify5 != '')&&(gverify5 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  	}
			 	 //if grades are from gverify6 then put in the first rows
			  	if ((gverify6 != '')&&(gverify6 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  	}
			  	//if grades are from gverify7 then put in the first rows
			  	if ((gverify7 != '')&&(gverify7 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  	}
			  	//if grades are from gverify8 then put in the first rows
			  	if ((gverify8 != '')&&(gverify8 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  	}
			  	//if grades are from gverify9 then put in the first rows
			 	 if ((gverify9 != '')&&(gverify9 == sn[s].storeCode)) {
				  tableRows[b].cells[n].innerHTML = c1;n += 1;
				  if (spXtra == 1) {tableRows[b].cells[n].innerHTML = c2;n += 1;}
				  if (cgshowcit == 1) {tableRows[b].cells[n].innerHTML = sn[s].gbCit;n += 1;}
			  	}
				lastRec = thisRec;
			//end of loop  
			}
		},
		failure : function (o) {
			if (!YAHOO.util.Connect.isCallInProgress(o)) {
				alert("Failed to connect.");
			}
		},

		timeout : 600000
	}

	// Make the call to the server for JSON data
	YAHOO.util.Connect.asyncRequest('GET',qryLoc, callbacks);
}

function clearTable() {
  var rows2delete = tableRows.length
		
  for (var y=1; y<rows2delete; y++) {
	var rIndex = tableRows[1].sectionRowIndex;
	tableRows[1].parentNode.deleteRow(rIndex);
  }
}