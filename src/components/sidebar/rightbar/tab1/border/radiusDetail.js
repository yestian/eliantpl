import React,{Component} from "react";

class RadiusDetail extends Component{
    render(){
        return(
            <div className="details clearfix"><div className="kit-field radius"><div className="label kit-label " title="Radius"><div className="link"><i /><span>Radius<span className="colon">:</span></span></div></div><div className="kit-unit-box kit-text-input"><input type="text" className="input" tabIndex={1} defaultValue placeholder="--" /><span className="unit">px</span><div className="right-control ticks"><div className="tick sprite-mid up"><i /></div><span className="sep" /><div className="tick sprite-mid down"><i /></div></div></div></div></div>

        )
    }
}
export default RadiusDetail;
