function changeVariable () {

	var variable = $("#variable").val();

	switch(variable) {

		case "Dd_ratio":
		setGreen("#cable_d"); 
		setGreen("#pulley_d");
		setRed("#Dd_ratio");
		break;

		case "cable":
		setRed("#cable_d");
		setGreen("#pulley_d");
		setGreen("#Dd_ratio");
		break;

		case "pulley":
		setGreen("#cable_d"); 
		setRed("#pulley_d");
		setGreen("#Dd_ratio");
		break;

	} //switch

} //function changeVariable

function calculateDd () {
	cable_d = $("#cable_d").val() * 1;
	pulley_d = $("#pulley_d").val() * 1;
	pulley_Dd = $("#Dd_ratio").val() * 1;
	variable = $("#variable").val();

	switch(variable) {

		case "Dd_ratio":
		$("#Dd_ratio").val(Round((pulley_d + cable_d) / cable_d, 1));
		break;

		case "cable":
		$("#cable_d").val(Round((pulley_d + cable_d) / pulley_Dd, 3));
		break;

		case "pulley":
		$("#pulley_d").val(Round((cable_d * pulley_Dd) - cable_d, 2));
		break;

	} //switch

	$("#pitch_d").val(Round(($("#pulley_d").val() * 1) + cable_d, 3));

	cable_d = 	$("#cable_d").val() 	* 1;
	pulley_d = 	$("#pulley_d").val()	* 1;
	strength = 1 - (0.5 / Math.sqrt((pulley_d + cable_d) / cable_d));

	$("#strength").val(Round(strength * 100, 0));

} // function calculateDd
