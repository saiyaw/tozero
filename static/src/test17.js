class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas17");
        var ctx = canvas.getContext("2d");

        var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
        lingrad.addColorStop(0, '#00ABEB');
        lingrad.addColorStop(0.5, '#fff');
        lingrad.addColorStop(0.5, '#26C000');
        lingrad.addColorStop(1, '#fff');

        var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
        lingrad2.addColorStop(0.5, '#000');
        lingrad2.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = lingrad;
        ctx.strokeStyle = lingrad2;

        ctx.fillRect(10, 10, 130, 130);
        ctx.strokeRect(50, 50, 50, 50);





    }

    componentDidMount() {
        this.draw();
    }
    render() {
        return (
            <canvas id="mycanvas17" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test17')
);
