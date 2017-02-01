class Test02 extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        var canvas = document.getElementById("mycanvas02");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(75,50);
        ctx.lineTo(100,75);
        ctx.lineTo(100,25);
        ctx.fill();     
    }
    render() {
        return (
            <canvas id="mycanvas02" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test02 />,
    document.getElementById('test02')
);
