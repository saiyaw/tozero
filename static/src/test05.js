class Test05 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var canvas = document.getElementById("mycanvas05");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(75, 25);
        ctx.quadraticCurveTo(25, 25, 25, 62.5);
        ctx.quadraticCurveTo(25, 100, 50, 100);
        ctx.quadraticCurveTo(50, 120, 30, 125);
        ctx.quadraticCurveTo(60, 120, 65, 100);
        ctx.quadraticCurveTo(125, 100, 125, 62.5);
        ctx.quadraticCurveTo(125, 25, 75, 25);

        ctx.stroke();
    }
    render() {
        return (
            <canvas id="mycanvas05" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test05 />,
    document.getElementById('test05')
);
