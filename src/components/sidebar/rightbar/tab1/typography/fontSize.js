import React,{Component} from "react";

class FontSize extends Component{
    render(){
        return(
            <div className="kit-field font-size compact pull-left"><div className="label kit-label " title="Font Size"><div className="link upstream"><svg width={22} height={14} viewBox="0 0 22 14" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M9.2 11.6h1.1l3.6-10.5h1.8l3.6 10.5h1.1v1.3h-3.9v-1.3h1.2L16.8 9h-4l-.9 2.6h1.2v1.3H9.2v-1.3zm7.2-3.9l-1.6-5-1.6 5h3.2z" /><path opacity=".7" fill="currentColor" d="M1.5 12.2h.7l2.2-6.1h1.1l2.2 6.1h.7v.8H6v-.8h.8L6.3 11H3.6l-.4 1.2H4v.8H1.5v-.8zM6 10.1L5 7l-1.1 3.1H6z" /></svg><span>Font Size<span className="colon">:</span></span></div></div><div className="kit-unit-box kit-text-input"><input type="text" className="input" tabIndex={1} defaultValue={16} placeholder={16} /><span className="unit">px</span><div className="right-control ticks"><div className="tick sprite-mid up"><i /></div><span className="sep" /><div className="tick sprite-mid down"><i /></div></div></div></div>

        )
    }
}
export default FontSize;
