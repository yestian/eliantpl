import React,{Component} from "react";

class LetterSpacing extends Component{
    render(){
        return(
            <div className="kit-field letter-spacing compact pull-left"><div className="label kit-label " title="Letter Spacing"><div className="link"><svg width={21} height={18} viewBox="0 0 21 18" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".25" fill="currentColor" d="M9 1h3v11H9z" /><path opacity=".5" fill="currentColor" d="M12 1v11h1V1h-1zM8 12h1V1H8v11z" /><path fill="currentColor" d="M12 15H9v-1l-3 1.5L9 17v-1h3v1l3-1.5-3-1.5v1zm-6.6-3H8v-.9h-.8L5 4H3.8l-2.2 7.1H.9v.9h2.4v-.9h-.7L3 9.8h2.8l.4 1.3h-.8v.9zM3.3 8.8l1-3.2c0-.3.1-.6.1-.6s0 .3.1.6l1 3.2H3.3zm16 2.3L17.1 4H16l-2.2 7.1H13v.9h2.4v-.9h-.8l.4-1.3h2.8l.4 1.3h-.8v.9H20v-.9h-.7zm-3.9-2.3l1-3.2c0-.3.1-.6.1-.6s0 .3.1.6l1 3.2h-2.2z" /></svg><span>Letter Spacing<span className="colon">:</span></span></div></div><div className="kit-unit-box kit-text-input"><input type="text" className="input" tabIndex={1} defaultValue placeholder="normal" /><span className="unit">-</span><div className="right-control ticks"><div className="tick sprite-mid up"><i /></div><span className="sep" /><div className="tick sprite-mid down"><i /></div></div></div></div>

        )
    }
}
export default LetterSpacing;
