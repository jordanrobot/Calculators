var R = [];

function getResultantForce() {

	R.angle = $("#angle").val() * 1;
	R.load = $("#load").val() * 1;

	if (R.angle === "0") {
		$("#r_force").val(Round(R.load * 2, 1));
	} else {
		temp = 2 * R.load * Math.cos(degtorad(R.angle/2));
	temp 
		$("#r_force").val(Round(temp, 1));
	}
}