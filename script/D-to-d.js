var d = {
	"cable": 	"",
	"tread": "",
	"ratio": "",
	"variable": "",
	"pitch":	"",
	"strength":	""
};


function calculateDd () {

	get(d);

	switch(d.variable) {

	case "ratio":
		setGreen("#cable, #tread"); 
		setRed("#ratio");

		d.ratio = (d.tread + d.cable) / d.cable;
		$("#ratio").val(Round(d.ratio, 1));
	break;

	case "cable":
		setRed("#cable");
		setGreen("#tread, #ratio");

		d.cable = (d.tread + d.cable) / d.pulley_Dd;
		$("#cable").val(Round(d.cable, 3));
	break;

	case "tread":
		setGreen("#cable, #ratio"); 
		setRed("#tread");

		d.tread = (d.cable * d.ratio) - d.cable;
		$("#tread").val(Round(d.tread, 2));
	break;

	default:
	break;

	} //switch

	// pitch diameter
	d.pitch = (d.tread * 1) + d.cable;
	$("#pitch").val(Round(d.pitch, 3));

	d.strength = (1 - (0.5 / Math.sqrt((d.tread + d.cable) / d.cable))) * 100;

	$("#strength").val(Round(d.strength, 0));

} // function calculateDd
