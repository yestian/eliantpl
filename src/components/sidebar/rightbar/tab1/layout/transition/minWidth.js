import React,{Component} from "react";

class MinWidth extends Component{
    render(){
        return(
            <div className="transition-child">
                <div className="left guidance-panel-wrapper">
                    <div className="guidance-panel-child">
                        <div className="kit-field pull-left">
                            <div className="label kit-label " title="Min">
                                <div className="link"><i /><span>最小<span className="colon">:</span></span></div>
                            </div>
                            <div className="kit-unit-box kit-text-input">
                                <input type="text" className="input" tabIndex={1} placeholder={0} />
                                <span className="unit">px</span>
                                <div className="right-control ticks">
                                    <div className="tick sprite-mid up"><i /></div>
                                    <span className="sep" />
                                    <div className="tick sprite-mid down"><i /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MinWidth;
