import React,{Component} from "react";

class PaddingRight extends Component{
    render(){
        let data=this.props.data
            ,s=this.props.node;
        let tiny='';
        if(s.paddingRight<=5){tiny=tiny}
        return(
            <div className="hud wf-control" style={{top: s.top-s.marginTop+1, left: -s.mediaWidth-11, width: s.mediaWidth, height: s.height+s.marginTop+s.marginBottom}}>
                <div className="ghost-box" style={{top: s.marginTop, left: s.marginLeft, width: s.width, height: s.height, display: 'none'}} />
                <div className="padding-box" style={{top: s.marginTop, left: s.marginLeft, width: s.width, height: s.height, transform: 'none'}}>
                    <div className="dim inside padding right" style={{width: s.paddingRight, right: 0,left:s.width-s.paddingRight}}>
                        <span className={`line ${tiny}`} style={{top: s.height/2}}>
                            <span className="label">
                                <span className="box">
                                    <span className="value">{s.paddingRight}</span>
                                    <span className="unit">px</span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div className="size-box" />
                </div>
            </div>
        )
    }
}
export default PaddingRight;
