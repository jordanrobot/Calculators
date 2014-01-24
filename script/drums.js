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

function getYoyoPayout() {
	d = $('#yo_cable').val();

	inner_wrap_diam = parseFloat($('#yo_spd').val()) + parseFloat(($('#yo_i_wraps').val()) * 2 * d);
	outer_wrap_diam = parseFloat($('#yo_od').val())  - parseFloat(($('#yo_o_wraps').val()) * 2 * d);

	yoyo_payout = (AreaOfaCircle(outer_wrap_diam/2) - AreaOfaCircle(inner_wrap_diam/2)) / d;

	$('#yo_payout').val(Round(yoyo_payout, 2));

	$('#yo_u_wraps').val(Round((outer_wrap_diam - inner_wrap_diam)/(2 * d), 2));

}


function getMaxDrumLength() {

	v = $('#len_poisson').val();
	t = $('#len_thick').val();
	r = $('#len_id').val();
	E = $('#len_e').val();
	k = $('#len_ds').val();
	F = $('#len_f').val();
	d = $('#len_cable').val();

	temp1 = Math.pow((1 / (1 - (v * v))), 3) * ((t * t) / (r * r));
	tempa = Math.pow(temp1, 1 / 4);
	temp2 = (0.807 * E * t * t) / (k * F * r);
	temp3 = (d * (2 * r + (2 * t))) / 2;

	temp4 = tempa * temp2 * temp3;

	$('#len_length').val(Round(temp4, 2));

}