import React,{Component} from "react";

class FontColor extends Component{
    render(){
        return(
            <div className="kit-field font-color compact"><div className="label kit-label font-color compact" title="Font Color"><div className="link upstream"><svg width={17} height={16} viewBox="0 0 17 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M14.7 13.7L11.1 3.2H9.3L8.2 6.5c.3.8.6 1.4.7 1.9 0 0 0 .2.1.4l1-3.2c.1-.5.2-.9.2-.9s0 .4.2.9l1.4 4.1H9c0 .5-.1.9-.3 1.3h3.5l.9 2.6h-1.2V15h3.9v-1.3h-1.1zm-7-1c-.8.8-1.9 1.3-3 1.3v1h3.9v-1.3H7.3l.4-1z" opacity=".7" /><path fill="currentColor" d="M1 9.5C1 11.4 2.6 13 4.5 13S8 11.4 8 9.5v-.2c0-.3-.1-.7-.1-.7C7.4 6.6 4.5 1 4.5 1S1.9 6 1.2 8.4c-.1.3-.2.7-.2 1v.1z" /></svg><span>Font Color<span className="colon">:</span></span></div></div><div className="kit-color-input kit-input-control font-color compact"><div className="preview"><div color="#333" tabIndex={0} style={{width: 22, height: 22, borderWidth: 0, outline: 0, cursor: 'default', userSelect: 'none', background: 'linear-gradient(rgb(51, 51, 51), rgb(51, 51, 51)), url("data:image/png', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', borderStyle: 'solid', borderColor: 'rgba(0, 0, 0, 0.8)', borderTopLeftRadius: 2, borderBottomLeftRadius: 2}}><svg width={8} height={8} viewBox="0 0 8 8" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)', width: 8, height: 8, position: 'absolute', color: 'white', right: 0, bottom: 0}}><path d="M0 8l8-8v8z" fill="rgba(0, 0, 0, .8)" /><path d="M1 8l7-7v7z" fill="currentColor" /></svg></div></div><div className="kit-text-input"><input type="text" className="input" tabIndex={1} defaultValue="Darker Grey" placeholder="Transparent" /></div></div></div>

        )
    }
}
export default FontColor;
