import React,{Component} from "react";

class MarginLeft extends Component{
    render(){
        let data=this.props.data
            ,s=this.props.node
            ,MT=s.marginLeft
            ,con=''
            ,tiny=''
            ,value=0;
        if(MT<=5){tiny='tiny'}
        if(MT<0){
            con='inside negative';
            value=MT;
        }
        let ghost={top: s.marginTop, left: s.marginLeft, width: s.width, height: s.height}
        return(
            <div className="hud wf-control" style={{top: s.top-s.marginTop, left: -s.mediaWidth-11, width: s.mediaWidth, height: s.height+s.marginTop+s.marginBottom}}>
                <div className={`dim margin left ${con}`} style={{width: s.marginLeft, left: 0, marginTop: s.marginTop, height: s.height}}>
                    <span className={`line ${tiny}`} style={{top: s.height/2}}>
                        <span className="label">
                            <span className="box">
                                <span className="value">{s.marginLeft}</span>
                                <span className="unit">px</span>
                            </span>
                        </span>
                    </span>
                </div>
                <div className="ghost-box" style={{...ghost, display: 'none'}} />
                <div className="padding-box" style={{...ghost, transform: 'none'}}>
                    <div className="size-box" />
                </div>
            </div>
        )
    }
}
export default MarginLeft;
