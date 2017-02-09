class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas27");
        var ctx = canvas.getContext("2d");


        var sin = Math.sin(Math.PI / 6);
        var cos = Math.cos(Math.PI / 6);

        ctx.translate(100, 100);

        var c = 0;

        for (var i = 0; i <= 12; i++) {
            c = Math.floor(255 / 12 * i);
            ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
            ctx.fillRect(0, 0, 100, 10);
            ctx.transform(cos, sin, -sin, cos, 0, 0);
        }

        ctx.setTransform(-1, 0, 0, 1, 100, 100);
        ctx.fillStyle = "rgba(255,128,255,0.5)";
        ctx.fillRect(0, 50, 100, 100);

    }


    componentDidMount() {
        this.draw();
    }

    render() {
        return (
            <canvas id="mycanvas27" width="300" height="300"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test27')
);
