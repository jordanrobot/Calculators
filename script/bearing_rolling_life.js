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


function calcBearing() {

	get(b);

	switch(b.variable) {

	case "lifetime":

		console.debug("calculate for " + b.variable);
		setGreen("#c, #c0, #load, #rpm"); 
		setRed("#s0, #hours");

		//S0 factor
		$("#s0").val(Round(b.c0/b.load, 2));

		//revolutions

		b.revs = Math.pow(b.c/(b.load * b.ring), b.type) * b.cx * b.reliability * b.conditionFactor * b.applicationFactor;
		$("#revs").val(Round(b.revs, 0)) ;

		//hours

		$("#hours").val( Round(b.revs / (b.rpm * 60),0));

	break;

	case "bearingRating":

		console.debug("calculate for " + b.variable);
		setRed("#c, #c0"); 
		setGreen("#load, #s0, #rpm, #hours");

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

		console.debug("calculate for " + b.variable);
		setGreen("#c, #c0, #rpm, #hours");
		setRed("#s0, #load");

		//S0 factor
		$("#s0").val(Round(b.c0/b.load, 2));
	
		//load
	
		b.revs = b.hours * 60 * b.rpm;
		$("#revs").val(Round(b.revs, 0));
	
		b.load = b.c / (b.ring * Math.pow((b.revs / (b.cx * b.reliability * b.conditionFactor * b.applicationFactor)), (1/b.type)));
		$("#load").val(Round(b.load, 0));

	break;

	case "rpm":

		console.debug("calculate for " + b.variable);
		setGreen("#c, #c0, #load, #hours");
		setRed("#s0, #rpm");

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
