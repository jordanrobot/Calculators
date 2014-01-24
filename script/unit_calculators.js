	var	length 			= [];
	length.meter 		= 1;
	length.millimeter 	= 0.001;
	length.centimeter	= 0.01;
	length.kilometer 	= 1000;
	length.foot 		= 0.3048;
	length.inch 		= 0.0254;
	length.yard 		= 0.9144;
	length.mile 		= 1609.344;
	length.league 		= 5556;
	length.fathom 		= 1.8288;

	function convertLength(id) {
		temp = $("#" + id).val() * length[id];
		for (i in length) {$("#"+i).val(Round(temp / length[i],4));};
	};


	var area 			= [];
	area.meter_2 		= 1;
	area.kmeter_2 		= 1000;
	area.inch_2 		= 0.00064516;
	area.foot_2 		= 0.09290304;
	area.yard_2 		= 0.83612736;
	area.mile_2 		= 2589988.0;
	area.acre 			= 100;
	area.hectare 		= 10000;

	function convertArea(id) {
		temp = $("#" + id).val() * area[id];
		for (i in area) {$("#"+i).val(Round(temp / area[i],4));};
	};


	var volume 			= [];
	volume.millimeter_3 = 0.000001;
	volume.liter 		= 1.0;
	volume.m_liter 		= 0.001;
	volume.meter_3 		= 1000;
	volume.inch_3 		= 0.016387064;
	volume.foot_3 		= 28.3168466;
	volume.yard_3 		= 764.554858;
	volume.fluid_oz 	= 0.0284130742;
	volume.teaspoon 	= 0.00492892159;
	volume.tablespoon 	= 0.0147867648;
	volume.cup 			= 0.2365882;
	volume.quart 		= 1.101221;
	volume.liq_quart 	= 0.9463529;
	volume.pint 		= 0.5506105;
	volume.liquid_pint 	= 0.4731765;
	volume.gallon 		= 3.785412;

	function convertVolume(id) {
		temp = $("#" + id).val() * volume[id];
		for (i in volume) {$("#"+i).val(Round(temp / volume[i],4));};
	};


	var force 		= [];
	force.ozf 		= 0.2780139;
	force.lbsf 		= 4.448222;
	force.dyne 		= 0.00001;
	force.kipF 		= 4448.222;
	force.tonF 		= 8896.443;
	force.newtonF 	= 1;
	force.kilogramF = 9.80665;

	function convertForce(id) {
		temp = $("#" + id).val() * force[id];
		for (i in force) {$("#"+i).val(Round(temp / force[i],4));};
	};


	var pressure 		= [];
	pressure.psi        = 6894.757;
	pressure.ksi        = 6894757;
	pressure.pascal     = 1;
	pressure.k_pascal   = 1000;
	pressure.m_pascal   = 1000000;
	pressure.g_pascal   = 1000000000;
	pressure.kg_per_mm  = 9806650;
	pressure.kg_per_cm  = 98066.5;
	pressure.kg_per_m   = 9.80665;
	pressure.atmosphere = 101325;
	pressure.millibar   = 100;
	pressure.bar        = 100000;

	function convertPressure(id) {
		temp = $("#" + id).val() * pressure[id];
		for (i in pressure) {$("#"+i).val(Round(temp / pressure[i],4));};
	};


	var torque 			= [];
	torque.ozf_in		= 0.00706155;
	torque.lbf_in		= 0.112985;
	torque.lbf_ft		= 1.35582;
	torque.n_m   		= 1.0;
	torque.mn_m			= 0.001;
	torque.n_cm  		= 0.01;
	torque.kgf_m 		= 9.80665;
	torque.gf_cm 		= 0.0000980665;
	torque.dyn_cm		= 0.0000001;

	var mass 			= [];
	mass.milligram  	= 0.000001;  
	mass.gram       	= 0.001;   
	mass.k_gram     	= 1.0;   
	mass.ounce      	= 0.0283495231;   
	mass.lbs        	= 0.453592;
	mass.kip_mass		= 453.592;
	mass.slug       	= 14.5939029;
	mass.short_ton  	= 907.18474;   
	mass.long_ton		= 1016.04691;
	mass.metric_ton 	= 1000;   
	mass.carat      	= 0.0002;   

	var angle 			= [];
	angle.degree      	= Math.PI / 180;
	angle.arc_min     	= Math.PI / 10800;
	angle.arc_sec     	= Math.PI / 648000;
	angle.radian      	= 1;
	angle.milliradian 	= 0.0009817477;
	angle.grade       	= Math.PI / 200;
	angle.revolution  	= Math.PI * 2;
	angle.quadrant    	= Math.PI / 2.0;
	angle.arc_hour    	= 0.261799;

	
	var density 				 = [];
	density.g_cm_3_den           = 1000;
	density.g_m_3_den            = 0.001;
	density.g_l_den              = 1;
	density.kg_m_3_den           = 1;
	density.kg_l_den             = 1000;
	density.oz_in_3_den          = 1729.99;
	density.oz_ft_3_den          = 1.00115;
	density.lbm_in_3_den         = 27679.9;
	density.lbm_ft_3_den         = 16.0185;
	density.lbm_yd_3_den         = 0.593276;
	density.lbm_gal_uk_den       = 99.7763;
	density.lbm_gal_us_den       = 119.826;
	density.slug_in_3_den        = 890575;
	density.slug_ft_3_den        = 515.379;
	density.slug_yd_3_den        = 10.0881;
	density.specific_gravity_den = 1000;
	
	var power 			= [];
	power.hp_p      	= 745.7;
	power.hp_p_electric	= 746;
	power.kw_p      	= 1000;
	power.watt_p    	= 1;
	power.kg_f_m_s_p	= 9.80665;
	power.ft_lbf_h_p	= 0.000376616;
	power.ft_lbf_m_p	= 0.022597;
	power.ft_lbf_s_p	= 1.35582;
	power.dyn_cm_s_p	= 0.0000001;
	
	
	var energy 			  	= [];
	energy.hp_h_e         	= 2684520;
	energy.J_e            	= 1.0;
	energy.kJ_e           	= 1000;
	energy.watt_hour_e    	= 3600;
	energy.k_watt_hour_e  	= 3600000;
	energy.newton_meter_e 	= 1.0;
	energy.in_lpf_e       	= 0.112985;
	energy.ft_lbf_e       	= 1.35582;
	energy.CV_e           	= 1.0;
	energy.electron_volt_e	= 0.000000000000000000160218;
	energy.ton_tnt_equiv  	= 418000000;
	energy.cal_mean_e     	= 4.19002;
	energy.kcal_e         	= 4190.02;
	
	var time 			= [];
	time.nanosecond  	= 0.000000001;
	time.microsecond 	= 0.000001;
	time.millisecond 	= 0.001;
	time.second     	= 1;
	time.minute      	= 60;
	time.hour        	= 2600;
	time.day         	= 86400;
	time.week        	= 604800;
	time.month       	= 2592000;
	
	
	var lin_velocity = [];
	lin_velocity.in_s_vel   = 0.0254;
	lin_velocity.ft_s_vel   = 0.3048;
	lin_velocity.ft_h_vel   = 0.0000846667;
	lin_velocity.mm_sec_vel = 0.001;
	lin_velocity.cm_sec_vel = 0.01;
	lin_velocity.m_sec_vel  = 1;
	lin_velocity.mm_min_vel = 0.0000166667;
	lin_velocity.cm_min_vel = 0.000166667;
	lin_velocity.m_min_vel  = 0.0166667;
	lin_velocity.km_h_vel   = 0.277778;
	lin_velocity.mile_h_vel = 0.44704;
	lin_velocity.mile_min_vel = 26.8224;
	lin_velocity.knot       = 0.514444;
	
	var ang_velocity = [];
	ang_velocity.deg_min = 0.000290888;
	ang_velocity.deg_s   = 0.0174533;
	ang_velocity.rad_min = 0.0166667;
	ang_velocity.rad_s   = 1;
	ang_velocity.rev_min = 0.10472;
	ang_velocity.rev_s   = 6.28319;

	var lin_acceleration = [];
	lin_acceleration.celo          = 0.3048;
	lin_acceleration.cm_s_2_accel  = 0.01;
	lin_acceleration.ft_s_2_accel  = 0.3048;
	lin_acceleration.g_accel       = 9.80665;
	lin_acceleration.in_s_2_accel  = 0.0254;
	lin_acceleration.km_hr_s_accen = 0.277778;
	lin_acceleration.leo_accel     = 10;
	lin_acceleration.m_s_2_accel   = 1;
	lin_acceleration.mph_s_accel   = 0.44704;
	lin_acceleration.normal_accel  = 9.80665;

	var ang_acceleration = [];
	ang_acceleration.deg_s_2_accel     = 0.0174533;
	ang_acceleration.rad_s_2_accel     = 1;
	ang_acceleration.rev_min_sec_accel = 0.10472;
	ang_acceleration.rev_min_2_accel   = 0.00174533;
	ang_acceleration.rev_s_2_accel     = 6.28319;
	


	var el_charge 				= [];
	el_charge.ampere_hour		= 3600 ;
	el_charge.coulomb			= 1 ;
	el_charge.abcoulomb			= 10 ;
	el_charge.au_charge			= 0.000000000000000000160218 ;
	el_charge.electronic_charge	= 0.00000000000000000016022 ;

	function convertEl_Charge(id) {	
		temp = $("#" + id).val() * el_charge[id];
		for (i in el_charge) {$("#"+i).val(Round(temp / el_charge[i],4));};
	};

	var el_potential 					= [];
	el_potential.au_electric_potential	= 27.2114;
	el_potential.volt					= 1;
	el_potential.abvolt					= 0.00000001;
	el_potential.statvolt				= 299.792;
	el_potential.volt_international		= 1.00034;
	el_potential.volt_US				= 1.00033;
	el_potential.J_per_C				= 1;

	function convertEl_Potential(id) {	
		temp = $("#" + id).val() * el_potential[id];
		for (i in el_potential) {$("#"+i).val(Round(temp / el_potential[i],4));};
	};

	var el_current 						= [];
	el_current.au_electric_current		= 0.00662362;
	el_current.abampere					= 10;
	el_current.ampere					= 1;
	el_current.C_per_second				= 1;
	el_current.edison					= 1000;
	el_current.statampere				= 0.000000000335564;

	function convertEl_Current(id) {	
		temp = $("#" + id).val() * el_current[id];
		for (i in el_current) {$("#"+i).val(Round(temp / el_current[i],4));};
	};

	var el_resistance 				= [];
	el_resistance.ohm				= 1;
	el_resistance.abohm				= 0.000000001;
	el_resistance.microohm			= 0.000001;
	el_resistance.megohm			= 0.000000000001;
	el_resistance.statohm			= 898755000000;

	function convertEl_Resistance(id) {	
		temp = $("#" + id).val() * el_resistance[id];
		for (i in el_resistance) {$("#"+i).val(Round(temp / el_resistance[i],4));};
	};


	var el_conductance = [];
	el_conductance.abmho				=11000000000;
	el_conductance.gemmho				=0.000001;
	el_conductance.mho					=1;
	el_conductance.statmho				=0.00000000000111234705228;
	el_conductance.ampere_per_volt		=1;	
	el_conductance.siemens				=1;

	function convertEl_Conductance(id) {	
		temp = $("#" + id).val() * el_conductance[id];
		for (i in el_conductance) {$("#"+i).val(Round(temp / el_conductance[i],4));};
	};


	var el_inductance 			= [];
	el_inductance.abhenry		= 0.000000001;
	el_inductance.henry			= 1;
	el_inductance.stathenry		= 898755200000;
	el_inductance.j_per_A2		= 1;
	el_inductance.Nm_per_A2		= 1;
	el_inductance.Vs_per_A		= 1;

	function convertEl_Inductance(id) {	
		temp = $("#" + id).val() * el_inductance[id];
		for (i in el_inductance) {$("#"+i).val(Round(temp / el_inductance[i],4));};
	};


	var el_capacitance = [];
	el_capacitance.farad			= 1;
	el_capacitance.abfarad			= 0.000000001;
	el_capacitance.statfarad		= 0.0000000000111265;
	el_capacitance.jar				= 0.00000000111111;
	el_capacitance.A_s_per_V		= 1;
	el_capacitance.C_per_V			= 1;

	function convertEl_Capacitance(id) {	
		temp = $("#" + id).val() * el_capacitance[id];
		for (i in el_capacitance) {$("#"+i).val(Round(temp / el_capacitance[i],4));};
	};


	var el_charge_density					= [];
	el_charge_density.au_charge_density		= 1081200000000;
	el_charge_density.coulomb_ft_3			= 35.3147;
	el_charge_density.coulomb_in_3			= 61023.7;
	el_charge_density.coulomb_m_3			= 1;
	el_charge_density.coulomb_mm_3			= 1000000000;

	function convertEl_Charge_Density(id) {	
		temp = $("#" + id).val() * el_charge_density[id];
		for (i in el_charge_density) {$("#"+i).val(Round(temp / el_charge_density[i],4));};
	};


	var el_current_density 				= [];
	el_current_density.abampere_cm_2	= 100000;
	el_current_density.ampere_m_2		= 1;
	el_current_density.ampere_cm_2		= 10000;
	el_current_density.ampere_dm_2		= 100;
	el_current_density.ampere_ft_2		= 19.7639;
	el_current_density.ampere_in_2		= 1555;
	el_current_density.mampere_cm_2		= 10;
	el_current_density.C_per_sm_2		= 1;

	function convertEl_Current_Density(id) {	
		temp = $("#" + id).val() * el_current_density[id];
		for (i in el_current_density) {$("#"+i).val(Round(temp / el_current_density[i],4));};
	};


	var el_resistivity 		= [];
	el_resistivity.ohm_cm	= 0.01;
	el_resistivity.ohm_ft	= 0.3048;
	el_resistivity.ohm_in	= 0.0254;
	el_resistivity.ohm_m	= 1;
	
	function convertEl_Resistivity(id) {	
		temp = $("#" + id).val() * el_resistivity[id];
		for (i in el_resistivity) {$("#"+i).val(Round(temp / el_resistivity[i],4));};
	};

	var el_field_strength 				= [];
	el_field_strength.au_field_strength	= 514221000000;
	el_field_strength.n_per_coulomb		= 1;
	el_field_strength.v_per_ft			= 3.28084;
	el_field_strength.v_per_m			= 1;
	el_field_strength.v_per_mil			= 39370.1;
	
	function convertEl_field_strength(id) {	
		temp = $("#" + id).val() * el_field_strength[id];
		for (i in el_field_strength) {$("#"+i).val(Round(temp / el_field_strength[i],4));};
	};



	function convertTorque(id) {
		temp = $("#" + id).val() * torque[id];
		for (i in torque) {$("#"+i).val(Round(temp / torque[i],4));};
	};

	function convertMass(id) {	
		temp = $("#" + id).val() * mass[id];
		for (i in mass) {$("#"+i).val(Round(temp / mass[i],4));};
	};

	function convertAngle(id) {	
		temp = $("#" + id).val() * angle[id];
		for (i in angle) {$("#"+i).val(Round(temp / angle[i],4));};
	};

	function convertDensity(id) {	
		temp = $("#" + id).val() * density[id];
		for (i in density) {$("#"+i).val(Round(temp / density[i],4));};
	};

	function convertPower(id) {	
		temp = $("#" + id).val() * power[id];
		for (i in power) {$("#"+i).val(Round(temp / power[i],4));};
	};

	function convertEnergy(id) {	
		temp = $("#" + id).val() * energy[id];
		for (i in energy) {$("#"+i).val(Round(temp / energy[i],4));};
	};

	function convertTime(id) {	
		temp = $("#" + id).val() * time[id];
		for (i in time) {$("#"+i).val(Round(temp / time[i],4));};
	};

	function convertLin_Velocity(id) {	
		temp = $("#" + id).val() * lin_velocity[id];
		for (i in lin_velocity) {$("#"+i).val(Round(temp / lin_velocity[i],4));};
	};

	function convertAng_Velocity(id) {	
		temp = $("#" + id).val() * ang_velocity[id];
		for (i in ang_velocity) {$("#"+i).val(Round(temp / ang_velocity[i],4));};
	};

	function convertLin_Acceleration(id) {	
		temp = $("#" + id).val() * lin_acceleration[id];
		for (i in lin_acceleration) {$("#"+i).val(Round(temp / lin_acceleration[i],4));};
	};


	function convertAng_Acceleration(id) {	
		temp = $("#" + id).val() * ang_acceleration[id];
		for (i in ang_acceleration) {$("#"+i).val(Round(temp / ang_acceleration[i],4));};
	};
