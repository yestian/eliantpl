import React,{Component} from "react";

class Float extends Component{
    render(){
        return(
            <div className="transition-child">
                <div className="guidance-panel-wrapper">
                    <div className="guidance-panel-child">
                        <div className="kit-field kit-field float">
                            <div className="label kit-label " title="Float"><div className="link"><i /><span>浮动<span className="colon">:</span></span></div></div>
                            <div className="kit-radio-buttons kit-input-control clearfix">
                                <div className="kit-button kit-radio-button active none" label="None">
                                    <svg width={11} height={11} viewBox="0 0 11 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="none" stroke="currentColor" strokeMiterlimit={10} d="M2 9l7-7M2 2l7 7" /></svg>
                                    <span>无</span>
                                </div>
                                <div className="kit-button kit-radio-button left" title="左对齐" label="Left">
                                    <svg width={29} height={11} viewBox="0 0 29 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M4 3L1 5.518 4 8V6h2V5H4V3zm15 7h5V9h-5v1zm0-2h9V7h-9v1zm0-7v1h9V1h-9zm0 3h9V3h-9v1zm0 2h9V5h-9v1zm-3-5H9c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z" /></svg>
                                    <span>左</span>
                                </div>
                                <div className="kit-button kit-radio-button right" title="右对齐" label="Right">
                                    <svg width={29} height={11} viewBox="0 0 29 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M1 8h9V7H1v1zm0-4h9V3H1v1zm0 6h5V9H1v1zm0-4h9V5H1v1zm0-4h9V1H1v1zm27 3.482L25 3v2h-2v1h2v2l3-2.518zM20 1h-7c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1z" /></svg>
                                    <span>右</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Float;
