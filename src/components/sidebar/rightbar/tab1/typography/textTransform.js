import React,{Component} from "react";

class TextTransform extends Component{
    render(){
        return(
            <div className="kit-field text-transform compact pull-left">
                <div className="label kit-label " title="Text Transform"><div className="link"><svg width={21} height={11} viewBox="0 0 21 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M19 9l-2.7-7.9H15L12.3 9h-.8v1h2.9V9h-.9l.7-2h3l.7 2H17v1h2.9V9H19zm-4.5-3l1-3.1c.1-.4.1-.7.1-.7s0 .3.1.7l1 3.1h-2.2zm-8-4.9H5.1L2.4 9h-.8v1h2.9V9h-.9l.7-2h3L8 9h-.9v1H10V9h-.8L6.5 1.1zM4.6 6l1-3.1c.1-.4.1-.7.1-.7s0 .3.1.7L7 6H4.6z" /></svg><span>Text Transform<span className="colon">:</span></span></div></div>
                <div className="kit-radio-buttons kit-input-control clearfix"><div className="kit-button kit-radio-button active none" label="None"><svg width={11} height={11} viewBox="0 0 11 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="none" stroke="currentColor" strokeMiterlimit={10} d="M2 9l7-7M2 2l7 7" /></svg><span>None</span></div><div className="kit-button kit-radio-button uppercase" label="Uppercase"><svg width={17} height={10} viewBox="0 0 17 10" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M1 3h1V2h2v6H3v1h3V8H5V2h2v1h1V1H1zm8-2v2h1V2h2v6h-1v1h3V8h-1V2h2v1h1V1z" fill="currentColor" /></svg><span>Uppercase</span></div><div className="kit-button kit-radio-button capitalize" label="Capitalize"><svg width={14} height={10} viewBox="0 0 14 10" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M1 3h1V2h2v6H3v1h3V8H5V2h2v1h1V1H1zm11.2 5.1c-.4 0-1.2-.1-1.2-1.3V4h1.6V3H11V1h-1v2H9v1h1v2.9C10 8.8 11.4 9 12.1 9h.6v-.9h-.5z" fill="currentColor" /></svg><span>Capitalize</span></div><div className="kit-button kit-radio-button lowercase" label="Lowercase"><svg width={11} height={10} viewBox="0 0 11 10" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M9.2 8.1C8.8 8.1 8 8 8 6.8V4h1.6V3H8V1H7v2H6v1h1v2.9C7 8.8 8.4 9 9.1 9h.6v-.9h-.5zM3 6.8V4h1.6V3H3V1H2v2H1v1h1v2.9C2 8.8 3.4 9 4.1 9h.6v-.9h-.5C3.8 8.1 3 8 3 6.8z" fill="currentColor" /></svg><span>Lowercase</span></div></div>
            </div>

        )
    }
}
export default TextTransform;
