$(document).ready(function(){
	// resume accordian.
	$('#resumeacc')
		.accordion({active: false, collapsible: true, header: "h3", autoHeight: false});

	$('#ExpAcc')
		.accordion({active: false, collapsible: true, header: "h4", autoHeight: false});
	
	$('#SkillAcc')
		.accordion({active: false, collapsible: true, header: "h5", autoHeight: false});
	
	// Tabs
	// -----  Must be activated after accordians that fall within the tab.
	$('#tabs').tabs();

	$('#family').resizable();

});

