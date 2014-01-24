var shock = []

function getShock() {
	//	$("#shock").val(Round(($('#weight').val() * (($('#fall').val() / $('#stop').val()) + 1)), 1));
	
	shock.err = false;
	shock.mass	= $('#weight').val()* 1;
	shock.fall	= $('#fall').val()	* 1;
	shock.stop	= $('#stop').val()	* 1;
	
	if ((shock.fall <= 0) || (shock.stop <= 0) || (shock.mass <= 0)) {
		shock.err = true;
	}
	
	if (shock.err == true) {
		$("#shock").val(0);

	} else {
	
		shock.force	= shock.mass * (1 + (shock.fall / shock.stop));
		$("#shock").val(Round(shock.force, 1));
	}

} //function