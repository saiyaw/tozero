class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            offset: 0
        };
    }


    draw() {
        var canvas = document.getElementById("mycanvas16");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.setLineDash([4, 2]);
        ctx.lineDashOffset = -this.state.offset;
        ctx.strokeRect(10, 10, 100, 100);
    }

    march() {
        this.setState((prevState) => ({
            offset: prevState.offset + 1
        }));
        if (this.state.offset > 16) {
            this.setState({
                offset: 0
            });
        }
        this.draw();
    }

    componentDidMount() {
        this.timeID = setInterval(() => this.march(), 30);
        this.draw();
    }

    componentWillUnmount() {
        clearInterval(this.timeID);

    }

    component
    render() {
        return (
            <canvas id="mycanvas16" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test />,
    document.getElementById('test16')
);
