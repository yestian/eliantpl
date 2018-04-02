import React,{Component} from "react";

class TextIndent extends Component{
    render(){
        return(
            <div className="kit-field text-indent compact pull-right"><div className="label kit-label " title="Text Indent"><div className="link"><svg width={19} height={14} viewBox="0 0 19 14" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M9 3h9v2H9z" /><path opacity=".5" fill="currentColor" d="M6 6v1h12V6H6zm0 3h12V8H6v1zm0 2h12v-1H6v1zm0 2h9v-1H6v1zm1-9.5L4 1v2H1v1h3v2l3-2.5z" /></svg><span>Text Indent<span className="colon">:</span></span></div></div><div className="kit-unit-box kit-text-input"><input type="text" className="input" tabIndex={1} defaultValue placeholder={0} /><span className="unit">-</span><div className="right-control ticks"><div className="tick sprite-mid up"><i /></div><span className="sep" /><div className="tick sprite-mid down"><i /></div></div></div></div>

        )
    }
}
export default TextIndent;
