import React,{Component} from "react";

class SideDetail extends Component{
    render(){
        return(
            <div className="details clearfix">
                <div className="kit-field style">
                    <div className="label kit-label " title="Style"><div className="link"><i /><span>Style<span className="colon">:</span></span></div></div>
                    <div className="kit-radio-buttons kit-input-control clearfix"><div className="kit-button kit-radio-button none" label="none"><svg width={11} height={11} viewBox="0 0 11 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="none" stroke="currentColor" strokeMiterlimit={10} d="M2 9l7-7M2 2l7 7" /></svg><span>none</span></div><div className="kit-button kit-radio-button solid" label="Solid"><svg width={18} height={4} viewBox="0 0 18 4" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M1 1h16v2H1z" /></svg><span>Solid</span></div><div className="kit-button kit-radio-button dashed" label="Dashed"><svg width={18} height={4} viewBox="0 0 18 4" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M1 1h4v2H1zm6 0h4v2H7zm6 0h4v2h-4z" fill="currentColor" /></svg><span>Dashed</span></div><div className="kit-button kit-radio-button dotted" label="Dotted"><svg width={16} height={4} viewBox="0 0 16 4" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M1 3h2V1H1v2zm4 0h2V1H5v2zm4 0h2V1H9v2zm4-2v2h2V1h-2z" /></svg><span>Dotted</span></div></div>
                </div>
                <div className="kit-field width">
                    <div className="label kit-label " title="Width">
                        <div className="link"><i /><span>Width<span className="colon">:</span></span></div>
                    </div>
                    <div className="kit-unit-box kit-text-input"><input type="text" className="input" tabIndex={1} defaultValue placeholder="--" /><span className="unit">px</span><div className="right-control ticks"><div className="tick sprite-mid up"><i /></div><span className="sep" /><div className="tick sprite-mid down"><i /></div></div></div>
                </div>
                <div className="kit-field color">
                    <div className="label kit-label color" title="Color"><div className="link"><i /><span>Color<span className="colon">:</span></span></div></div>
                    <div className="kit-color-input kit-input-control color no-color">
                        <div className="preview">
                            <div color="true" tabIndex={0} style={{width: 22, height: 22, borderWidth: 0, outline: 0, cursor: 'default', userSelect: 'none', background: 'linear-gradient(rgb(94, 94, 94), rgb(94, 94, 94)), url("data:image/png', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', borderStyle: 'solid', borderColor: 'rgba(0, 0, 0, 0.8)', borderTopLeftRadius: 2, borderBottomLeftRadius: 2}}><svg width={9} height={14} viewBox="0 0 9 14" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)', color: 'rgb(166, 166, 166)'}}><path fill="currentColor" d="M1 9.532C1 11.447 2.563 13 4.49 13c1.926 0 3.492-1.553 3.492-3.468 0-.024-.004-.046-.004-.068 0-.023.004-.044.004-.065 0-.36-.09-.747-.09-.747-.495-2.002-3.41-7.634-3.41-7.634S1.93 6.04 1.145 8.402A3.47 3.47 0 0 0 1 9.398c0 .016.005.03.005.044a.905.905 0 0 0-.005.09z" /></svg></div></div>
                        <div className="kit-text-input"><input type="text" className="input" tabIndex={1} defaultValue placeholder="None" /></div></div></div>
            </div>

        )
    }
}
export default SideDetail;
