var w = {
	"hp": "",
	"efficiency": 	"",
	"ratio": "",
	"drum": 	"",
	"rpm": "",
	"torque": "",
	"speed_int": "",
	"force": "",
	"ideal_speed": "",
	"force_int": "",
	"ideal_force": "",
	"speed_int": ""
};


function Calculate_imp() {

	get(w);

	w.drum	= w.drum / 12;
	w.torque	= ((w.hp * 5252) / w.rpm) * (w.efficiency/100);
	w.speed_int= (w.rpm * (w.drum * Math.PI)) / 60;
	w.force	= (w.torque / (w.drum / 2));

	w.speed = w.speed_int / w.ratio;
	w.force = w.force * w.ratio;

	$("#speed").val(Round(w.speed, 2));
	$("#force").val(Round(w.force, 0));

}

function Calculate_from_speed() {

	get(w);

	w.drum	= w.drum / 12;
	w.torque = ((w.hp * 5252) / w.rpm) * (w.efficiency/100);
	w.ideal_speed = (w.rpm * (w.drum * Math.PI)) / 60;
	w.force_int = (w.torque / (w.drum / 2));

	w.ratio = w.ideal_speed / w.speed;
	w.force = w.force_int * w.ratio;

	$("#ratio").val(Round(w.ratio, 2));
	$("#force").val(Round(w.force, 0));

}

function Calculate_from_force() {

	get(w);

	w.drum	= w.drum / 12;
	w.torque = ((w.hp * 5252) / w.rpm) * (w.efficiency/100);
	w.speed_int = (w.rpm * (w.drum * Math.PI)) / 60;
	w.ideal_force = (w.torque / (w.drum / 2));

	w.ratio = w.force / w.ideal_force;
	w.speed = w.speed_int / w.ratio;

	$("#ratio").val(Round(w.ratio, 2));
	$("#speed").val(Round(w.speed, 2));

}