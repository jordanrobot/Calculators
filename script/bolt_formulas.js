function Dial(id, size, properties) {
    var props = properties || {};
    var dial = this;
    var div = $(id);
    var canvas = $("");
    var ctx = canvas.appendTo(div)[0].getContext("2d");
    canvas = canvas[0];
    var pi2 = Math.PI*2;

    this.label = props.label;
    this.from = (props.from==null ? 0 : props.from) % pi2;
    if (this.from > Math.PI)
        this.from -= pi2;
    else if (this.from < -Math.PI)
        this.from += pi2;
    this.to = (props.to==null ? 2 : props.to) % pi2;
    if (this.to > Math.PI)
        this.to -= pi2;
    else if (this.to < -Math.PI)
        this.to += pi2;
    this.selectedFrom = false;
    this.selectedTo = false;
    this.radius = size/2-10;
    if (props.change)
        div.bind("change", props.change);
    if (props.startchange)
        div.bind("startchange", props.startchange);
    if (props.stopchange)
        div.bind("stopchange", props.stopchange);

    this.reset = function(from, to) {
        this.from = from % pi2;
        if (this.from > Math.PI)
            this.from -= pi2;
        else if (this.from < -Math.PI)
            this.from += pi2;
        this.to = to % pi2;
        if (this.to > Math.PI)
            this.to -= pi2;
        else if (this.to < -Math.PI)
            this.to += pi2;
        this.selectedFrom = this.selectedTo = false;
        this.movingFrom = this.movingTo = false;
        this.draw();
    };

    this.draw = function() {
        ctx.save();
        ctx.clearRect(0,0,size,size);
        ctx.translate(size/2,size/2);

        ctx.beginPath();
        ctx.strokeStyle = "silver";
        ctx.lineWidth = 5;
        ctx.arc(0, 0, this.radius, 0, 2*Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 9;
        var f = 1.5 * Math.PI - this.from;
        var t = 1.5 * Math.PI - this.to;
        ctx.arc(0, 0, this.radius, f, t, true);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.fillStyle = this.selectedFrom ? "red" : "green";
        ctx.strokeStyle = this.selectedFrom ? "black" : "silver";
        ctx.arc(-this.radius*Math.sin(this.from),
                -this.radius*Math.cos(this.from),
                8, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = this.selectedTo ? "red" : "green";
        ctx.strokeStyle = this.selectedTo ? "black" : "silver";
        ctx.arc(-this.radius*Math.sin(this.to),
                -this.radius*Math.cos(this.to),
                8, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        if (this.label) {
            ctx.strokeStyle = "black";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(this.label, 0, 0);
        }
        ctx.restore();
    };

    var getMousePos = function(canvas, evt){
        // get canvas position
        var obj = canvas;
        var top = 0;
        var left = 0;
        while (obj && obj.tagName != 'BODY') {
            top += obj.offsetTop;
            left += obj.offsetLeft;
            obj = obj.offsetParent;
        }
        // return relative mouse position
        var mouseX = evt.clientX - left + window.pageXOffset;
        var mouseY = evt.clientY - top + window.pageYOffset;
        return {
            x: mouseX,
            y: mouseY
        };
    };

    if (!Math.hypot) {
        Math.hypot = function(x,y) {
            return Math.sqrt(x*x + y*y);
        };
    }
    var inTo = function(pos) {
        return Math.hypot(size/2-dial.radius*Math.sin(dial.to)-pos.x,
                          size/2-dial.radius*Math.cos(dial.to)-pos.y) <= 8;
    };
    var inFrom = function(pos) {
        return Math.hypot(size/2-dial.radius*Math.sin(dial.from)-pos.x,
                          size/2-dial.radius*Math.cos(dial.from)-pos.y) <= 8;
    };

    canvas.addEventListener("mousemove", function(evt) {
        var pos = getMousePos(canvas, evt);
        var redraw = false;
        if (dial.movingFrom) {
            if (pos.x == size/2 && pos.y == size/2)
                return;
            dial.from = Math.atan2(size/2-pos.x,size/2-pos.y);
            redraw = true;
            div.trigger("change", [dial.from, dial.to]);
        } else if (dial.movingTo) {
            if (pos.x == size/2 && pos.y == size/2)
                return;
            dial.to = Math.atan2(size/2-pos.x,size/2-pos.y);
            redraw = true;
            div.trigger("change", [dial.from, dial.to]);
        } else if (inTo(pos)) {
            // In "To" handle
            if (dial.selectedFrom) {
                dial.selectedFrom = false;
                redraw = true;
            }
            if (!dial.selectedTo) {
                dial.selectedTo = true;
                redraw = true;
            }
        } else if (inFrom(pos)) {
            // In "From" handle
            if (!dial.selectedFrom) {
                dial.selectedFrom = true;
                redraw = true;
            }
            if (dial.selectedTo) {
                dial.selectedTo = false;
                redraw = true;
            }
        } else {
            // In neither handle
            if (dial.selectedFrom) {
                dial.selectedFrom = false;
                redraw = true;
            }
            if (dial.selectedTo) {
                dial.selectedTo = false;
                redraw = true;
            }
        }
        if (redraw) {
            dial.draw();
        }
    }, false);

    canvas.addEventListener("mousedown", function(evt) {
        var pos = getMousePos(canvas, evt);
        if (inTo(pos)) {
            dial.movingTo = true;
            div.trigger("startchange", ["to"]);
        } else if (inFrom(pos)) {
            dial.movingFrom = true;
            div.trigger("startchange", ["from"]);
        }
    }, false);

    canvas.addEventListener("mouseup", function(evt) {
        if (dial.movingTo) {
            div.trigger("stopchange", ["to", dial.to]);
        } else if (dial.movingFrom) {
            div.trigger("stopchange", ["from", dial.from]);
        }
        dial.movingTo = dial.movingFrom = false;
    }, false);

    this.draw();
};