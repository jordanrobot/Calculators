var shock = []

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

		case "working_energy":
			energyShock();
			break;


	} //switch

}

function distanceShock() {
	
	shock.err = false;
	get("weight");
	get("fall");
	get("stop");
	
	if ((shock.fall <= 0) || (shock.stop <= 0) || (shock.weight <= 0)) {
		shock.err = true;
	}
	
	if (shock.err == true) {
		$("#shock").val(0);

	} else {
	
		shock.force	= shock.weight * (1 + ((shock.fall * 12) / shock.stop));
		$("#shock").val(Round(shock.force, 1));
	}

} //distanceShock


function gacShock () {
	
	get("weight");
	get("fall");
	get("stop");
	get("rope_diameter");
	get("rope_length");
	get("wiretype");

	a = 1 + ((2 * shock.fall * (shock.rope_diameter * shock.rope_diameter * shock.wiretype) * 15000000) / (shock.weight * shock.rope_length * 12));
	shock.force = shock.weight * (1 + Math.sqrt(a));

	$("#shock").val(Round(shock.force, 1));
}


function elongationShock () {
	
	get("weight");
	get("fall");
	get("stop");
	get("rope_length");
	get("rope_load");
	get("per_elongation");

	a = (0.005 * shock.per_elongation * shock.rope_length) / shock.rope_load;
	b = -2 * a * shock.weight;
	c = -shock.weight * shock.fall;

	shock.force = ( -b + (Math.sqrt((b * b) - (4 * a * c)))) / (4 * a);

	$("#shock").val(Round(shock.force, 1));

} // elongationShock


function energyShock () {
	
	get("weight");
	get("fall");
	get("stop");
	get("rope_length");
	get("energy_absorbsion");




} // energyShock

function changeKind() {

	shock.calcKind = $("#calcKind").val();

	switch(shock.calcKind) {

		case "distance":
			$("#rope_diameter, #rope_length, #per_elongation, #wiretype, #energy_absorbsion, #rope_diameter_L, #rope_length_L, #per_elongation_L, #energy_absorbsion_L, #rope_load, #rope_load_L").hide('slow');
			$("#wiretype").parent().hide("slow");
			setGreen("#stop");
			$("#stop, #stop_L").show("slow");
			break;

		case "gac":
			$("#rope_diameter, #rope_length, #wiretype, #rope_diameter_L, #rope_length_L, #rope_stretch_L").show('slow');
			$("#wiretype").parent().show("slow");
			$("#energy_absorbsion, #energy_absorbsion_L, #per_elongation, #per_elongation_L, #rope_load, #rope_load_L, #stop, #stop_L").hide("slow");
			setRed("#stop");
			break;

		case "elongationpercentage":
			$("#rope_length, #rope_length_L, #per_elongation, #per_elongation_L, #rope_load, #rope_load_L").show('slow');
			$("#energy_absorbsion, #energy_absorbsion_L, #rope_diameter_L, #rope_diameter, #stop, #stop_L").hide("slow");
			$("#wiretype").parent().hide("slow");
			setRed("#stop");
			break;

		case "working_energy":
			$("#rope_length, #energy_absorbsion, #energy_absorbsion_L, #wiretype, #rope_length_L").show('slow');
			$("#per_elongation, #per_elongation_L, #rope_diameter_L, #rope_diameter, #rope_load, #rope_load_L, #stop, #stop_L").hide("slow");
			$("#wiretype").parent().hide("slow");
			setRed("#stop");
			break;

	} //switch
} //changeKing


function get(id) {
	var i = $("#" + id).val()
	shock[id] = (parseFloat(i)? parseFloat(i) : i);
}

