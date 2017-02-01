class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas19");
        var ctx = canvas.getContext("2d");

        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shdowBlur = 2;
        ctx.shadowColor = "rgba(0,0,0,0.5)";

        ctx.font = "20px Times New Roman";
        ctx.fillStyle = "Black";
        ctx.fillText("Sample String", 5, 30);
    }

    componentDidMount() {
        this.draw();
    }
    render() {
        return (
            <canvas id="mycanvas19" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test19')
);
