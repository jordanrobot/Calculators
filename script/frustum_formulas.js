function changeKind() {

	calcKind = $("#calcKind").val();

	if (calcKind == "radius") {
		setRed("#C, #c");
		setGreen("#R, #r");
	}	else if (calcKind == "circumference") {
		setGreen("#C, #c");
		setRed("#R, #r");
	}

	calculateFrustum();
}

function Calculate() {
//	s = Math.sqrt(exp2(h) + exp2(R - r));

	// t = included angle of conical frustum
	t = Math.atan((R-r)/h);
	// S = Large Flattened Radius
	S = R/Math.sin(t);
	// slant = slant height
	//slant = r/Math.sin(t);
	slant = (1/Math.cos(t)) * h;
	// l = Small flattened radius
	s = S - slant;


//	radius1 = (C1 * Length) / (C2 - C1);
//	radius2 = (C2 * Length) / (C2 - C1);
//	arcAngle = (((Radius2 - Radius1) * 360) / Length) ;

	arcAngle = radtodeg(2 * Math.PI * Math.sin(t));

	arcLength = (2 * Math.PI * S) * (arcAngle/360);

	arcChord = (2 * S) * Math.sin(degtorad(arcAngle)/2);

	//radtodeg(arcAngle) * S;

}

function calculateFrustum() {

	calcKind = $("#calcKind").val();

	if (calcKind == "circumference") {

		c = $('#c').val()		* 1;
		C = $('#C').val()	* 1;
		h = $('#height').val()	* 1;
	
	
		r = c / (Math.PI * 2);
		R = C / (Math.PI * 2);
	
		Calculate();
	
		$('#r').val(Round(r, 3));
		$('#R').val(Round(R, 3));		
		$('#s').val(Round((s), 3));
		$('#S').val(Round(S, 3));
		$('#slant').val(Round(slant, 3));
		$('#arcLength').val(Round(arcLength, 3));
		$('#arcAngle').val(Round(arcAngle, 3));
		$('#arcChord').val(Round(arcChord, 3));


	} else if (calcKind == "radius") {

		r = $("#r").val()	* 1;
		R  = $("#R").val()	* 1;
		h = $("#height").val()		* 1;
	
		c = r * (Math.PI * 2);
		C = R * (Math.PI * 2);
		Calculate();
	
		$("#s").val(Round((s), 3));
		$("#S").val(Round(S, 3));
		$('#c').val(Round(c, 2));
		$('#C').val(Round(C, 2));
		$('#slant').val(Round(slant, 3));	
		$("#arcLength").val(Round(arcLength, 3));
		$("#arcAngle").val(Round(arcAngle, 3));
		$('#arcChord').val(Round(arcChord, 3));
	
	}
}

