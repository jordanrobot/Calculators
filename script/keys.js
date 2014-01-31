var key = [];



function keyCalc() {

	key.diameter = $("#diameter").val() * 1;
	key.h = $("#height").val()	* 1;
	key.w = $("#width").val() 	* 1;
	key.l = $("#length").val()	* 1;
	key.torque = $("#torque").val()	* 1;
	key.safety = $("#safety").val()	* 1;
	key.yield =  $("#yield").val()	* 1;

	getAreas();


	key.compressionActual = (4 * key.torque) / (key.diameter * key.l * key.h);
	$("#compressionActual").val(Round(key.compressionActual, 0));

	key.shearActual = (2 * key.torque) / (key.diameter * key.w * key.l);
	$("#shearActual").val(Round(key.shearActual, 0));

	key.compressionAllow = key.yield / key.safety;
	$("#compressionAllow").val(Round(key.compressionAllow, 0));

	key.shearAllow = (0.5 * key.yield) / key.safety;
	$("#shearAllow").val(Round(key.shearAllow, 0));


	if (key.compressionAllow > key.compressionActual) {
		$("#compressionTest").val("pass");
	} else {
		$("#compressionTest").val("fail");
	}
	$("#compressionTest").slider("refresh");

	if (key.shearAllow > key.shearActual) {
		$("#shearTest").val("pass");
	} else {
		$("#shearTest").val("fail");
	}
	$("#shearTest").slider("refresh");

}


function setKeySize (h, w) {

	$("#height").val(h);
	$("#width").val(w);
}

function getAreas() {

	key.h = $("#height").val()	* 1;
	key.w = $("#width").val() 	* 1;
	key.l = $("#length").val()	* 1;

	key.compressionArea =	(key.h * key.l) / 2;
	key.shearArea =	key.w * key.l;

	$("#compressionArea").val(Round(key.compressionArea, 4));
	$("#shearArea").val(Round(key.shearArea, 4));
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

	} //switch
}

function setMaterial() {

	$("#material").val("custom").selectmenu('refresh');

}

function setYield(i) {

	$("#yield").val(i);

}

function getShaftSize (id, value) {

	key[id] = (parseFloat(value)? parseFloat(value) : value);

	switch(true) {

		case ((key[id] > 0.25) && (key[id] <= 0.5)):
		setKeySize(0.125, 0.125);
		break;

		case ((key[id] > 0.5) && (key[id] <= 0.75)):
		setKeySize(0.1875, 0.1875);
		break;

		case ((key[id] > 0.75) && (key[id] <= 1)):
		setKeySize(0.25, 0.25);
		break;

		case ((key[id] > 1) && (key[id] <= 1.25)):
		setKeySize(0.3125, 0.3125);
		break;

		case ((key[id] > 1.25) && (key[id] <= 1.5)):
		setKeySize(0.375, 0.375);
		break;

		case ((key[id] > 1.5) && (key[id] <= 1.75)):
		setKeySize(0.4375, 0.4375);
		break;

		case ((key[id] > 1.75) && (key[id] <= 2)):
		setKeySize(0.5, 0.5);
		break;

		case ((key[id] > 2) && (key[id] <= 2.25)):
		setKeySize(0.5625, 0.5625);
		break;

		case ((key[id] > 2.25) && (key[id] <= 2.5)):
		setKeySize(0.625, 0.625);
		break;

		case ((key[id] > 2.5) && (key[id] <= 3)):
		setKeySize(0.75, 0.75);
		break;

		case ((key[id] > 3) && (key[id] <= 3.5)):
		setKeySize(0.875, 0.875);
		break;

		case ((key[id] > 3.5) && (key[id] <= 4)):
		setKeySize(1, 1);
		break;

	} //switch
} //function changeVariable