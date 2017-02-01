class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas12");
        var ctx = canvas.getContext("2d");

        ctx.fillStyle = "rgb(255,221,0)";
        ctx.fillRect(0, 0, 150, 37.5);
        ctx.fillStyle = "rgb(102,204,0)";
        ctx.fillRect(0, 37.5, 150, 37.5);
        ctx.fillStyle = "rgb(0,153,255)";
        ctx.fillRect(0, 75, 150, 37.5);
        ctx.fillStyle = "rgb(255,51,0)";
        ctx.fillRect(0, 112.5, 150, 37.5);

        for (var i = 0; i < 10; i++) {
            ctx.fillStyle = "rgba(255,255,255," + (i + 1) / 10 + ')';
            for (var j = 0; j < 4; j++) {
                ctx.fillRect(5 + i * 14, 5 + j * 37., 14, 27.5);
            }
        }

    }

    componentDidMount() {
        this.draw();
    }
    render() {
        return (
            <canvas id="mycanvas12" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test12')
);
