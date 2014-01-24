function Calculate() {

	variable = $("#variable").val();
	hp = $("#hp").val() * 1;
	eff  = $("#efficiency").val() * 1;


	if (variable == "force") {
	
		speed = $("#speed").val() * 1;
	
		force = ((hp * 550) / speed) * (eff / 100);
	
		$("#force").val(Round(force, 0));
	
	} else if (variable == "speed") {
	
		force = $("#force").val() * 1;
	
		speed = ((hp * 550) / force) * (eff / 100);
	
		$("#speed").val(Round(speed, 2));
	
	} else if (variable == "hp") {

		force =  $("#force").val() * 1;
		speed = $("#speed").val() * 1;

		hp = ((force * speed) / ( 550 * (eff / 100)));
		$("#hp").val(Round(hp, 2));

	}

}


function Change_Power() {

	variable = $("#variable").val();
		if (variable == "force") {
	
			if ($("#power_level").val() == "0") {
				$("#speed").prop("max", "20");
				$("#hp").prop("max", "20");
			}
		
			if ($("#power_level").val() == "1") {
				$("#speed").prop("max", "50");
				$("#hp").prop("max", "100");
			}
	
	} else if (variable == "speed") {
	
		if ($("#power_level").val() == "0") {
			$("#hp").prop("max", "20");
			$("#force").prop("max", "2000");
		}
	
		if ($("#power_level").val() == "1") {
			$("#hp").prop("max", "100");
			$("#force").prop("max", "60000");
		}
	
	}
}


function changeVariable() {

	variable = $("#variable").val();

	if (variable == "speed") {
        setRed("#speed");
        setGreen("#force");
	} else if (variable == "force") {
        setGreen("#speed");
        setRed("#force");
	} else if (variable == "hp") {
		setGreen("#speed");
		setGreen("#force");
	}

}
