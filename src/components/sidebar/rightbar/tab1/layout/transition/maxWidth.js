import React,{Component} from "react";

class MaxWidth extends Component{
    render(){
        return(
            <div className="transition-child"><div className="left guidance-panel-wrapper"><div className="guidance-panel-child"><div className="kit-field pull-left"><div className="label kit-label " title="Max"><div className="link"><i /><span>最大<span className="colon">:</span></span></div></div><div className="kit-unit-box kit-text-input"><input type="text" className="input" tabIndex={1} placeholder="none" /><span className="unit">-</span><div className="right-control ticks"><div className="tick sprite-mid up"><i /></div><span className="sep" /><div className="tick sprite-mid down"><i /></div></div></div></div></div></div></div>
        )
    }
}
export default MaxWidth;
