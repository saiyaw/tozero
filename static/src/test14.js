class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas14");
        var ctx = canvas.getContext("2d");

        var lineCap = ['butt', 'round', 'square'];

        ctx.strokeStyle = "#09f";
        ctx.beginPath();
        ctx.moveTo(10, 10);
        ctx.lineTo(140, 10);
        ctx.moveTo(10, 140);
        ctx.lineTo(140, 140);
        ctx.stroke();

        ctx.strokeStyle = "black";
        for (var i = 0; i < lineCap.length; i++) {
            ctx.lineWidth = 15;
            ctx.lineCap = lineCap[i];
            ctx.beginPath();
            ctx.moveTo(25 + i * 50, 10);
            ctx.lineTo(25 + i * 50, 140);
            ctx.stroke();
        }
    }

    componentDidMount() {
        this.draw();
    }
    render() {
        return (
            <canvas id="mycanvas14" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test14')
);
