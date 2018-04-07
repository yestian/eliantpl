import React,{Component} from "react";

class MarginTop extends Component{
    render(){
        let data=this.props.data
            ,s=this.props.node
            ,MT=s.marginTop
            ,con=''
            ,tiny=''
            ,value=0;

        if(MT<=5){tiny='tiny'}
        if(MT<0){
            con='inside negative';
            value=MT;
        }
        let style={
            hud:{top: s.top-MT+1, left: -s.mediaWidth-11, width: s.mediaWidth, height: s.height+MT+s.marginBottom},
            dim:{height: MT, top: value, marginLeft: s.left, width: s.width},
            ghost:{top: MT, left: s.left, width: s.width, height: s.height}
        }
        return(
            <div className="hud wf-control" style={style.hud}>
                <div className={`dim margin top ${con}`} style={style.dim}>
                    <span className={`line ${tiny}`} style={{left: s.width/2}}>
                        <span className="label">
                            <span className="box">
                                <span className="value">{MT}</span>
                                <span className="unit">px</span>
                            </span>
                        </span>
                    </span>
                </div>
                <div className="ghost-box" style={{...style.ghost,display: 'none'}} />
                <div className="padding-box" style={{...style.ghost,transform: 'none'}}>
                    <div className="size-box" />
                </div>
            </div>
        )
    }
}
export default MarginTop;
