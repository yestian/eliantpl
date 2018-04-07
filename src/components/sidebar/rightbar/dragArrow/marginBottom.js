import React,{Component} from "react";

class MarginBottom extends Component{
    render(){
        let data=this.props.data
            ,s=this.props.node
            ,MT=s.marginBottom
            ,con=''
            ,tiny=''
            ,value=0;
        if(MT<=5){tiny='tiny'}
        if(MT<0){
            con='inside negative';
            value=MT;
        }
        let ghost={top: s.marginTop, left: s.left, width: s.width, height: s.height}
        return(
            <div className="hud wf-control" style={{top: s.top-s.marginTop+1, left: -s.mediaWidth-11, width: s.mediaWidth, height: s.height+s.marginTop+s.marginBottom}}>
                <div className={`dim margin bottom ${con}`} style={{
                    height: Math.abs(s.marginBottom), bottom: value, marginLeft: s.left, width: s.width
                }}>
                    <span className={`line ${tiny}`} style={{left: s.width/2}}>
                        <span className="label">
                            <span className="box">
                                <span className="value">{MT}</span>
                                <span className="unit">px</span>
                            </span>
                        </span>
                    </span>
                </div>
                <div className="ghost-box" style={{...ghost,display: 'none'}} />
                <div className="padding-box" style={{...ghost,transform: 'none'}}>
                    <div className="size-box" />
                </div>
            </div>
        )
    }
}
export default MarginBottom;
