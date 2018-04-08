import React,{Component} from "react";

class Unit extends Component{
    render(){
        let unit=this.props.unit;
        return(
            <div className="wf-menu round-style unit-menu wf-control visible">
                <div className="tab">
                    <div className="inner">
                        <div className="units">-</div>
                    </div>
                </div>
                <div className="inner">
                    <div className="units">
                        <div className="unit" onClick={()=>{this.props.onClick(unit==='%'?0:2)}}>%</div>
                        <div className="unit" onClick={()=>{this.props.onClick(unit==='px'?0:1)}}>px</div>
                        <div className="unit" onClick={()=>{this.props.onClick(unit==='-'?0:3)}}>auto</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Unit;
