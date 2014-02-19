function setRed(i){
    $(i).parent().css("background-color", "#fcccd5"); //calculated
    $(i).prop("readonly",true);
}

function setGreen(i){
    $(i).parent().css("background-color", "#c8f1c3"); //user
    $(i).prop("readonly",false);
}

function Round(number, places) {
	return (Math.round(number*(Math.pow(10, places)))/(Math.pow(10, places)));
}

function exp2(input) {
	return (Math.pow(input, 2));
}

function exp3(input) {
	return (Math.pow(input, 3));
}

function exp4(input) {
	return (Math.pow(input, 4));
}

function AreaOfaCircle(diameter) {
	return (Math.pow((diameter / 2), 2) * Math.PI);
	}

function CircumfrenceOfaCircle(diameter) {
    return (diameter * Math.PI);
    }

function sinDegrees(num) {return Math.sin(num/180*Math.PI);}
function tanDegrees(num) {return Math.tan(num/180*Math.PI);}
function cosDegrees(num) {return Math.cos(num/180*Math.PI);}

function atanDegrees(num) {return Math.atan(num/180*Math.PI);}

function LoadNavPanel(i) {
    $(document).on('pageshow', i, function () {
        $(".navpanel").load('navpanel.html', function (){
            $("div:jqmData(role='collapsible')").collapsible();
            $("ul:jqmData(role='listview')").listview();
        });
    });

    redraw_colors(i);
}

function degtorad(i) {
    return i * (Math.PI / 180);
}

function radtodeg(i) {
    return i * (180 / Math.PI);
}

function hpfromFV(f, v, units){
    // usage: hp(force, speed, units);
    // units:   0   =   lbf & ft/s, constant = 550
    //          1   =   N & m/s, constant = 745.699871582

    //  if units = 0 (speed = ft/s, force = lbf)
    //      hp = (force * v) / 550
    //  if units = 1 (speed = m/s, force = N)
    //      hp = (force * v) / 745.699871582

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
    // units:   0   =   lbf & ft/s  constant = 550
    //          1   =   N & m/s     constant = 745.699871582

    //      force [lbf] = (hp * 550) / v 
    //      force [N]   = (hp * 745.699871582) / v

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
    // units:   0   =   ft-lbf & rpm    constant = 1
    //          1   =   in-lbf & rpm    constant = 12
    //          2   =   in-ozf & rpm    constant = 192
    //          3   =   N-m & rpm       constant = ????

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
    // units:   0   =   ft-lbf & rpm    constant = 1
    //          1   =   in-lbf & rpm    constant = 12
    //          2   =   in-ozf & rpm    constant = 192
    //          3   =   N-m & rpm       constant = ????

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

function redraw_colors(selector){
    $(document).on("pageshow", selector, function(){
        $(".calculated_values").parent().css("background-color", "#fcccd5"); 
        $(".user_values").parent().css("background-color", "#c8f1c3"); 
        }
    );
}



function get(key, id) {
    var i = $("#" + id).val()
    key[id] = (parseFloat(i)? parseFloat(i) : i);
}