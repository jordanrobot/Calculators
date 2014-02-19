var key = {
	"diameter": 			"",
	"h": 					"",
	"w": 					"",
	"l": 					"",
	"torque": 				"",
	"safety": 				"",
	"yield": 				"",
	"compressionArea": 		"",
	"compressionActual":	"",
	"compressionAllow": 	"",
	"compressionTest": 		"",
	"shearArea": 			"",
	"shearActual": 			"",
	"shearAllow": 			"",
	"shearTest": 			"",
	"material":				""
};


function keyCalc() {

	get(key);

	// get key areas
	key.h = $("#h").val()	* 1;
	key.w = $("#w").val() 	* 1;
	key.l = $("#l").val()	* 1;

	key.compressionArea =	(key.h * key.l) / 2;
	key.shearArea =	key.w * key.l;

	$("#compressionArea").val(Round(key.compressionArea, 4));
	$("#shearArea").val(Round(key.shearArea, 4));


	//calculate compression
	key.compressionActual = (4 * key.torque) / (key.diameter * key.l * key.h);
	$("#compressionActual").val(Round(key.compressionActual, 0));

	key.compressionAllow = key.yield / key.safety;
	$("#compressionAllow").val(Round(key.compressionAllow, 0));

	if (key.compressionAllow > key.compressionActual) {
		$("#compressionTest").val("pass");
	} else {
		$("#compressionTest").val("fail");
	}
	
	$("#compressionTest").slider("refresh");

	//calcualte shear
	key.shearActual = (2 * key.torque) / (key.diameter * key.w * key.l);
	$("#shearActual").val(Round(key.shearActual, 0));

	key.shearAllow = (0.5 * key.yield) / key.safety;
	$("#shearAllow").val(Round(key.shearAllow, 0));

	if (key.shearAllow > key.shearActual) {
		$("#shearTest").val("pass");
	} else {
		$("#shearTest").val("fail");
	}

	$("#shearTest").slider("refresh");

}

function setKeySize (h, w) {

	key.h = h;
	key.w = w;
	$("#h").val(h);
	$("#w").val(w);
}

function getYield (id, value) {

	switch(value) {

	case "C1018":
		setYield(53000);
	break;

	case "C1020":
		setYield(51000);
	break;

	case "C1045":
		setYield(71000);
	break;

	case "C1090":
		setYield(78300);
	break;

	case "A36":
		setYield(36000);
	break;

	case "316":
		setYield(30000);
	break;

	default:
	break;

	} //switch
}

function setMaterial() {
	$("#material").val("custom").selectmenu('refresh');
}

function setYield(i) {
	$("#yield").val(i);
}

function setShape (id, value) {
	key[id] = value;
}

function getShaftSize () {

	key.shape = $("#shape").val();

	if (key.shape == "square") {
		switch(true) {
	
		case ((key.diameter > 0.3125) && (key.diameter <= 0.4375)):
			setKeySize(0.09375, 0.09375);
		break;
	
		case ((key.diameter > 0.4375) && (key.diameter <= 0.5625)):
			setKeySize(0.125, 0.125);
		break;
	
		case ((key.diameter > 0.5625) && (key.diameter <= 0.875)):
			setKeySize(0.1875, 0.1875);
		break;
	
		case ((key.diameter > 0.875) && (key.diameter <= 1.25)):
			setKeySize(0.25, 0.25);
		break;
	
		case ((key.diameter > 1.25) && (key.diameter <= 1.375)):
			setKeySize(0.3125, 0.3125);
		break;
	
		case ((key.diameter > 1.375) && (key.diameter <= 1.75)):
			setKeySize(0.375, 0.375);
		break;
	
		case ((key.diameter > 1.75) && (key.diameter <= 2.25)):
			setKeySize(0.5, 0.5);
		break;
	
		case ((key.diameter > 2.25) && (key.diameter <= 2.75)):
			setKeySize(0.625, 0.625);
		break;
	
		case ((key.diameter > 2.75) && (key.diameter <= 3.25)):
			setKeySize(0.75, 0.75);
		break;
	
		case ((key.diameter > 3.25) && (key.diameter <= 3.75)):
			setKeySize(0.875, 0.875);
		break;
	
		case ((key.diameter > 3.75) && (key.diameter <= 4.5)):
			setKeySize(1, 1);
		break;
	
		case ((key.diameter > 4.5) && (key.diameter <= 5.5)):
			setKeySize(1.25, 1.25);
		break;
	
		case ((key.diameter > 5.5) && (key.diameter <= 6.5)):
			setKeySize(1.5, 1.5);
		break;
		
		case ((key.diameter > 6.5) && (key.diameter <= 7.5)):
			setKeySize(1.75, 1.75);
		break;

		case ((key.diameter > 7.5) && (key.diameter <= 9)):
			setKeySize(2, 2);
		break;

		case ((key.diameter > 9) && (key.diameter <= 11)):
			setKeySize(2.5, 2.5);
		break;

		default:
		break;

		} //switch

	} else if (key.shape == "rectangular") {
		switch(true) {
	
		case ((key.diameter > 0.3125) && (key.diameter <= 0.4375)):
			setKeySize(0.09375, 0.09375);
		break;
	
		case ((key.diameter > 0.4375) && (key.diameter <= 0.5625)):
			setKeySize(0.09375, 0.125);
		break;
	
		case ((key.diameter > 0.5625) && (key.diameter <= 0.875)):
			setKeySize(0.125, 0.1875);
		break;
	
		case ((key.diameter > 0.875) && (key.diameter <= 1.25)):
			setKeySize(0.1875, 0.25);
		break;
	
		case ((key.diameter > 1.25) && (key.diameter <= 1.375)):
			setKeySize(0.25, 0.3125);
		break;
	
		case ((key.diameter > 1.375) && (key.diameter <= 1.75)):
			setKeySize(0.25, 0.375);
		break;
	
		case ((key.diameter > 1.75) && (key.diameter <= 2.25)):
			setKeySize(0.375, 0.5);
		break;
	
		case ((key.diameter > 2.25) && (key.diameter <= 2.75)):
			setKeySize(0.4375, 0.625);
		break;
	
		case ((key.diameter > 2.75) && (key.diameter <= 3.25)):
			setKeySize(0.5, 0.75);
		break;
	
		case ((key.diameter > 3.25) && (key.diameter <= 3.75)):
			setKeySize(0.625, 0.875);
		break;
	
		case ((key.diameter > 3.75) && (key.diameter <= 4.5)):
			setKeySize(0.75, 1);
		break;
	
		case ((key.diameter > 4.5) && (key.diameter <= 5.5)):
			setKeySize(0.875, 1.25);
		break;
	
		case ((key.diameter > 5.5) && (key.diameter <= 6.5)):
			setKeySize(1, 1.5);
		break;
	
		case ((key.diameter > 6.5) && (key.diameter <= 7.5)):
			setKeySize(1.5, 1.75);
		break;

		case ((key.diameter > 7.5) && (key.diameter <= 9)):
			setKeySize(1.5, 2);
		break;

		case ((key.diameter > 9) && (key.diameter <= 11)):
			setKeySize(1.75, 2.5);
		break;

		default:
		break;
		} //switch

	}
} //function changeVariable