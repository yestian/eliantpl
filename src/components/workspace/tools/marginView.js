import React,{Component} from "react";
import $ from 'jquery';

class MarginView extends Component{
    constructor(props){
        super(props);
        this.drawGrid=this.drawGrid.bind(this);
    }
    // function drawGrid(color, stepx, stepy) {
    //     context.save()
    //
    //     context.strokeStyle = color;
    //     context.lineWidth = 0.5;
    //     context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //
    //     for (var i = stepx + 0.5; i < context.canvas.width; i += stepx) {
    //         context.beginPath();
    //         context.moveTo(i, 0);
    //         context.lineTo(i, context.canvas.height);
    //         context.stroke();
    //     }
    //
    //     for (var i = stepy + 0.5; i < context.canvas.height; i += stepy) {
    //         context.beginPath();
    //         context.moveTo(0, i);
    //         context.lineTo(context.canvas.width, i);
    //         context.stroke();
    //     }
    //
    //     context.restore();
    // }
    drawGrid(context,color, stepx) {
        context.save()
        context.strokeStyle = color;
        context.lineWidth = 0.5;
        let w=context.canvas.width;
        let h=context.canvas.height;
        context.clearRect(0, 0, w, h);

        for (var i = stepx + 0.5; i < (w>h?w:h)*2; i += stepx) {
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(i, 0);
            context.stroke();
        }
        context.restore();
    }
    componentDidMount(){
        if($('#cantop').length){
            let cantop=document.getElementById("cantop").getContext("2d");
            if($('#cantop').is('.bem-Goggles_Margin-negative')){
                this.drawGrid(cantop,'#ff6042', 4);//ff6042
            }else{
                this.drawGrid(cantop,'#41b0ff', 4);//ff6042
            }
        }
        if($('#canbot').length){
            let canbot=document.getElementById("canbot").getContext("2d");
            if($('#canbot').is('.bem-Goggles_Margin-negative')){
                this.drawGrid(canbot,'#ff6042', 4);//ff6042
            }else{
                this.drawGrid(canbot,'#41b0ff', 4);//ff6042
            }
        }
        if($('#canleft').length){
            let canleft=document.getElementById("canleft").getContext("2d");
            if($('#canleft').is('.bem-Goggles_Margin-negative')){
                this.drawGrid(canleft,'#ff6042', 4);//ff6042
            }else{
                this.drawGrid(canleft,'#41b0ff', 4);//ff6042
            }
        }
        if($('#canright').length){
            let canright=document.getElementById("canright").getContext("2d");
            if($('#canright').is('.bem-Goggles_Margin-negative')){
                this.drawGrid(canright,'#ff6042', 4);//ff6042
            }else{
                this.drawGrid(canright,'#41b0ff', 4);//ff6042
            }
        }

    }

    render(){
        let index=this.props.data.index;
        let node=$('#site-iframe-next').contents().find("[data-id="+index.sid+"]");
        let ML=parseFloat(node.css('marginLeft'),10);
        let MR=parseFloat(node.css('marginRight'),10);
        let MT=parseFloat(node.css('marginTop'),10);
        let MB=parseFloat(node.css('marginBottom'),10);
        let MLL=ML,MRR=0,MTT=MT,MBB=0;
        if(MT<0){MTT=0}if(MR<0){MRR=MR}if(MB<0){MBB=MB}if(ML<0){MLL=0}
        let outW=node.outerWidth();
        let outH=node.outerHeight();
        let left=node.offset().left;
        let top=node.offset().top;
        return(
            <div className="bem-Goggles">
                {MT?
                    <canvas id="cantop" width={outW} height={Math.abs(MT)} className={`bem-Goggles_Margin${MT<0?' bem-Goggles_Margin-negative':''}`} style={{left: left, top: top-MTT}} />
                :null}
                {MR?
                    <canvas id="canright" width={Math.abs(MR)} height={outH} className={`bem-Goggles_Margin${MR<0?' bem-Goggles_Margin-negative':''}`}  style={{left: left+outW+MRR, top: top}} />
                :null}
                {MB?
                    <canvas id="canbot" width={outW} height={Math.abs(MB)} className={`bem-Goggles_Margin${MB<0?' bem-Goggles_Margin-negative':''}`} style={{left: left, top: top+outH+MBB}} />
                :null}
                {ML?
                    <canvas id="canleft" width={Math.abs(ML)} height={outH} className={`bem-Goggles_Margin${ML<0?' bem-Goggles_Margin-negative':''}`} style={{left: left-MLL, top: top}} />
                :null}
            </div>
        )

    }
}
export default MarginView;
