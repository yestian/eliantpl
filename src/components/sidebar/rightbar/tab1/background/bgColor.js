import React,{Component} from "react";

class BgColor extends Component{
    render(){
        return(
            <div className="kit-field fill-color pull-left compact">
                <div className="label kit-label fill-color pull-left compact" title="Background Color"><div className="link"><svg width={19} height={17} viewBox="0 0 19 17" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M18 13.9c0-.2-.1-.4-.1-.4C17.7 12.3 16 9 16 9s-1.5 2.9-1.9 4.3c-.1.2-.1.4-.1.6v.1c0 1.1.9 2 2 2s2-.9 2-2.1c0 .1 0 0 0 0zM8.4 5.8l-4.1-4-1.1 1.1 4 4.1 1.2-1.2zm.2-4L7.2 3.2l1.3 1.3 4.1 3.9-.7.6H4.1L6 7.1 4.6 5.7 1 9.3c-.4.4-.4 1 0 1.4l5.1 5.1c.4.4 1 .4 1.4 0L15 8.3 8.6 1.8z" /></svg></div></div>
                <div className="kit-color-input kit-input-control fill-color pull-left compact no-color">
                    <div className="preview">
                        <div color="true" tabIndex={0} style={{width: 22, height: 22, borderWidth: 0, outline: 0, cursor: 'default', userSelect: 'none', background: 'linear-gradient(rgb(94, 94, 94), rgb(94, 94, 94)), url("data:image/png', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', borderStyle: 'solid', borderColor: 'rgba(0, 0, 0, 0.8)', borderTopLeftRadius: 2, borderBottomLeftRadius: 2}}>
                        <svg width={9} height={14} viewBox="0 0 9 14" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)', color: 'rgb(166, 166, 166)'}}><path fill="currentColor" d="M1 9.532C1 11.447 2.563 13 4.49 13c1.926 0 3.492-1.553 3.492-3.468 0-.024-.004-.046-.004-.068 0-.023.004-.044.004-.065 0-.36-.09-.747-.09-.747-.495-2.002-3.41-7.634-3.41-7.634S1.93 6.04 1.145 8.402A3.47 3.47 0 0 0 1 9.398c0 .016.005.03.005.044a.905.905 0 0 0-.005.09z" /></svg>
                    </div>
                    </div>
                    <div className="kit-text-input"><input type="text" className="input" tabIndex={1} defaultValue placeholder="white" data-automation-id="background-color-input" /></div>
                </div>
            </div>

        )
    }
}
export default BgColor;
