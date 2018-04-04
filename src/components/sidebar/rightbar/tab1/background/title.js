import React,{Component} from "react";

class Title extends Component{
    render(){
        return(
            <div className="kit-section-title"  onClick={this.props.onClick}>
                <div className="tick sprite-main" />
                <div className="label">背景</div>
                <div className="cascade-indicator"><i className="sprite-main" /></div>
            </div>
        )
    }
}
export default Title;
