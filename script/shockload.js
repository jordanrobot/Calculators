var shock = {
	"calcKind": 		"",
	"weight": 			"",
	"fall": 			"",
	"stop": 			"",
	"err":				"false",
	"rope_diameter":	"",
	"rope_length":		"",
	"wiretype":			"",
	"rope_load":		"",
	"per_elongation":	"",
	"force":			""
};

function getShock() {
	
	shock.calcKind = $("#calcKind").val();

	switch(shock.calcKind) {

		case "distance":
			distanceShock();
		break;

		case "gac":
			gacShock();
		break;

		case "elongationpercentage":
			elongationShock();
		break;

		default:
		break;
//		case "working_energy":
//			energyShock();
//			break;

	} //switch

}

function distanceShock() {
	
	get(shock);
	
	if ((shock.fall <= 0) || (shock.stop <= 0) || (shock.weight <= 0)) {
		shock.err = true;
	}
	
	if (shock.err === true) {
		shock.force = 0;
		$("#force").val(shock.force);

	} else {
	
		shock.force	= shock.weight * (1 + ((shock.fall) / shock.stop));
		$("#force").val(Round(shock.force, 1));
	}

} //distanceShock


function gacShock () {
	
	get(shock);

	shock.force = shock.weight * (1 + Math.sqrt(1 + ((2 * shock.fall * (shock.rope_diameter * shock.rope_diameter * shock.wiretype) * 15000000) / (shock.weight * shock.rope_length * 12))));

	$("#force").val(Round(shock.force, 1));
}


function elongationShock () {
	
	get(shock);

	a = (0.005 * shock.per_elongation * shock.rope_length) / shock.rope_load;
	b = -2 * a * shock.weight;
	c = -shock.weight * shock.fall / 12;

	shock.force = ( -b + (Math.sqrt((b * b) - (4 * a * c)))) / (4 * a);

	$("#force").val(Round(shock.force, 1));

} // elongationShock


function changeKind() {

	shock.calcKind = $("#calcKind").val();

	switch(shock.calcKind) {

		case "distance":
			$("#rope_diameter, #rope_length, #per_elongation, #wiretype, #energy_absorbsion, #rope_diameter_L, #rope_length_L, #per_elongation_L, #energy_absorbsion_L, #rope_load, #rope_load_L, #rope_weight, #rope_weight_L").hide('slow');
			$("#wiretype").parent().hide("slow");
			setGreen("#stop");
			$("#stop, #stop_L").show("slow");
			break;

		case "gac":
			$("#rope_diameter, #rope_length, #wiretype, #rope_diameter_L, #rope_length_L, #rope_stretch_L").show('slow');
			$("#wiretype").parent().show("slow");
			$("#energy_absorbsion, #energy_absorbsion_L, #per_elongation, #per_elongation_L, #rope_load, #rope_load_L, #stop, #stop_L, #rope_weight, #rope_weight_L").hide("slow");
			setRed("#stop");
			break;

		case "elongationpercentage":
			$("#rope_length, #rope_length_L, #per_elongation, #per_elongation_L, #rope_load, #rope_load_L").show('slow');
			$("#energy_absorbsion, #energy_absorbsion_L, #rope_diameter_L, #rope_diameter, #stop, #stop_L, #rope_weight, #rope_weight_L").hide("slow");
			$("#wiretype").parent().hide("slow");
			setRed("#stop");
			break;

//		case "working_energy":
//			$("#rope_length, #energy_absorbsion, #energy_absorbsion_L, #wiretype, #rope_length_L, #rope_weight, #rope_weight_L").show('slow');
//			$("#per_elongation, #per_elongation_L, #rope_diameter_L, #rope_diameter, #rope_load, #rope_load_L, #stop, #stop_L").hide("slow");
//			$("#wiretype").parent().hide("slow");
//			setRed("#stop");
//			break;

		default:
		break;

	} //switch
} //changeKing

