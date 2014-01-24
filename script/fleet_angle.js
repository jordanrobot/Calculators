function calculateFleetAngle() {
	calcKind = $("#calcKind").val();


	if (calcKind == "offset") {

		offset = $("#distance").val() * tanDegrees($('#angle').val());
		$("#offset").val(Round(offset, 2));

	};

	if (calcKind == "distance") {

		distance =  $("#offset").val() / tanDegrees($('#angle').val());
		$("#distance").val(Round(distance, 2));

	};

	if (calcKind == "angle") {

		angle = Math.atan($('#offset').val() / $("#distance").val())*180/Math.PI;
		$("#angle").val(Round(angle, 2));

	};

}

function changeKind() {

	calcKind = $("#calcKind").val();

	if (calcKind == "offset") {
        $("#offset").parent().css("background-color", "#fcccd5"); //calculated
        $("#distance").parent().css("background-color", "#c8f1c3"); //user
        $("#angle").parent().css("background-color", "#c8f1c3"); //user
	};

	if (calcKind == "distance") {
        $("#offset").parent().css("background-color", "#c8f1c3"); //user
        $("#distance").parent().css("background-color", "#fcccd5"); //calculated
        $("#angle").parent().css("background-color", "#c8f1c3"); //user		
	};

	if (calcKind == "angle") {
        $("#offset").parent().css("background-color", "#c8f1c3"); //user
        $("#distance").parent().css("background-color", "#c8f1c3"); //user
        $("#angle").parent().css("background-color", "#fcccd5"); //calculated
	};
}
