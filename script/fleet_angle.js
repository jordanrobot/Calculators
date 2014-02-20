var f = {
	"variable": "",
	"offset": 	"",
	"distance": "",
	"angle": 	""
};

function calculateFleetAngle() {

	get(f);

	switch (f.variable) {

	case "offset":
        setRed("#offset");
        setGreen("#distance, #angle");

		f.offset = f.distance * tanDegrees(f.angle);
		$("#offset").val(Round(f.offset, 2));
	break;

	case "distance":
		f.distance =  f.offset / tanDegrees(f.angle);
		$("#distance").val(Round(f.distance, 2));

        setRed("#distance");
        setGreen("#offset, #angle");
	break;

	case "angle":
        setRed("#angle");
        setGreen("#offset, #distance");

		f.angle = Math.atan(f.offset / f.distance)*180/Math.PI;
		$("#angle").val(Round(f.angle, 2));
	break;

	default:
	break;
	}
}
