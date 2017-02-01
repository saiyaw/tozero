class Test06 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var canvas = document.getElementById("mycanvas06");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);


        ctx.fill();
    }
    render() {
        return (
            <canvas id="mycanvas06" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test06 />,
    document.getElementById('test06')
);
