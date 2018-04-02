import React,{Component} from "react";

class TextAlign extends Component{
    render(){
        return(
            <div className="kit-field text-align compact pull-left"><div className="label kit-label " title="Text Align"><div className="link"><svg width={18} height={18} viewBox="0 0 18 18" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".5" fill="currentColor" d="M1 1h1v16H1z" /><path fill="currentColor" d="M6 14l-3 1.5L6 17v-1h2v-1H6v-1zm9-9H3v1h12V5zm1-2H3v1h13V3zM3 10h12V9H3v1zm0-3v1h14V7H3zm0 5h10v-1H3v1z" /></svg><span>Text Align<span className="colon">:</span></span></div></div><div className="kit-radio-buttons kit-input-control clearfix"><div className="kit-button kit-radio-button active left" label="Left"><svg width={13} height={13} viewBox="0 0 13 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M1 1h11v1H1zm0 2h9v1H1zm0 2h11v1H1zm0 2h10v1H1zm0 2h11v1H1zm0 2h7v1H1z" fill="currentColor" /></svg><span>Left</span></div><div className="kit-button kit-radio-button center" label="Center"><svg width={13} height={13} viewBox="0 0 13 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M1 1h11v1H1zm2 2h7v1H3zM2 5h9v1H2zM1 7h11v1H1zm2 2h7v1H3zm-1 2h9v1H2z" fill="currentColor" /></svg><span>Center</span></div><div className="kit-button kit-radio-button right" label="Right"><svg width={13} height={13} viewBox="0 0 13 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M1 1h11v1H1zm2 2h9v1H3zM1 5h11v1H1zm1 2h10v1H2zM1 9h11v1H1zm4 2h7v1H5z" fill="currentColor" /></svg><span>Right</span></div><div className="kit-button kit-radio-button justify" label="Justify"><svg width={13} height={13} viewBox="0 0 13 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M1 1h11v1H1zm0 2h11v1H1zm0 2h11v1H1zm0 2h11v1H1zm0 2h11v1H1zm0 2h6v1H1z" fill="currentColor" /></svg><span>Justify</span></div></div></div>

        )
    }
}
export default TextAlign;
