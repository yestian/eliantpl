import React,{Component} from "react";

class FontWeight extends Component{
    render(){
        return(
            <div className="kit-field kit-field font-weight compact pull-left">
                <div className="label kit-label ">
                    <div className="link">
                        <svg width={26} height={15} viewBox="0 0 26 15" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".6" fill="currentColor" d="M4.6 9.9H9l.2.5.6-1.7-2.4-6.6H6.2L2.4 13H1.2v1h3.6v-1H3.5l1.1-3.1zm2-5.8c.1-.2.1-.4.1-.5v-.2.2c0 .1.1.3.1.5l1.7 4.8H4.9l1.7-4.8z" /><path opacity=".8" fill="currentColor" d="M14.6 13.9h.8l1.2-3.7-2.8-8.1H12L8.4 12.6H7.3v1.3h3.9v-1.3H10l.9-2.6h4l.9 2.6h-1.2v1.3zm-3.3-5.3l1.4-4.1c.1-.5.2-.9.2-.9s0 .4.2.9l1.4 4.1h-3.2z" /><path fill="currentColor" d="M13.5 12.4h1L18 2.1h2.4l3.4 10.3h1V14h-4.3v-1.6h1.1l-.6-2.3h-3.6l-.7 2.2h1.1V14h-4.3v-1.6zm7-4L19.4 5l-.2-.7V4v.3c-.2.2-.2.4-.3.7l-1.1 3.4h2.7z" /></svg>
                    </div>
                </div>
                <div className="kit-select2 kit-input-control" tabIndex={-1}>
                    <div className="select2-container native-select select2-container-active">
                        <a className="select2-choice" data-automation-id="dyn-bind-select"><span>400 - Normal</span><div><svg width={9} height={6} viewBox="0 0 9 6" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M4.5 5L1 1h7z" /></svg></div></a>
                    </div>
                    <div className="select2-drop" hidden="true">
                        <ul className="select2-results" data-automation-id="dyn-bind-select-ul">
                            <li className="select2-result select2-result-selectable select2-results-dept-0" value={100}><div className="select2-result-label"><span className="unavailable">100 - Thin</span></div></li>
                        <li className="select2-result select2-result-selectable select2-results-dept-0" value={200}><div className="select2-result-label"><span className="unavailable">200 - Extra Light</span></div></li>
                        <li className="select2-result select2-result-selectable select2-results-dept-0" value={300}><div className="select2-result-label"><span className="unavailable">300 - Light</span></div></li>
                        <li className="select2-result select2-result-selectable select2-highlighted select2-results-dept-0" value={400}><div className="select2-result-label"><span>400 - Normal</span></div></li>
                        <li className="select2-result select2-result-selectable select2-results-dept-0" value={500}><div className="select2-result-label"><span className="unavailable">500 - Medium</span></div></li>
                        <li className="select2-result select2-result-selectable select2-results-dept-0" value={600}><div className="select2-result-label"><span className="unavailable">600 - Semi Bold</span></div></li>
                        <li className="select2-result select2-result-selectable select2-results-dept-0" value={700}><div className="select2-result-label"><span>700 - Bold</span></div></li>
                        <li className="select2-result select2-result-selectable select2-results-dept-0" value={800}><div className="select2-result-label"><span className="unavailable">800 - Extra Bold</span></div></li>
                        <li className="select2-result select2-result-selectable select2-results-dept-0" value={900}><div className="select2-result-label"><span className="unavailable">900 - Black</span></div></li>
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default FontWeight;
