	var cyl = [];

	function AreaOfaCircle(diameter) {
		return (Math.pow((diameter / 2), 2) * Math.PI);
		}
	
	function Calculate_cyl() {
		
		cyl.psi = $('#psi').val() * 1;
		cyl.rod  = $('#rod').val() * 1;
		cyl.bore = $('#bore').val() * 1;
		cyl.stroke = $('#stroke').val() * 1;
		cyl.temperature = $('#temperature').val() * 1;
		cyl.atm = $('#atm').val() * 1;		
		push_area = AreaOfaCircle(cyl.bore);
		pull_area = AreaOfaCircle(cyl.bore) - AreaOfaCircle(cyl.rod);

		cyl.flow = $('#flow').val() * 1;
		cyl.drop = $('#psi_drop').val() * 1;
//		engineer's toolbox
		cyl.cv_req = ((cyl.flow * 60) / 1360) * Math.sqrt ((1 * (460 + cyl.temperature)) / (cyl.drop * (cyl.psi + cyl.atm - cyl.drop)));


	if ($("#slider").val() == "SCFM") {
		flow_constant = 1728;
		$('#cv_req').val(Round(cyl.cv_req, 4));
	}
	else {
		flow_constant = 231;
		$('#cv_req').val("NA");
		
	}
			
		cyl.push = cyl.psi * push_area;
		cyl.pull = cyl.psi * pull_area;
	
		$('#pushForce').val(Round(cyl.push, 1));
		$('#pullForce').val(Round(cyl.pull, 1));
		$('#push_displacement').val(Round(push_area*cyl.stroke, 2));
		$('#pull_displacement').val(Round(pull_area*cyl.stroke, 2));


		in_per_sec_push_val = (flow_constant*cyl.flow)/(push_area*60);
		in_per_sec_pull_val = (flow_constant*cyl.flow)/(pull_area*60);
		
		$('#in_per_sec_push').val(Round(in_per_sec_push_val, 3));
		$('#in_per_sec_pull').val(Round(in_per_sec_pull_val, 3));

		$('#push_time').val(Round(cyl.stroke / in_per_sec_push_val, 1));
		$('#pull_time').val(Round(cyl.stroke / in_per_sec_pull_val, 1));

	}

