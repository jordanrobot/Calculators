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


function change (id, value) {
	b[id] = (parseFloat(value)? parseFloat(value) : value);
}

