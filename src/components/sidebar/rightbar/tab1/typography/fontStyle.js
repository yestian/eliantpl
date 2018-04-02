import React,{Component} from "react";

class FontStyle extends Component{
    render(){
        return(
            <div className="kit-field font-style compact pull-right"><div className="label kit-label " title="Font Style"><div className="link"><svg width={23} height={14} viewBox="0 0 23 14" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M1.5 11.5h1.1L10 1.1h2v10.4h1.1l-.5 1.3h-4l.5-1.3h1.2V8.9H6.2l-1.8 2.6h1.3l-.5 1.3H1.1l.4-1.3zm8.9-3.9V3.5c0-.5.1-.9.1-.9s-.2.4-.5.9L7.1 7.6h3.3zm9.1.2h.4s.2-.5.2-.8c.1-.8-.2-1.2-1.3-1.2-1.3 0-2.5.8-2.5.8l-.2-1.2s1.5-.8 3.2-.8c1.5 0 2.7.6 2.4 2.3-.1.9-1.3 3.4-1.4 4.1-.1.6.2.7.6.7h.4l-.3 1.1h-.7c-.9 0-1.6-.4-1.4-1.5 0 0-1.3 1.6-3.1 1.6-1.3 0-2.2-.7-2-2 .2-2.5 3.5-3.1 5.7-3.1zm-3.2 4c1.3 0 2.7-1.5 3.2-2.6l.1-.3h-.4c-1.1 0-3.7.2-4 1.9-.1.5.2 1 1.1 1z" fill="currentColor" /></svg><span>Font Style<span className="colon">:</span></span></div></div><div className="kit-radio-buttons kit-input-control clearfix"><div className="kit-button kit-radio-button active normal" label="normal"><svg width={8} height={13} viewBox="0 0 8 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M1 11c.4 0 1.4-.1 1.6-.2.3-.1.4-.4.4-.8V3c0-.4-.1-.7-.4-.9C2.4 2.1 1.4 2 1 2V1h6v1c-.4 0-1.4.1-1.6.2-.3.1-.4.4-.4.8v7c0 .4.1.7.3.8.3.2 1.3.2 1.7.2v1H1v-1z" /></svg><span>normal</span></div><div className="kit-button kit-radio-button italic" label="italic"><svg width={13} height={13} viewBox="0 0 13 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M12 1H5.6v1h1.2c.2 0 .3.1.4.1.1.1.2.2.1.5 0 .1 0 .2-.1.3 0 .1-.1.3-.2.5l-2.9 6.7c-.2.4-.4.7-.5.8-.1 0-.2.1-.3.1H1.6v1H8v-1H6.2c-.1-.1-.2-.2-.1-.5v-.2l.2-.5 3-6.8c.2-.4.4-.7.5-.8.2-.1.4-.1.6-.2H12V1z" /></svg><span>italic</span></div></div></div>

        )
    }
}
export default FontStyle;
