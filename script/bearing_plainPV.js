math	= [];
actual	= [];
max		= [];
capacity= [];



function setMaterial(p, v, pv) {
	        $("#p_max").val(p);
    	    $("#v_max").val(v);
        	$("#pv_max").val(pv);

}

function calculatePV() {

	calcKind 	= $("#calcKind").val();

	if (calcKind == "radial") {
		load		= $("#load").val() 		* 1;
		rpm 		= $("#rpm").val() 		* 1;
		diameter	= $("#diameter").val() 	* 1;
		width		= $("#width").val() 	* 1;
		
		actual.p = load / (width * diameter);
		actual.v = (rpm * diameter * Math.PI) / 12;
	
	} else if (calcKind == "thrust") {

		load		= $("#load").val() 		* 1;
		rpm 		= $("#rpm").val() 		* 1;
		id			= $("#sid").val()		* 1;
		od			= $("#sod").val()		* 1;

		if (id < od) {
			actual.p = (4 * load) / (Math.PI * (exp2(od) - exp2(id)));
			actual.v = (rpm * ((od - id)/4) * Math.PI) / 12;
		} else {
			actual.p = 0;
			actual.v = 0;
		}

	}

	actual.pv = actual.p * actual.v;
	
	$("#p_actual").val(Round(actual.p, 0));
	$("#v_actual").val(Round(actual.v, 0));
	$("#pv_actual").val(Round(actual.pv, 0));

	calculateAllowable();
}

function calculateAllowable() {

	max.p	= $("#p_max").val() * 1;
	max.v	= $("#v_max").val() * 1;
	max.pv	= $("#pv_max").val() * 1;

	capacity.p = actual.p * 100 / max.p;
	capacity.v = actual.v  * 100 / max.v;
	capacity.pv = actual.pv  * 100 / max.pv;

	if (capacity.p < 100) {
		$("#p_capacity").val("pass");
	} else {
		$("#p_capacity").val("fail");
	}

	if (capacity.v < 100) {
		$("#v_capacity").val("pass");
	} else {
		$("#v_capacity").val("fail");
	}

	if (capacity.pv < 100) {
		$("#pv_capacity").val("pass");
	} else {
		$("#pv_capacity").val("fail");
	}

	$("#p_capacity").slider("refresh");
	$("#v_capacity").slider("refresh");
	$("#pv_capacity").slider("refresh");

}

function changeKind() {

	calcKind = $("#calcKind").val();

	if (calcKind == "radial") {
		$("#sid, #sod, #sid_label, #sod_label").hide('slow');
		$("#width, #width_label, #diameter, #diameter_label").show('slow');
	}	else if (calcKind == "thrust") {
		$("#sid, #sod, #sid_label, #sod_label").show('slow');
		$("#width, #width_label, #diameter, #diameter_label").hide('slow');		
	}

	calculatePV();
}


function changeMaterial() {

	material = $("#material").val();

	if (material == "custom") {
        setGreen("#p_max"); //user
        setGreen("#v_max"); //user
        setGreen("#pv_max"); //user
	} else {
        setRed("#p_max"); //calculated
        setRed("#v_max"); //calculated
        setRed("#pv_max"); //calculated		
	}


	switch(material) {
		case "sae841":
			setMaterial(2000,1200,50000);
		break;

		case "sae841graphite":
			setMaterial(1600,1000,40000);
		break;

		case "sae660":
			setMaterial(4000,750,75000);
		break;

		case "sae841":
			setMaterial(2000,1200,50000);
		break;

		case "sae863":
			setMaterial(4000,225,35000);
		break;

		case "nylon":
			setMaterial(400,360,3000);
		break;

		case "nylongMDS1":
			setMaterial(2000,393,3400);
		break;

		case "uhmw":
			setMaterial(1000,100,2000);
		break;

		case "acetal":
			setMaterial(1000,1000,2700);
		break;

		case "ptfe":
			setMaterial(500,100,1000);
		break;

		case "ptfeglass":
			setMaterial(1000,400,11000);
		break;

		case "rulon641":
			setMaterial(1000,400,10000);
		break;

		case "rulonJ":
			setMaterial(750,400,7500);
		break;

		case "rulonLR":
			setMaterial(1000,400,10000);
		break;

		case "peek1":
			setMaterial(8500,400,3500);
		break;

		case "peek2":
			setMaterial(21750,295,37700);
		break;

		case "vespel":
			setMaterial(4900,3000,300000);
		break;

		default:
	}

	calculateAllowable();

}
