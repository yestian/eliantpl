import React,{Component} from "react";

class TextDirection extends Component{
    render(){
        return(
            <div className="kit-field text-direction compact pull-right"><div className="label kit-label " title="Direction"><div className="link"><svg width={15} height={15} viewBox="0 0 15 15" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M4 2h1v3H4zM2 2h2V1H1v5h3V5H2zm4 0h1v3H6v1h3V5H8V2h1V1H6zm7 3h1v1h-1zm-2-1V2h2V1h-3v5h1V5h2V4zm2-2h1v2h-1zM4 14v-3l-3 1.5zm0-2h6v1H4zm10-2.5L11 8v1H5v1h6v1z" fill="currentColor" /></svg><span>Direction<span className="colon">:</span></span></div></div><div className="kit-radio-buttons kit-input-control clearfix"><div className="kit-button kit-radio-button active ltr" label="Left-to-Right"><svg width={15} height={14} viewBox="0 0 15 14" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M4 5H2V1H1v5h3zm2 1h1V2h1V1H5v1h1zm6-4h1v2h-1zm0 3h1v1h-1zm-2 0h2V4h-2V2h2V1H9v5h1zM1 8h9v1H1zm0 2h13v1H1zm0 2h11v1H1z" fill="currentColor" /></svg><span>Left-to-Right</span></div><div className="kit-button kit-radio-button rtl" label="Right-to-Left"><svg width={15} height={14} viewBox="0 0 15 14" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M5 8h9v1H5zm-4 2h13v1H1zm2 2h11v1H3zm2-7h1v1H5zM3 5h2V4H3V2h2V1H2v5h1zm2-3h1v2H5zm3 4h1V2h1V1H7v1h1zm4-1V1h-1v5h3V5z" fill="currentColor" /></svg><span>Right-to-Left</span></div></div></div>

        )
    }
}
export default TextDirection;
