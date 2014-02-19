var b = {
	"variable": 			"",
	"type": 				"",
	"c": 					"",
	"c0": 					"",
	"load": 				"",
	"s0": 					"",
	"cx": 					"",
	"rpm": 					"",
	"hours": 				"",
	"revs": 				"",
	"ring": 				"",
	"reliability": 			"",
	"applicationFactor": 	"",
	"conditionFactor": 		"",
	"reliability": 			""
};

function changeVariable (value) {

	switch(value) {

	case "lifetime":
		console.debug("calculate for " + value);
		setGreen("#c, #c0, #load, #rpm"); 
		setRed("#s0, #hours");
	break;

	case "bearingRating":
		console.debug("calculate for " + value);
		setRed("#c, #c0"); 
		setGreen("#load, #s0, #rpm, #hours");
	break;

	case "load":
		console.debug("calculate for " + value);
		setGreen("#c, #c0, #rpm, #hours");
		setRed("#s0, #load");
	break;

	case "rpm":
		console.debug("calculate for " + value);
		setGreen("#c, #c0, #load, #hours");
		setRed("#s0, #rpm");
	break;
	default:
	break;

	} //switch

	calcBearing();
} //function changeVariable

//function get(key, id) {
//	var i = $("#" + id).val()
//	key[id] = (parseFloat(i)? parseFloat(i) : i);
//}

function calcBearing() {

	for (i in b) {
		get(b, i);
	}

	switch(b.variable) {

	case "lifetime":

		//S0 factor
		$("#s0").val(Round(b.c0/b.load, 2));

		//revolutions

		b.revs = Math.pow(b.c/(b.load * b.ring), b.type) * b.cx * b.reliability * b.conditionFactor * b.applicationFactor;
		$("#revs").val(Round(b.revs, 0)) ;

		//hours

		$("#hours").val( Round(b.revs / (b.rpm * 60),0));

	break;

	case "bearingRating":

		//c0
		$("#c0").val(Round(b.s0*b.load, 0));

		//revolutions
		b.revs = b.hours * 60 * b.rpm;
		$("#revs").val(Round(b.revs, 0));

		//c
		b.c = (b.load * b.ring) * Math.pow((b.revs / (b.cx * b.reliability * b.conditionFactor * b.applicationFactor)), (1/b.type));
		$("#c").val(Round(b.c, 0));

	break;

	case "load":
		//S0 factor
		$("#s0").val(Round(b.c0/b.load, 2));
	
		//load
	
		b.revs = b.hours * 60 * b.rpm;
		$("#revs").val(Round(b.revs, 0));
	
		b.load = b.c / (b.ring * Math.pow((b.revs / (b.cx * b.reliability * b.conditionFactor * b.applicationFactor)), (1/b.type)));
		$("#load").val(Round(b.load, 0));

	break;

	case "rpm":

		//S0 factor
		$("#s0").val(Round(b.load/b.c0, 2));
	
		//solve for revs
		b.revs = Math.pow(b.c/(b.load * b.ring), b.type) * b.cx * b.reliability * b.conditionFactor * b.applicationFactor;
		$("#revs").val(Round(b.revs, 0)) ;
	
		//solve for rpm
		b.rpm = b.revs / (b.hours * 60);
		$("#rpm").val(Round(b.rpm, 0));

	break;

	default:
	break;

	} // switch
}
