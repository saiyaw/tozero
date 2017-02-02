class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas23");
        var ctx = canvas.getContext("2d");
        ctx.fillRect(0, 0, 150, 150);
        ctx.save();

        ctx.fillStyle = '#09F';
        ctx.fillRect(15, 15, 120, 120);

        ctx.save();

        ctx.fillStyle = '#FFF';
        ctx.globalAlpha = 0.5;
        ctx.fillRect(30, 30, 90, 90);

        ctx.restore();

        ctx.fillRect(45, 45, 60, 60);

        ctx.restore();
        ctx.fillRect(60, 60, 30, 30);




    }

    componentDidMount() {
        this.draw();
    }
    render() {
        return (
            <canvas id="mycanvas23" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test23')
);
