function calc_typ() {

	hp			= $("#hp").val() 			* 1;
	eff			= $("#efficiency").val()	* 1;
	ratio		= $("#ratio").val()			* 1;
	empty_drum	= $("#empty_diam").val()	/ 12;
	full_drum	= $("#full_diam").val()		/ 12;
	rpm			= $("#rpm").val()			* 1;

	full_force = ((hp * 5252) /  (0.5 * full_drum * rpm )) * (eff/100) * ratio;
	empty_force = ((hp * 5252) /  (0.5 * empty_drum * rpm )) * (eff/100) * ratio;

	full_speed = (Math.PI * rpm * full_drum) / (60 * ratio);
	empty_speed = (Math.PI * rpm * empty_drum) / (60 * ratio);

	$("#full_speed").val(Round(full_speed, 2));
	$("#empty_speed").val(Round(empty_speed, 2));

	$("#full_force").val(Round(full_force, 0));
	$("#empty_force").val(Round(empty_force, 0));

}


function Calculate_from_empty_speed() {

	hp			= $("#hp").val() 			* 1;
	eff			= $("#efficiency").val()	* 1;
	ratio		= $("#ratio").val()			* 1;
	empty_drum	= $("#empty_diam").val()	/ 12;
	full_drum	= $("#full_diam").val()		/ 12;
	rpm			= $("#rpm").val()			* 1;
	full_speed	= $("#full_speed").val()	* 1;
	empty_speed	= $("#empty_speed").val()	* 1;


//	ratio = (rpm * (empty_drum * Math.PI)) / ( 60 / empty_speed);
	ratio = (Math.PI * rpm * empty_drum) / (60 * empty_speed);
	empty_force = ((hp * 5252) /  (0.5 * empty_drum * rpm )) * (eff/100) * ratio;


	full_force = ((hp * 5252) /  (0.5 * full_drum * rpm)) * (eff/100) * ratio;
	full_speed = (Math.PI * rpm * full_drum) / (60 * ratio);


	$("#ratio").val(Round(ratio, 2));
	$("#empty_force").val(Round(empty_force, 0));
	$("#full_force").val(Round(full_force, 0));
	$("#full_speed").val(Round(full_speed, 2));

	//calc_typ();
}


function Calculate_from_full_speed() {

	hp			= $("#hp").val() 			* 1;
	eff			= $("#efficiency").val()	* 1;
	ratio		= $("#ratio").val()			* 1;
	empty_drum	= $("#empty_diam").val()	/ 12;
	full_drum	= $("#full_diam").val()		/ 12;
	rpm			= $("#rpm").val()			* 1;
	full_speed	= $("#full_speed").val()	* 1;
	empty_speed	= $("#empty_speed").val()	* 1;


//	ratio = (rpm * (empty_drum * Math.PI)) / ( 60 / empty_speed);
	ratio = (Math.PI * rpm * full_drum) / (60 * full_speed);

	full_force = ((hp * 5252) /  (0.5 * full_drum  * rpm )) * (eff/100) * ratio;

	empty_force = ((hp * 5252) /  (0.5 * empty_drum * rpm )) * (eff/100) * ratio;
	empty_speed = (Math.PI * rpm * empty_drum) / (60 * ratio);




	$("#ratio").val(Round(ratio, 2));
	$("#empty_speed").val(Round(empty_speed, 2));
	$("#empty_force").val(Round(empty_force, 0));

	$("#full_force").val(Round(full_force, 0));

	//calc_typ();
}


function Calculate_from_empty_force() {

	hp			= $("#hp").val() 			* 1;
	eff			= $("#efficiency").val()	* 1;
	empty_drum	= $("#empty_diam").val()	/ 12;
	full_drum	= $("#full_diam").val()		/ 12;
	rpm			= $("#rpm").val()			* 1;

	empty_force	= $("#empty_force").val()	* 1;


	ratio = empty_force / (((hp * 5252) /  (0.5 * empty_drum * rpm )) * (eff/100));

//	ratio = (Math.PI * rpm * empty_drum) / (60 * empty_speed);

	full_force = ((hp * 5252) /  (0.5 * full_drum * rpm)) * (eff/100) * ratio;
	full_speed = (Math.PI * rpm * full_drum) / (60 * ratio);
	empty_speed = (Math.PI * rpm * empty_drum) / (60 * ratio);


	$("#ratio").val(Round(ratio, 2));
	$("#empty_speed").val(Round(empty_speed, 2));
	$("#full_force").val(Round(full_force, 0));
	$("#full_speed").val(Round(full_speed, 2));

	//calc_typ();
}


function Calculate_from_full_force() {

	hp			= $("#hp").val() 			* 1;
	eff			= $("#efficiency").val()	* 1;
	empty_drum	= $("#empty_diam").val()	/ 12;
	full_drum	= $("#full_diam").val()		/ 12;
	rpm			= $("#rpm").val()			* 1;

	full_force	= $("#full_force").val()	* 1;


	ratio = full_force / (((hp * 5252) /  (0.5 * full_drum * rpm )) * (eff/100));


	full_speed = (Math.PI * rpm * full_drum) / (60 * ratio);
	empty_force = ((hp * 5252) /  (0.5 * empty_drum * rpm )) * (eff/100) * ratio;
	empty_speed = (Math.PI * rpm * empty_drum) / (60 * ratio);


	$("#ratio").val(Round(ratio, 2));
	$("#empty_speed").val(Round(empty_speed, 2));
	$("#empty_force").val(Round(empty_force, 0));
	$("#full_speed").val(Round(full_speed, 2));

	//calc_typ();
}


//function Calculate_from_force() {
//
//	hp			= $("#hp").val() 			* 1;
//	eff			= $("#efficiency").val()	* 1;
//	ratio		= $("#ratio").val()			* 1;
//	empty_drum	= $("#empty_diam").val()	* 1;
//	full_drum	= $("#full_diam").val()		* 1;
//	rpm			= $("#rpm").val()			* 1;
//	full_force	= $("#full_force").val()	* 1;
//	empty_force	= $("#empty_force").val()	* 1;
//
//	drum	= drum / 12;
//
//	torque = ((hp * 5252) / rpm) * (eff/100);
//
//	speed_int = (rpm * (drum * Math.PI)) / 60;
//	ideal_force = (torque / (drum / 2));
//
//	ratio = force / ideal_force;
//	speed = speed_int / ratio;
//
//	$("#ratio").val(Round(ratio, 2));
//	$("#speed").val(Round(speed, 2));
//
//}