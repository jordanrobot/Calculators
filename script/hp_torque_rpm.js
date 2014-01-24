function Calculate_from_rpm() {
	
		hp = $("#hp_i").val();
		eff  = $("efficiency_i").val();
		rpm = $("#rpm_i").val();

		torque = (hp * 63025 * (eff/100)) / rpm;

		$("#torque_i").val(torque);
	}
	
function Calculate_from_torque() {

	hp = $("#hp_i").val();
	eff  = $("efficiency_i").val();
	ratio = $("ratio_i").val();
	torque = $("#torque_i").val();

	rpm = (hp * 63025 / torque * (eff/100));

//	$("#rpm_i").val(rpm);
//	$("#torque_i").val(torque_val).slider("refresh");
}
