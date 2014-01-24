function getCube() {
	$('#cube_volume').val(exp3($('#cube_side').val()));
	$('#cube_area').val(exp2($('#cube_side').val()) * 6);
}

function getBox() {
	if ($("#box_width").val() && $("#box_height").val() && $("#box_depth").val()) {

		var h = $('#box_height').val();
		var w = $('#box_width').val();
		var d = $('#box_depth').val();
		
		$('#box_volume').val(h * w * d);
		$('#box_area').val(2 * (exp2(h) + exp2(w) + exp2(d)));
	};
}

function getSphere() {
	
	var r = $('#sphere_radius').val();
	
	$('#sphere_volume').val(exp3(r) * (4/3) * Math.PI);
	$('#sphere_area').val(exp2(r) * 4 * Math.PI);
}

function getCylinder() {

	if ($("#cyl_radius").val() && $("#cyl_height").val()) {

		var r = $('#cyl_radius').val();
		var h = $('#cyl_height').val();

		$('#cyl_volume').val(AreaOfaCircle(r) * h);
		$('#cyl_area').val(AreaOfaCircle(r) + (r * 2 * Math.PI * h));
	};
}

function getCone() {
	
	if ($("#cone_radius").val() && $("#cone_height").val()) {
		
		var h = $("#cone_height").val();
		var r = $("#cone_radius").val();
		
		$('#cone_volume').val(AreaOfaCircle(r) * h * (1/3));
		$('#cone_area').val(r * Math.PI * (r + h));
	
	};	
}

function getPyramid() {

	
	if ($("#pyr_width").val() && $("#pyr_height").val()) {
	
		var w = $("#pyr_width").val();
		var h = $("#pyr_height").val();
		
		$('#pyr_volume').val(w * w * $("#pyr_height").val() * (1/3));
		$('#pyr_area').val((w * w) + 2 * w * (Math.sqrt(exp2(w/2) + exp2(h))));
	};	
}
