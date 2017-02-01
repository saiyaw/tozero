class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas11");
        var ctx = canvas.getContext("2d");

        ctx.fillStyle="#FD0";
        ctx.fillRect(0,0,75,75);
        ctx.fillStyle="#6C0";
        ctx.fillRect(75,0,75,75);
        ctx.fillStyle="#09F";
        ctx.fillRect(0,75,75,75);
        ctx.fillStyle="#F30";
        ctx.fillRect(75,75,75,75);

        ctx.fillStyle = "#FFF";

        ctx.globalAlpha = 0.2;

        for(var i = 0; i < 7 ; i++){
            ctx.beginPath();
            ctx.arc(75,75,10 + 10*i, 0, Math.PI*2, true);
            ctx.fill();
        }

    }

    componentDidMount() {
        this.draw();
    }
    render() {
        return (
            <canvas id="mycanvas11" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test11')
);
