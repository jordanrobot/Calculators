function getMaxPayout() {

	groove_lead = $('#pay_lead').val();
	pitch_diam = $('#pay_pitch_diam').val();
	width = $('#pay_length').val();
	safety_wraps = $('#pay_safety_wraps').val();
	lines = $('#pay_lines').val();

	// get total number of wraps
	active_wraps = (width / groove_lead) - (safety_wraps * lines) - (lines * 0.5) - 1;

	payout = ((active_wraps * CircumfrenceOfaCircle(pitch_diam)) / lines);

	$('#pay_dist').val(Round(payout / 12, 2));

	$('#pay_grooves').val(Round((width / groove_lead), 2));

}