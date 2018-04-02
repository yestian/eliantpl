import React,{Component} from "react";

class SideIco extends Component{
    render(){
        return(
            <div className="shortcuts icon-buttons"><div className="kit-button top" title="Top"><svg width={13} height={13} viewBox="0 0 13 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><g fill="currentColor"><path opacity=".5" d="M1 4h11v8H1z" /><path d="M1 1h11v2H1z" /></g></svg></div><div className="kit-button left" title="Left"><svg width={13} height={13} viewBox="0 0 13 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><g fill="currentColor"><path opacity=".5" d="M4 1h8v11H4z" /><path d="M1 1h2v11H1z" /></g></svg></div><div className="kit-button all active" title="All Sides"><svg width={13} height={13} viewBox="0 0 13 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><g fill="currentColor"><path opacity=".5" d="M4 4h5v5H4z" /><path d="M10 1H1v11h11V1h-2zm0 9H3V3h7v7z" /></g></svg></div><div className="kit-button right" title="Right"><svg width={13} height={13} viewBox="0 0 13 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".5" fill="currentColor" d="M1 1h8v11H1z" /><path fill="currentColor" d="M10 1h2v10.998h-2z" /></svg></div><div className="kit-button bottom" title="Bottom"><svg width={13} height={13} viewBox="0 0 13 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".5" fill="currentColor" d="M1 1h11v8H1z" /><path fill="currentColor" d="M1.002 10H12v2H1.002z" /></svg></div></div>

        )
    }
}
export default SideIco;
