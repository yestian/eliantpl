import React,{Component} from "react";

class Title extends Component{
    render(){
        return(
            <div className="kit-section-title upstream"  onClick={this.props.onClick}>
                <div className="tick sprite-main" />
                <div className="label">排版</div>
                <div className="cascade-indicator"><i className="sprite-main" /></div>
                <div className="advanced" onClick={this.props.onClick}><i className="status sprite-main" /><i className="switch sprite-main" />高级</div>
            </div>
        )
    }
}
export default Title;
