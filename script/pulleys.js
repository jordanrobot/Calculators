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
	load	=	$("#load").val()		* 1;
	bore	=	$("#bore_d").val()		* 1;
	width	=	$("#bore_width").val()	* 1;
	wrap_deg	=	$("#wrap_deg").val()* 1;

	resultant = 2 * Math.cos(degtorad((180 - wrap_deg) / 2));

	tread_p = (resultant * load) / (cable_d * pulley_d);
	$("#tread_p").val(Round(tread_p, 0));

	bore_p = (resultant * load) / (bore * width);
	$("#bore_p").val(Round(bore_p, 0));

} // function calculateDd
