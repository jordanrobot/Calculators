var p = {
	"lead": 		"",
	"pitch": 		"",
	"width": 		"",
	"safety_wraps": "",
	"lines":		"",
	"active_wraps":	"",
	"payout":		"",
	"grooves":		""
};


function getMaxPayout() {

	get(p);

	// calculate total number of wraps
	p.active_wraps = (p.width / p.lead) - (p.safety_wraps * p.lines) - (p.lines * 0.5) - 1;

	// calculate payout in ft
	p.payout = ((p.active_wraps * p.pitch * Math.PI) / p.lines) / 12;
	$('#payout').val(Round(p.payout, 2));

	// calculate total number of grooves
	p.grooves = (p.width / p.lead);
	$('#grooves').val(Round(p.grooves, 2));

}