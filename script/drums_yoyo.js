var yo = {
	"cableD": 		"",
	"treadD": 		"",
	"od": 			"",
	"innerWraps": 	"",
	"outerWraps": 	"",
	"payout": 		"",
	"usableWraps": 	""
};

function getYoyoPayout() {

	get(yo);

	yo.innerWrapD	= yo.treadD + (yo.innerWraps * 2 * yo.cableD);
	yo.outerWrapD	= yo.od  - (yo.outerWraps * 2 * yo.cableD);
	yo.payout		= (AreaOfaCircle(yo.outerWrapD) - AreaOfaCircle(yo.innerWrapD)) / ( 12 * yo.cableD );
	yo.usableWraps	= (yo.outerWrapD - yo.innerWrapD)/(2 * yo.cableD);

	$('#payout').val(Round(yo.payout, 2));
	$('#usableWraps').val(Round(yo.usableWraps, 2));

}