import React,{Component} from "react";

class LineHeight extends Component{
    render(){
        return(
            <div className="kit-field line-height compact pull-right"><div className="label kit-label " title="Line Height"><div className="link upstream"><svg width={16} height={19} viewBox="0 0 16 19" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M12.3 6.2c-.2 0-.3-.1-.3-.2V3.2C12 1.8 11.3 1 9.9 1c-1.3 0-2.1.5-2.1.5l.4.8S8.9 2 9.8 2c.7 0 1.2.3 1.2 1.2v.2h-.4c-.9 0-3.4.1-3.4 1.9 0 1.1.9 1.7 1.9 1.7 1.4 0 2-1.2 2-1.2v.6c-.1.4.1.6.6.6h1.2v-.8h-.6zM11 4.3c0 .9-.7 1.8-1.7 1.8-.6 0-1-.5-1-1C8.3 4 10.2 4 10.7 4h.3v.3zm1 10.6v-2.7c0-1.4-.7-2.2-2.1-2.2-1.3 0-2.1.5-2.1.5l.4.8s.7-.3 1.6-.3c.7 0 1.2.3 1.2 1.2v.2h-.4c-.9 0-3.4.1-3.4 1.9 0 1.2.9 1.7 1.8 1.7 1.4 0 2-1.2 2-1.2v.6c0 .4.2.6.7.6h1.2v-.8h-.6c-.2 0-.3-.1-.3-.3zm-1-1.6c0 .9-.7 1.8-1.7 1.8-.6 0-1-.5-1-1 0-1.1 1.9-1.1 2.4-1.1h.3v.3z" /><path opacity=".5" fill="currentColor" d="M4 11L2.5 8 1 11h1v4H1l1.5 3L4 15H3v-4h1zm1-3v1h10V8H5zm0 10h10v-1H5v1z" /></svg><span>Line Height<span className="colon">:</span></span></div></div><div className="kit-unit-box kit-text-input"><input type="text" className="input" tabIndex={1} defaultValue={22} placeholder={22} /><span className="unit">px</span><div className="right-control ticks"><div className="tick sprite-mid up"><i /></div><span className="sep" /><div className="tick sprite-mid down"><i /></div></div></div></div>

        )
    }
}
export default LineHeight;
