var r = {
	"angle": "",
	"load": "",
	"force": ""
};

function getResultantForce() {

	get(r);

	if (r.angle === 0) {
		r.force = r.load * 2;
	
	} else {
	
		r.force = 2 * r.load * Math.cos(degtorad(r.angle/2));

	}

	$("#force").val(Round(r.force, 1));
}