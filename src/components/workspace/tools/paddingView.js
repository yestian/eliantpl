import React,{Component} from "react";
import $ from 'jquery';
class PaddingView extends Component{
    constructor(props){
        super(props);
        this.drawGrid=this.drawGrid.bind(this);
    }
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
                this.drawGrid(cantop,'#38d24c', 4);
        }
        if($('#canright').length){
            let canright=document.getElementById("canright").getContext("2d");
                this.drawGrid(canright,'#38d24c', 4);
        }
        if($('#canbot').length){
            let canbot=document.getElementById("canbot").getContext("2d");
                this.drawGrid(canbot,'#38d24c', 4);
        }
        if($('#canleft').length){
            let canleft=document.getElementById("canleft").getContext("2d");
                this.drawGrid(canleft,'#38d24c', 4);
        }

    }
        render(){
            let index=this.props.data.index;
            let node=$('#site-iframe-next').contents().find("[data-id="+index.sid+"]");
            let ML=parseFloat(node.css('paddingLeft'),10);
            let MR=parseFloat(node.css('paddingRight'),10);
            let MT=parseFloat(node.css('paddingTop'),10);
            let MB=parseFloat(node.css('paddingBottom'),10);
            let outW=node.outerWidth();
            let outH=node.outerHeight();
            let left=node.offset().left;
            let top=node.offset().top;
            return(
                <div className="bem-Goggles">
                    {MT?
                        <canvas id="cantop" width={outW} height={MT} className={`bem-Goggles_Margin`} style={{left: left, top: top}} />
                    :null}
                    {MR?
                        <canvas id="canright" width={MR} height={outH} className={`bem-Goggles_Margin`}  style={{left: left+outW-MR, top: top}} />
                    :null}
                    {MB?
                        <canvas id="canbot" width={outW} height={MB} className={`bem-Goggles_Margin`} style={{left: left, top: top+outH-MB}} />
                    :null}
                    {ML?
                        <canvas id="canleft" width={ML} height={outH} className={`bem-Goggles_Margin`} style={{left: left, top: top}} />
                    :null}
                </div>
            )
        }
}
export default PaddingView;
