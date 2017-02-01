function canvas01() {
    var myCanvas = document.getElementById("mycanvas01");
    var ctx = myCanvas.getContext("2d");
    ctx.moveTo(10, 10);
    //   ctx.lineTo(150,15);
    ctx.stroke();
    ctx.fillRect(20, 20, 100, 100);
    ctx.strokeRect(10, 10, 120, 120);
    ctx.clearRect(45, 45, 50, 50);
}

function canvas02() {
    var myCanvas = document.getElementById('mycanvas02');
    var ctx = myCanvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(75, 0);
    ctx.lineTo(150, 100);
    ctx.lineTo(75, 200);
    ctx.lineTo(0, 100);

    ctx.fillStyle = "rgb(102,204,0)";
    ctx.lineWidth = 10;
    ctx.strokeStyle = "rgb(0,50,200)";

    ctx.closePath();

    ctx.fill();
    ctx.stroke();
}

function canvas03() {
    var myCanvas = document.getElementById('mycanvas03');
    var ctx = myCanvas.getContext("2d");
    var img = new Image();

    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        ctx.beginPath();
        ctx.moveTo(100, 115);
        ctx.lineTo(120, 115);
        ctx.lineTo(120, 145);
        ctx.lineTo(100, 145);
        ctx.closePath()
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(110, 145);
        ctx.lineTo(110, 175);
        ctx.stroke();
    }
    img.src = "http://www.onlywebpro.com/wp-content/uploads/2011/10/mygraph.png";

}

var ctx = null;
var x = 284;
var y = 131;
var mx = 0;
var my = 0;
var WIDTH = 568;
var HEIGHT = 262;
function canvas04() {
    var canvas = document.getElementById("mycanvas04");
    ctx = canvas.getContext("2d");
    window.onkeydown = keydownControl;
    return setInterval(drawMovingBall, 20);
}

function keydownControl(e) {
    switch (e.keyCode) {
        case 37:
            mx = -2;
            my = 0;
            break;
        case 38:
            mx = 0; my = -2;
            break;
        case 39:
            mx = 2;
            my = 0;
            break;
        case 40:
            mx = 0;
            my = 2;
            break;
        default:
            mx = 0;
            my = 0;
    }
}

function drawMovingBall() {
    clear();
    circle(x, y, 20);

    if (x + mx > WIDTH || x + mx < 0) {
        mx = -mx;
    }
    if (y + my > HEIGHT || y + my < 0) {
        my = -my;
    }
    x += mx;
    y += my;
}


function circle(x, y, r) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, true);
    ctx.fill();
}
function clear() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

$(function () {
    console.log("ready...");
    canvas01();
    canvas02();
    canvas03();
    canvas04();

});