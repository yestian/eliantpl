import React,{Component} from "react";

class TextDecoration extends Component{
    render(){
        return(
            <div className="kit-field text-decoration compact pull-right">
                <div className="label kit-label " title="Text Decoration">
                    <div className="link"><svg width={15} height={14} viewBox="0 0 15 14" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M4.9 10H3.4l-.7 2H1.6v1H6v-1H4.3l.6-2zM7 3.2l.2-1s0 .5.2 1L8.5 7h1.6l-2-6H6.3l-2 6h1.6L7 3.2zm4.1 6.8H9.5l.6 2H8.7v1H13v-1h-1.3l-.6-2zM1 8v1h13V8H1z" /></svg><span>Text Decoration<span className="colon">:</span></span></div>
                </div>
                <div className="kit-radio-buttons kit-input-control clearfix">
                    <div className="kit-button kit-radio-button active none" label="None"><svg width={11} height={11} viewBox="0 0 11 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="none" stroke="currentColor" strokeMiterlimit={10} d="M2 9l7-7M2 2l7 7" /></svg><span>None</span></div>
                    <div className="kit-button kit-radio-button underline" label="Underline"><svg width={12} height={17} viewBox="0 0 12 17" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M1 15h10v1H1zM7 3H1v3h1.1S2.2 4 4 4h1v7.8C5 13 4.4 13 4.1 13h-.5v1h4.8v-1h-.5c-.4 0-.9 0-.9-1.2V4h1c1.8 0 1.9 2 1.9 2H11V3H7z" fill="currentColor" /></svg><span>Underline</span></div>
                    <div className="kit-button kit-radio-button line-through" label="Strikeout"><svg width={12} height={14} viewBox="0 0 12 14" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M7 1H1v3h1.1S2.2 2 4 2h1v5H1v1h4v2.8C5 12 4.4 12 4.1 12h-.5v1h4.8v-1h-.5c-.4 0-.9 0-.9-1.2V8h4V7H7V2h1c1.8 0 1.9 2 1.9 2H11V1H7z" /></svg><span>Strikeout</span></div>
                </div>
            </div>

        )
    }
}
export default TextDecoration;
