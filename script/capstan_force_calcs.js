var c = {
	"calcKind": 		"",
	"load": 			"",
	"friction": 			"",
	"wraps": 			"",
	"hold":				"false"
};

function calculateHold() {

	get(c);

	if (c.calcKind === "hold") {
		// calculate the required hoad based on the lold
		c.hold = c.load * Math.pow(Math.E, -c.friction * c.wraps * 2 * Math.PI);
		$("#hold").val(Round(c.hold, 2));
	}

	if (c.calcKind === "load") {
		// calculate the allowable load based on the hold
		c.load = c.hold * Math.pow(Math.E, c.friction * c.wraps * 2 * Math.PI);
		$("#load").val(Round(c.load, 1));
	}
}

function changeKind(value) {

	if (value == "hold") {
		setRed("#hold");
		setGreen("#load");
	}

	if (value == "load") {
		setGreen("#hold");
		setRed("#load"); 
	}
}