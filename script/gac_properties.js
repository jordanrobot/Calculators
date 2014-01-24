var gac = [];

function getXml() {
   $.ajax({
     type: "GET",
     url: "http://www.scenic-shop.com/Calculators/xml/gac_specs.xml",
     dataType: "xml",
     success: parseXml
   });
}

function parseXml(xml)
	{		
//	alert("parseXml() running");
	
	$(xml).find("gac_type").each(function() {
		if ($("#gac_size").val() + "-" + $("#gac_type").val() == $(this).attr("id")) {
			gac.diam=$(this).find("gac_diam").text();
//			gac.elongation=$(this).find("gac_elongation_factor").text();
			gac.weight=$(this).find("gac_lbs_ft").text();
			gac.uts=$(this).find("gac_uts").text();

			setGacProps();
//			getChainLengthFrom_ctc();

		} // if
	}); // function
} // function


function setGacProps() {	
	$("#ultimate_tensile").val(gac.uts);
	

}


	function Get_gac() {
	
	}
	