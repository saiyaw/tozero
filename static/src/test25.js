class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas25");
        var ctx = canvas.getContext("2d");
        ctx.translate(75, 75);
        for (var i = 1; i < 6; i++) {
            ctx.save();
            ctx.fillStyle = 'rgb(' + (51 * i) + "," + (255 - 51 * i) + ", 255)";

            for (var j = 0; j < i * 6; j++) {
                ctx.rotate(Math.PI * 2 / (i * 6));
                ctx.beginPath();
                ctx.arc(0, i * 12.5, 5, 0, Math.PI * 2, true);
                ctx.fill();
            }
            ctx.restore();
        }




    }


    componentDidMount() {
        this.draw();
    }
    render() {
        return (
            <canvas id="mycanvas25" width="300" height="300"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test25')
);
