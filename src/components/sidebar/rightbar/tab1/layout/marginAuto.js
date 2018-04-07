import React,{Component} from "react";

class MarginAuto extends Component{
    render(){
        let status=this.props.right.layout.marginAuto;
        return(
            <div className={`kit-button margin-auto${status?' active':''}`} onClick={()=>{this.props.onClick(status)}}>
                <div className="wf-tip bottom win-fit">
                    <div className="label">居中元素 (需要宽度)</div>
                    <div className="arrow" />
                </div>
                <svg width={18} height={7} viewBox="0 0 18 7" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M8 5h2V2H8v3zM3 3H1v1h2v2l3-2.5L3 1v2zm12 0V1l-3 2.5L15 6V4h2V3h-2z" /></svg>
                <span>中间</span>
            </div>

        )
    }
}
export default MarginAuto;
