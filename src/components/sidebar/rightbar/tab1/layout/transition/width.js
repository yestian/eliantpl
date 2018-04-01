import React,{Component} from "react";

class Width extends Component{
    render(){
        return(
            <div className="pull-left">
                <div className="guidance-panel-wrapper">
                    <div className="guidance-panel-child">
                        <div className="kit-field">
                            <div className="label kit-label " title="Width">
                                <div className="link"><i /><span>宽<span className="colon">:</span></span></div>
                            </div>
                            <div className="kit-unit-box kit-text-input">
                                <input type="text" className="input" tabIndex={1} placeholder="Auto" />
                                <span className="unit">-</span>
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
export default Width;
