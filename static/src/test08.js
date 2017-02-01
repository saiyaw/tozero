class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var canvas = document.getElementById("mycanvas08");
        var ctx = canvas.getContext("2d");

        var rectangle = new Path2D();
        rectangle.rect(10,10,50,50);
        ctx.fill(rectangle);

        var circle = new Path2D();
        circle.arc(100,35,25,0,Math.PI*2);
        ctx.stroke(circle);

        var p = new Path2D("M60 60 h 80 v 80 h -80 Z");
        ctx.stroke(p);
    }
    render() {
        return (
            <canvas id="mycanvas08" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test08')
);
