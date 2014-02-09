var b = [];

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
		setGreen("#s0");
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

	} //switch
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

		//hours

		break;

		case "bearingRating":

		//c0
		$("#c0").val(Round(b.s0*b.load, 0));		

		//c

		//revolutions

		break;

		case "load":
		//S0 factor
		$("s0#").val(Round(b.c0/b.load, 2));

		//load

		//revolutions

		break;

		case "rpm":

		//S0 factor
		$("s0#").val(Round(b.load/b.c0, 2));

		//rpm

		//revolutions

		break;

	} //switch


}
