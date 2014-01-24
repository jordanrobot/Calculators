


function Calculate_imp() {

	hp		= $("#hp").val() 			* 1;
	eff		= $("#efficiency").val()	* 1;
	ratio	= $("#ratio").val()		* 1;
	drum	= $("#drum").val()		* 1;
	rpm		= $("#rpm").val()			* 1;

	drum	= drum / 12;
	torque	= ((hp * 5252) / rpm) * (eff/100);
	speed_int= (rpm * (drum * Math.PI)) / 60;
	force	= (torque / (drum / 2));

	speed = speed_int / ratio;
	force = force * ratio;

	$("#speed").val(Round(speed, 2));
	$("#force").val(Round(force, 0));

}

function Calculate_from_speed() {

	hp		= $("#hp").val()			* 1;
	eff		= $("#efficiency").val()	* 1;
	drum	= $("#drum").val()		* 1;
	rpm		= $("#rpm").val()			* 1;
	speed	= $("#speed").val()		* 1;
	drum	= drum / 12;

	torque = ((hp * 5252) / rpm) * (eff/100);
	ideal_speed = (rpm * (drum * Math.PI)) / 60;
	force_int = (torque / (drum / 2));

	ratio = ideal_speed / speed;
	force = force_int * ratio;

	$("#ratio").val(Round(ratio, 2));
	$("#force").val(Round(force, 0));

}

function Calculate_from_force() {

	hp		= $("#hp").val()			* 1;
	eff		= $("#efficiency").val()	* 1;
	drum	= $("#drum").val()		* 1;
	rpm		= $("#rpm").val()			* 1;
	force	= $("#force").val()		* 1;
	drum	= drum / 12;

	torque = ((hp * 5252) / rpm) * (eff/100);
	speed_int = (rpm * (drum * Math.PI)) / 60;
	ideal_force = (torque / (drum / 2));

	ratio = force / ideal_force;
	speed = speed_int / ratio;

	$("#ratio").val(Round(ratio, 2));
	$("#speed").val(Round(speed, 2));

}