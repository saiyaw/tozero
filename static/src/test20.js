class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas20");
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
        ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
        ctx.fill("evenodd");
    }

    componentDidMount() {
        this.draw();
    }
    render() {
        return (
            <canvas id="mycanvas20" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test20')
);
