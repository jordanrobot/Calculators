function calculateHold() {
	calcKind = $("#calcKind").val();

	if (calcKind == "hold") {

	hold_val = $("#load").val() * Math.pow(Math.E, -$("#friction").val() * $("#wraps").val() * 2 * Math.PI);
	$("#hold").val(Round(hold_val, 2));

	};

	if (calcKind == "load") {

	load_val = $("#hold").val() * Math.pow(Math.E, $("#friction").val() * $("#wraps").val() * 2 * Math.PI);
	$("#load").val(Round(load_val, 2));

	};

}

function changeKind() {
	
	calcKind = $("#calcKind").val();

	if (calcKind == "hold") {
		setRed("#hold");
		setGreen("#load");
	};

	if (calcKind == "load") {
		setGreen("#hold");
		setRed("#load"); 
	};

}