var c= {
	"psi": 					"",
	"rod": 					"",
	"bore": 				"",
	"stroke": 				"",
	"temperature":			"",
	"atm": 					"",
	"pushA": 				"",
	"pullA": 				"",
	"flow": 				"",
	"psi_drop": 			"",
	"cv_req": 				"",
	"flow_constant": 		"",
	"pushF":	 			"",
	"pullF": 				"",
	"pushDisp": 			"",
	"pullDisp": 			"",
	"in_per_sec_push_val": 	"",
	"in_per_sec_pull_val": 	"",
	"pushTime": 			"",
	"pullTime": 			"",
	"slider": 				""
};
	
function Calculate_cyl() {
		
	get(c);

	// Areas
	c.pushA = AreaOfaCircle(c.bore);
	c.pullA = AreaOfaCircle(c.bore) - AreaOfaCircle(c.rod);

	//	required cv value for air - engineer's toolbox
	c.cv_req = ((c.flow * 60) / 1360) * Math.sqrt ((1 * (460 + c.temperature)) / (c.psi_drop * (c.psi + c.atm - c.psi_drop)));

	// set flow constant for either air (SCFM) or fluid (GPM)
	if (c.slider === "SCFM") {
		c.flow_constant = 1728;
		$('#cv_req').val(Round(c.cv_req, 4));
	}
	else {
		c.flow_constant = 231;
		$('#cv_req').val("NA");
		
	}

	// Forces
	c.pushF = c.psi * c.pushA;
	c.pullF = c.psi * c.pullA;
	$('#pushF').val(Round(c.pushF, 1));
	$('#pullF').val(Round(c.pullF, 1));

	// Displacement
	c.pushDisp = c.pushA * c.stroke;
	c.pullDisp = c.pullA * c.stroke;
	$('#pushDisp').val(Round(c.pushDisp, 2));
	$('#pullDisp').val(Round(c.pullDisp, 2));

	// Velocity
	c.in_per_sec_push_val = (c.flow_constant * c.flow) / (c.pushA * 60);
	c.in_per_sec_pull_val = (c.flow_constant * c.flow) / (c.pullA * 60);
	$('#in_per_sec_push').val(Round(c.in_per_sec_push_val, 3));
	$('#in_per_sec_pull').val(Round(c.in_per_sec_pull_val, 3));

	// Time
	c.pushTime = c.stroke / c.in_per_sec_push_val;
	c.pullTime = c.stroke / c.in_per_sec_pull_val;
	$('#pushTime').val(Round(c.pushTime, 1));
	$('#pullTime').val(Round(c.pullTime, 1));

	}

