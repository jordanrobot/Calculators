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