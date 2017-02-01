
class Test01 extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        var canvas = document.getElementById("mycanvas01");
        var ctx = canvas.getContext("2d");
        ctx.fillRect(25,25,100,100);
        ctx.clearRect(45,45,60,60);
        ctx.strokeRect(50,50,50,50);

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10,10,55,50);
        
        ctx.fillStyle = "rgba(0,0,200,0.5)";
        ctx.fillRect(30,30,55,50);        
    }
    render() {
        return (
            <canvas id="mycanvas01" width="150" height="150"></canvas>
        );
    }
}


ReactDOM.render(
    <Test01 />,
    document.getElementById('test01')
);