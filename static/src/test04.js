class Test04 extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var canvas = document.getElementById("mycanvas04");
        var ctx = canvas.getContext("2d");
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 3; j++) {
                ctx.beginPath()

                var x = 25 + j * 50;
                var y = 25 + i * 50;
                var radius = 20;
                var startAngle = 0;
                var endAngle = Math.PI + (Math.PI * j) / 2;
                var antiClockwise = i % 2 == 0 ? false : true;

                ctx.arc(x,y,radius,startAngle, endAngle, antiClockwise);

                if(i > 1){
                    ctx.fill();
                }else{
                    ctx.stroke();
                }
            }
        }

    }
    render() {
        return (
            <canvas id="mycanvas04" width="150" height="200"></canvas>
        );
    }
}


ReactDOM.render(
    <Test04 />,
    document.getElementById('test04')
);
