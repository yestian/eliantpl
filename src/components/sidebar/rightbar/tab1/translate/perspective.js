import React,{Component} from "react";

class Perspective extends Component{
    render(){
        return(
            <div className="kit-field perspective">
                <div className="clearfix"><div className="label kit-label " title="Children Perspective"><div className="link"><i /><span>Children Perspective<span className="colon">:</span></span></div></div><div className="hoverable-tooltip"><div className="preview"><svg width={11} height={11} viewBox="0 0 11 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M5.5 1C3 1 1 3 1 5.5S3 10 5.5 10 10 8 10 5.5 8 1 5.5 1zm0 8c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8zM6 6.4v.3H5v-.8c0-.1 0-.3.1-.4.1-.1.2-.2.4-.2.5.1.9-.3.9-.8s-.4-.8-.9-.8-.9.3-.9.8h-1c0-1.1.9-1.9 1.9-1.9s1.9.9 1.9 1.9c0 .9-.6 1.6-1.4 1.9z" /></svg></div></div></div>
                <div className="kit-inset-box clearfix">
                    <div className="kit-field">
                        <div className="kit-svg-icon"><svg width={11} height={12} viewBox="0 0 11 12" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><g stroke="currentColor" fill="none" fillRule="evenodd"><path d="M4.5 2v8m3-7v6" strokeLinecap="square" opacity=".5" /><path d="M.5.65l10 2.85v5l-10 2.85V.65z" /></g></svg></div>
                        <div className="kit-unit-slider kit-input-control"><div className="track" /><span className="nubbin" tabIndex={0} style={{left: '49.975%'}} /></div>
                        <div className="kit-unit-box kit-text-input"><input type="text" className="input" tabIndex={1} defaultValue placeholder="none" /><span className="unit">-</span><div className="right-control ticks"><div className="tick sprite-mid up"><i /></div><span className="sep" /><div className="tick sprite-mid down"><i /></div></div></div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Perspective;
