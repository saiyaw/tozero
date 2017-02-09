class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas26");
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#fc0";
        ctx.lineWidth = 1.5;
        ctx.fillRect(0, 0, 300, 300);

        ctx.save();
        ctx.translate(50, 50);
        this.rawSpirograph(ctx, 22, 6, 5);

        ctx.translate(100, 0);
        ctx.scale(0.75, 0.75);
        this.rawSpirograph(ctx, 22, 6, 5);

        ctx.translate(133.333, 0);
        ctx.scale(0.75, 0.75);
        this.rawSpirograph(ctx, 22, 6, 5);
        ctx.restore();

        ctx.strokeStyle = "#0cf";
        ctx.save();
        ctx.translate(50, 150);
        ctx.scale(1, 0.75);
        this.rawSpirograph(ctx, 22, 6, 5);

        ctx.translate(100, 0);
        ctx.scale(1, 0.75);
        this.rawSpirograph(ctx, 22, 6, 5);

        ctx.translate(100, 0);
        ctx.scale(1, 0.75);
        this.rawSpirograph(ctx, 22, 6, 5);
        ctx.restore();

        ctx.strokeStyle = "#cf0";
        ctx.save();
        ctx.translate(50, 250);
        ctx.scale(0.75, 1);
        this.rawSpirograph(ctx, 22, 6, 5);

        ctx.translate(133.333, 0);
        ctx.scale(0.75, 1);
        this.rawSpirograph(ctx, 22, 6, 5);

        ctx.translate(177.777, 0);
        ctx.scale(0.75, 1);
        this.rawSpirograph(ctx, 22, 6, 5);
        ctx.restore();
    }

    rawSpirograph(ctx, R, r, O) {
        var x1 = R - O;
        var y1 = 0;
        var i = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        do {
            if (i > 20000) break;
            var x2 = (R + r) * Math.cos(i * Math.PI / 72) - (r + O) * Math.cos(((R + r) / r) * (i * Math.PI / 72))
            var y2 = (R + r) * Math.sin(i * Math.PI / 72) - (r + O) * Math.sin(((R + r) / r) * (i * Math.PI / 72))
            ctx.lineTo(x2, y2);
            x1 = x2;
            y1 = y2;
            i++;
        } while (x2 != R - O && y2 != 0);
        ctx.stroke();
    }

    componentDidMount() {
        this.draw();
    }

    render() {
        return (
            <canvas id="mycanvas26" width="300" height="300"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test26')
);
