class Test extends React.Component {
    constructor(props) {
        super(props);
    }

    draw() {
        var canvas = document.getElementById("mycanvas22");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.onload = function () {
            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 3; j++) {
                    ctx.drawImage(img, j * 50, i * 38, 50, 38);

                }
            }

        };

        img.src = "https://mdn.mozillademos.org/files/5397/rhino.jpg";



    }

    componentDidMount() {
        this.draw();
    }
    render() {
        return (
            <canvas id="mycanvas22" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test22')
);
