var img = new Image();
img.src = "https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg";
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30;
var scale = 1.05;
var y = -4.5;

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
    }

    draw() {
        ctx.clearRect(0, 0, clearX, clearY);
        if (imgW <= CanvasXSize) {
            if (x > (CanvasXSize)) {
                x = 0;
            }
            if (x > (CanvasXSize - imgW)) {
                ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH);
            }
        } else {
            if (x > (CanvasXSize)) {
                x = CanvasXSize - imgW;
            }
            if (x > (CanvasXSize - imgW)) {
                ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
            }
        }

        ctx.drawImage(img, x, y, imgW, imgH);
        x += dx;

    }

    componentDidMount() {
        img.onload = () => {
            imgW = img.width * scale;
            imgH = img.height * scale;
            if (imgW > CanvasXSize) {
                x = CanvasXSize - imgW;
                clearX = imgW;
            } else {
                clearX = CanvasXSize;
            }
            ctx = document.getElementById("mycanvas31").getContext("2d");
            setInterval(this.draw, speed);
        }
        window.requestAnimationFrame(this.clock);
    }

    render() {
        return (
            <canvas id="mycanvas31" width="800" height="200"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test31')
);
