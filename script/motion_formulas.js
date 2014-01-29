var mo = [];
var force = [];
var pt = [];


function init() {

	console.debug("init()");
	// get initial motion values
	// calculate Time

	mo.speed	= $("#speed").val()		* 1;
	mo.accel 	= $("#accel").val()		* 1;
	mo.decel	= $("#decel").val()		* 1;
	mo.distance	= $("#distance").val()	* 1;

	mo.timeA = mo.speed / mo.accel;
	mo.timeD = mo.speed / mo.decel;

	mo.distanceA = (mo.accel * (mo.timeA * mo.timeA))/2;
	mo.distanceD = (mo.decel * (mo.timeD * mo.timeD))/2;
	mo.distanceS = mo.distance - (mo.distanceA + mo.distanceD);

	mo.timeS = mo.distanceS / mo.speed;

	$("#dist_a").val(Round(mo.distanceA, 2));
	$("#dist_d").val(Round(mo.distanceD, 2));

	$("#time").val(Round(mo.timeA + mo.timeD + mo.timeS, 2));

	calc_forces();

}


function change_accel_distance() {

// calculate new mo.accel & mo.decel

	// get initial motion values
	// calculate Time

//	givens:
//		speed 0
//		speed 1
//		distanceTotal
//		distanceA
//		distanceB


	console.debug("change_accel_distance()");

	mo.speed  	 = $("#speed").val()	*	1;
	mo.distance  = $("#distance").val()	*	1;

	mo.distanceA = $("#dist_a").val()	*	1;
	mo.distanceD = $("#dist_d").val()	*	1;
	mo.distanceS = mo.distance - (mo.distanceA + mo.distanceD);

	mo.accel = (mo.speed * mo.speed) / (2 * mo.distanceA);
	mo.decel = (mo.speed * mo.speed) / (2 * mo.distanceD);

	mo.timeA = mo.speed / mo.accel;
	mo.timeD = mo.speed / mo.decel;
	mo.timeS = mo.distanceS / mo.speed;

	$('#accel').val(Round(mo.accel, 2));
	$('#decel').val(Round(mo.decel, 2));

	$("#time").val(Round(mo.timeS + mo.timeA + mo.timeD, 2));

	calc_forces();
}


function change_time() {

	console.debug("change_time()");
	// 	change time
	// 		calculate speed


	mo.time 	= $("#time").val()		* 1;
//	mo.speed	= $("#speed").val()		* 1;
	mo.accel 	= $("#accel").val()		* 1;
	mo.decel	= $("#decel").val()		* 1;
	mo.distance = $("#distance").val()	* 1;


	mo.timeA = mo.speed / mo.accel;
	mo.timeD = mo.speed / mo.decel;
	mo.timeS = mo.time - (mo.timeA + mo.timeD);

	if (mo.timeS > (mo.timeA + mo.timeD)) {

		mo.distanceA = (mo.accel * (mo.timeA * mo.timeA))/2;
		mo.distanceD = (mo.decel * (mo.timeD * mo.timeD))/2;
		mo.distanceS = mo.distance - (mo.distanceA + mo.distanceD);

		mo.speed = mo.distanceS / mo.timeS;


		$("#speed").val(Round(mo.speed, 2));

		calc_forces();

	} else	{

		$("#speed").val("error");

	};

	calc_forces();
}


function calc_forces() {

	console.debug("calc_forces()");

	force.kind 		= $('#moveKind').val();				//type of move
	force.weight	= $("#weight").val() * 1;			//lbm of move
	force.slugs		= $("#weight").val() * 1 / 32.2;	//slugs
	force.friction	= $("#friction").val() * 1;			//friction cooef.

	//horizontal move
	if (force.kind == "horiz") {
	
		force.A = force.slugs * mo.accel + (force.weight * force.friction);
		force.D = force.slugs * mo.decel + (force.weight * force.friction);
	
	}
	
	//lift on accel - Dead Haul
	if (force.kind == "lift") {
	
		force.A = force.weight + (force.slugs * mo.accel) + (force.weight * force.friction);
		force.D = force.weight - (force.slugs * mo.decel) + (force.weight * force.friction);
	
	}
	
	//lower on accel - Dead Haul
	if (force.kind == "lower") {
	
		force.A = force.weight - (force.slugs * mo.accel) + (force.weight * force.friction);
		force.D = force.weight + (force.slugs * mo.decel) + (force.weight * force.friction);
	}
	
	$("#forceAccel").val( Round(force.A, 2));
	$("#forceDecel").val( Round(force.D, 2));

	calc_hp();
}


function calc_hp() {

	pt.force 	= Math.max(Math.abs(force.A), Math.abs(force.D));
	pt.eff 		= $('#system_eff').val() * 1 / 100;
	pt.hp 		= (pt.force * mo.speed) / (550 * pt.eff);

	$('#hp_required').val(Round(pt.hp, 2));
	$('#kw_required').val(Round(pt.hp * 0.7457, 2));

}







