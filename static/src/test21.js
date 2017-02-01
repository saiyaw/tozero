class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas21");
        var ctx = canvas.getContext("2d");

        ctx.font = "10px serif";
        ctx.textBaseline = "hanging";
        ctx.fillText("Hello World", 10, 50);
        ctx.strokeText("Hello World", 0, 100);
        var te = ctx.measureText("Hello World");
        console.log(te.width);

    }

    componentDidMount() {
        this.draw();
    }
    render() {
        return (
            <canvas id="mycanvas21" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test21')
);
