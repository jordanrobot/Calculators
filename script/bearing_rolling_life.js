var b = {};

function changeVariable (value) {

	switch(value) {

	case "lifetime":
		console.debug("calculate for " + value);
		setGreen("#c"); 
		setGreen("#c0");
		setGreen("#load");
		setRed("#s0");
		setGreen("#rpm");
		setRed("#hours");
	break;

	case "bearingRating":
		console.debug("calculate for " + value);
		setRed("#c"); 
		setRed("#c0");
		setGreen("#load");
		setGreen("#s0");
		setGreen("#rpm");
		setGreen("#hours");
	break;

	case "load":
		console.debug("calculate for " + value);
		setGreen("#c");
		setGreen("#c0");
		setRed("#s0");
		setRed("#load");
		setGreen("#rpm");
		setGreen("#hours");
	break;

	case "rpm":
		console.debug("calculate for " + value);
		setGreen("#c");
		setGreen("#c0");
		setGreen("#load");
		setRed("#s0");
		setRed("#rpm");
		setGreen("#hours");
	break;
	default:
	break;

	} //switch

	calcBearing();
} //function changeVariable

function get(key, id) {
	var i = $("#" + id).val()
	key[id] = (parseFloat(i)? parseFloat(i) : i);
}

function calcBearing() {

	get(b, "variable");
	get(b, "type");
	get(b, "c");
	get(b, "c0");
	get(b, "load");
	get(b, "s0");
	get(b, "cx");
	get(b, "rpm");
	get(b, "hours");
	get(b, "revs");
	get(b, "ring");
	get(b, "reliability");
	get(b, "applicationFactor");
	get(b, "conditionFactor");
	get(b, "reliability");


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
