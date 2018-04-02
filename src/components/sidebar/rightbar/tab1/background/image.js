import React,{Component} from "react";

class Image extends Component{
    render(){
        return(
            <div className="kit-field image">
                <div className="kit-button add-part">
                    <svg width={16} height={13} viewBox="0 0 16 13" className="bem-Svg " style={{display: 'inline-block', transform: 'translate(0px, 0px)', position: 'relative', top: 5}}><path fill="currentColor" d="M14 2v9H2V2h12m.2-1H1.8c-.4 0-.8.4-.8.8v9.4c0 .4.4.8.8.8h12.4c.4 0 .8-.4.8-.8V1.8c0-.4-.4-.8-.8-.8z" /><path opacity=".4" fill="currentColor" d="M2 2h12v9H2V2z" /></svg>
                </div>
                <div className="kit-button add-part gradient">
                    <svg width={16} height={13} viewBox="0 0 16 13" className="bem-Svg " style={{display: 'inline-block', transform: 'translate(0px, 0px)', position: 'relative', top: 5}}><path fill="currentColor" d="M14 2v9H2V2h12m.2-1H1.8c-.4 0-.8.4-.8.8v9.4c0 .4.4.8.8.8h12.4c.4 0 .8-.4.8-.8V1.8c0-.4-.4-.8-.8-.8z" />
                    <lineargradient id="wf-svg-background-gradient-a" gradientUnits="userSpaceOnUse" x1={2} y1="6.5" x2={14} y2="6.5"><stop offset={0} stopColor="currentColor" stopOpacity=".8" /><stop offset={1} stopColor="currentColor" stopOpacity={0} /></lineargradient>
                    <path fill="url(#wf-svg-background-gradient-a)" d="M2 2h12v9H2z" /></svg>
                </div>
                <div className="kit-button add-part image">
                    <svg width={16} height={13} viewBox="0 0 16 13" className="bem-Svg " style={{display: 'inline-block', transform: 'translate(0px, 0px)', position: 'relative', top: 5}}><path fill="currentColor" d="M14.2 1H1.8c-.4 0-.8.4-.8.8v9.4c0 .4.4.8.8.8h12.4c.4 0 .8-.4.8-.8V1.8c0-.4-.4-.8-.8-.8zM3 4.5C3 3.7 3.7 3 4.5 3S6 3.7 6 4.5 5.3 6 4.5 6 3 5.3 3 4.5zM4 10l6-5 3 5H4z" /></svg>
                </div>
                <div className="label kit-label " title="Image & Gradient"><div className="link"><i /><span>Image &amp; Gradient<span className="colon">:</span></span></div></div>
            </div>

        )
    }
}
export default Image;
