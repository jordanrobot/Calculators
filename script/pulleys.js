var p = {
	"cable": "",
	"tread": "",
	"ratio": "",
	"pitch": "",
	"variable": "",
	"load": "",
	"bore": "",
	"bore_p": "",
	"tread_p": "",
	"boreWidth": "",
	"wrap_deg": "",
	"resultant": ""
};


function calculateDd () {
	get(p);

	switch(p.variable) {

	case "ratio":
		setGreen("#cable, #tread"); 
		setRed("#ratio");
		p.ratio = (p.tread + p.cable) / p.cable;
		$("#ratio").val(Round(p.ratio, 1));
	break;

	case "cable":
		setRed("#cable");
		setGreen("#tread, #ratio");
		p.cable = (p.tread + p.cable) / p.ratio;
		$("#cable").val(Round(p.cable, 3));
	break;

	case "pulley":
		setGreen("#cable, #ratio"); 
		setRed("#tread");
		p.tread = (p.cable * p.ratio) - p.cable;
		$("#tread").val(Round(p.tread, 2));
	break;

	default:
	break;

	} //switch

	// Pitch Diameter
	p.pitch = p.tread + p.cable;
	$("#pitch").val(Round(p.pitch, 3));

	// Calculate resultant force
	p.resultant = 2 * Math.cos(degtorad((180 - p.wrap_deg) / 2));

	// Tread pressure
	p.tread_p = (p.resultant * p.load) / (p.cable * p.tread);
	$("#tread_p").val(Round(p.tread_p, 0));

	// Bore pressure
	p.bore_p = (p.resultant * p.load) / (p.bore * p.boreWidth);
	$("#bore_p").val(Round(p.bore_p, 0));

} // function calculateDd
