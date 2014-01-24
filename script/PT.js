function hpfromFV(f, v, units){
	// usage: hp(force, speed, units);
	// units:	0	=	lbf & ft/s, constant = 550
	//			1	=	N & m/s, constant = 745.699871582

	//	if units = 0 (speed = ft/s, force = lbf)
	//		hp = (force * v) / 550
	//	if units = 1 (speed = m/s, force = N)
	//		hp = (force * v) / 745.699871582

	switch (c) {
		case 0:
			c = 550;
			break;
		case 1:
			c = 745.699871582;
			break;
	}

	return ((f * v) / c);
}

function hptoFV(hp, f_or_v, units){
	// usage: hpToForce(hp, speed, units);
	// units:	0	=	lbf & ft/s	constant = 550
	//			1	=	N & m/s		constant = 745.699871582

	//		force [lbf] = (hp * 550) / v 
	//		force [N]   = (hp * 745.699871582) / v

	switch (c) {
		case 0:
			c = 550;
			break;
		case 1:
			c = 745.699871582;
			break;
	}

	return ((hp * c) / f_or_v);
}

function hpfromTS (t, rpm, units){
	// usage: hpToForce(hp, speed, units);
	// units:	0	=	ft-lbf & rpm	constant = 1
	//			1	=	in-lbf & rpm	constant = 12
	//			2	=	in-ozf & rpm	constant = 192
	//			3	=	N-m & rpm		constant = ????

	switch (units) {
		case 0:
			c = 1;
			break;
		case 1:
			c = 12;
			break;
		case 2:
			c = 192;
			break;
		case 3:
			c = 1.35581795;
			break;
	}
	return ( (t / c) * rpm / 5252);
}

function hptoTS (hp, t_or_s, units){
	// usage: hpToForce(hp, speed, units);
	// units:	0	=	ft-lbf & rpm	constant = 1
	//			1	=	in-lbf & rpm	constant = 12
	//			2	=	in-ozf & rpm	constant = 192
	//			3	=	N-m & rpm		constant = ????

	switch (units) {
		case 0:
			c = 1;
			break;
		case 1:
			c = 12;
			break;
		case 2:
			c = 192;
			break;
		case 3:
			c = 1.35581795;
			break;
	}

	return (hp * 5252 * c / t_or_s);
}

function hptokw (hp){
	return (hp * 0.745699872);
}
function kwtohp (kw){
	return (kw * 1.34102209);
}



// torque
// Nm
// ft-lbf
//		c = 1
//		T = hp * 5252 / rpm
//		rpm = hp * 5252 / T
//		HP = (T / c) * rpm / 5252
