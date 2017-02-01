class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas15");
        var ctx = canvas.getContext("2d");

        var lineJoin = ['round', 'bevel', 'miter'];
        ctx.lineWidth = 10;
        for (var i = 0; i < lineJoin.length; i++) {
            ctx.lineJoin = lineJoin[i];
            ctx.beginPath();
            ctx.moveTo(-5, 5 + i * 40);
            ctx.lineTo(35, 45 + i * 40);
            ctx.lineTo(75, 5 + i * 40);
            ctx.lineTo(115, 45 + i * 40);
            ctx.lineTo(155, 5 + i * 40);
            ctx.stroke();
        }
    }

    componentDidMount() {
        this.draw();
    }
    render() {
        return (
            <canvas id="mycanvas15" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test15')
);
