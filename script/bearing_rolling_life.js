var b = [];

//default values
b.reliability = 90;
b.Type 		= "ball";
b.ring		= 1;

function changeVariable (value) {

	switch(value) {

		case "operating_hours":
		setGreen("#dyn_load"); 
		setGreen("#rpm");
		setRed("#hours");
		break;

		case "dyn_load":
		setRed("#dyn_load"); 
		setGreen("#rpm");
		setGreen("#hours");
		break;

		case "rpm":
		setGreen("#dyn_load"); 
		setRed("#rpm");
		setGreen("#hours");
		break;

	} //switch
} //function changeVariable

function getEquivalent() {
	b.C0		=	$("#static_load").val() * 1;
	b.radial 	=	$("#rad_load").val() * 1;
	b.thrust 	=	$("#thr_load").val() * 1;
	b.e			= 	b.thrust/b.C0;

	getFactors();

	b.equivalent = (x * b.ring * b.radial) + (y * b.thrust) ;

	$("equ_load").val(Round(b.equivalent, 2));
}

function getFactors() {
	if ((b.radial / (b.ring * b.thrust)) =< e ) {
		var x = 1;
		var y = 1;
	} else {


	}


}

function change (id, value) {
	b[id] = (parseFloat(value)? parseFloat(value) : value);
}

