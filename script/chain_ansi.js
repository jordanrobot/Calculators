var chain = [];

function getXml() {
   $.ajax({
     type: "GET",
     url: "xml/ansi_chain_specs.xml",
     dataType: "xml",
     success: parseXml
   });
}

function parseXml(xml)
	{		
//	alert("parseXml() running");
	
	$(xml).find("ansi_number").each(function() {
		if ($("#chain_size").val() + $("#chain_strands").val() == $(this).attr("id")) {
			chain.pitch=$(this).find("pitch_length").text();	
			chain.roller_width=$(this).find("roller_width").text();	
			chain.roller_diam=$(this).find("roller_diam").text();	
			chain.plate_height=$(this).find("in_plate_height").text();	
			chain.cottered_width=$(this).find("cottered_width").text();	
			chain.riveted_width=$(this).find("riveted_width").text();	
			chain.tensile=$(this).find("tensile_strength").text();
			chain.elong=$(this).find("elongation_factor_in").text();
			chain.weight=$(this).find("weight_lbs_ft").text();

			setChainProps();
			getChainLengthFrom_ctc();
			$("#chain_pitches").val($("#center_dist").val());
			getChainLength("#chain_pitches","#chain_length");

		} // if
	}); // function
} // function


function setChainProps() {	
	$("#chain_tensile").val(chain.tensile);
	$("#chain_working").val(chain.tensile / 10);	
	$("#roller_width").val(chain.roller_width);
	$("#chain_roller_diam").val(chain.roller_diam);
	$("#chain_pitch_length").val(chain.pitch);
	$("#chain_riveted_width").val(chain.riveted_width);
	$("#chain_cottered_width").val(chain.cottered_width);

	if (($("#chain_length").val()) != NaN) {
		getPitchLength("#chain_pitches","#chain_length");
	} //if
	getSprocketProps();
	getElongation();
	getWeight();
}

function getChainLength(no_pitches,length) {
	$(length).val(Math.round($(no_pitches).val()) * chain.pitch);		
	if ($("#chain_tension").val()) {
		getElongation();
	}
	getWeight();
}


function getPitchLength(no_pitches,length) {
	$(no_pitches).val(roundLength(length));			
	$(length).val(roundLength(length) * chain.pitch);
	if ($("#chain_tension").val()) {
		getElongation();
	}
	getWeight();
}

function getElongation() {
	$("#chain_elongation").val(Round(($("#chain_length").val() / 12) * $("#chain_tension").val() / chain.elong, 3));
}

function getWeight() {
	$("#chain_weight").val(Round(($("#chain_length").val() / 12) * chain.weight, 2));
}

//function LengthAndElongation(temp) {
//	alert(temp);
//	switch (temp)
//	 {
// 	case 'chain_length':
//		$("chain_pitches").val(Math.round($("chain_length").val() * chain.pitch));
//
//	case 'chain_pitches':
//		$("chain_length").val(Math.round($("chain pitches").val()) * chain.pitch);
//		$("#chain_weight").val(($("#chain_length").val() / 12) * chain_weight_lbs);
//		
//	case 'chain_tension':
//		$("#chain_elongation").val(Round(($("#chain_length").val() / 12) * $("#chain_tension").val() / chain.elong_in, 3));
//		break;
//	default:
//	alert("what?");
//	 }
// }



function roundLength(temp1) {
	return Math.round($(temp1).val() / chain.pitch);	
}


function getChainLengthFrom_ctc() {

var a,b,c,d;
a = ($("#sprocket_1").val() - $("#sprocket_2").val())/(2 * Math.PI);
a = a * a;

b = 2 * $("#center_dist").val() / chain.pitch;
c = $("#sprocket_1").val()/2 + $("#sprocket_2").val()/2;
d = a / ($("#center_dist").val() / chain.pitch);

$("#chain_pitches_ctc").val(Math.round(b + c + d));

getChainLength("#chain_pitches_ctc","#chain_length_ctc")

}


function getCenterToCenter() {

	var a,b,c,d,e;
	a = chain.pitch / 8;
	b = 2 * $("#chain_pitches_ctc").val() - $("#sprocket_1").val() - $("#sprocket_2").val();
	c = b * b;
	d = 8 / (Math.PI * Math.PI);
	e = ($("#sprocket_1").val() - $("#sprocket_2").val()) * ($("#sprocket_1").val() - $("#sprocket_2").val()); 

	$("#center_dist").val( a * (b + Math.sqrt(c - d * e)));
}


function getChainLength_ctc() {
//		chain length (inches)
	getChainLength("#chain_pitches_ctc","#chain_length_ctc");
	getCenterToCenter();

}

function getPitchLength_ctc() {
//		chain length (pitches)
	getPitchLength("#chain_pitches_ctc","#chain_length_ctc");
	getCenterToCenter();

}
 

function sprocket() {
//		Calculate CtoC distance when user changes a sprocket value

	if ($("#sprocket_2").val() || $("#sprocket_1").val()) {
		
		if ($("chain_pitches_ctc").val() != NaN) 
			{
			
			getChainLengthFrom_ctc();
			getChainLengthFrom_ctc();
			}
		else if ($("center_dist").val() != NaN) 
			{
			getChainLengthFrom_ctc();
			}
			
	}
}


function getSprocketProps() {
	$('#sprocket_pd').val(Round(chain.pitch / sinDegrees(180 / $('#sprocket_tooth').val()), 3));
	
	$('#sprocket_od').val(Round(chain.pitch * (0.6 + (1 / tanDegrees(180 / $('#sprocket_tooth').val()))), 3));

	$('#sprocket_width').val(0.93 * chain.roller_width - 0.006);
}


