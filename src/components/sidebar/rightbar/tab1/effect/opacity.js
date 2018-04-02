import React,{Component} from "react";

class Opacity extends Component{
    render(){
        return(
            <div className="guidance-panel-wrapper active"><div className="guidance-panel-child"><div className="kit-field opacity"><div className="label kit-label opacity" title="Opacity"><div className="link"><i /><span>Opacity<span className="colon">:</span></span></div></div><div className="kit-unit-slider kit-input-control"><div className="track" /><span className="nubbin" tabIndex={0} style={{left: '100%'}} /></div><div className="kit-unit-box kit-text-input"><input type="text" className="input" tabIndex={1} defaultValue placeholder={100} /><span className="unit">%</span><div className="right-control ticks"><div className="tick sprite-mid up"><i /></div><span className="sep" /><div className="tick sprite-mid down"><i /></div></div></div></div></div></div>

        )
    }
}
export default Opacity;
