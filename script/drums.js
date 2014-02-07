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

var yo = [];
function getYoyoPayout() {

	get(yo, "cableD");
	get(yo, "treadD");
	get(yo, "od");
	get(yo, "innerWraps");
	get(yo, "outerWraps");

	yo.innerWrapD = yo.treadD + (yo.innerWraps * 2 * yo.cableD);
	yo.outerWrapD = yo.od  - (yo.outerWraps * 2 * yo.cableD);
	yo.payout = (AreaOfaCircle(yo.outerWrapD) - AreaOfaCircle(yo.innerWrapD)) / ( 12 * yo.cableD );

	$('#payout').val(Round(yo.payout, 2));

	$('#usableWraps').val(Round((yo.outerWrapD - yo.innerWrapD)/(2 * yo.cableD), 2));

}

function get(key, id) {
	key[id] = (parseFloat($("#" + id).val())? parseFloat($("#" + id).val()) : $("#" + id).val());
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