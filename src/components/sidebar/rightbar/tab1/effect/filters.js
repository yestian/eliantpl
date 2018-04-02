import React,{Component} from "react";

class Filters extends Component{
    render(){
        return(
            <div><div className="guidance-panel-wrapper"><div className="guidance-panel-child"><div className="kit-field filter"><div className="button-group"><div className="kit-button add-part add-filter-part"><i /></div></div><div className="label kit-label " title="Filters"><div className="link"><i /><span>Filters<span className="colon">:</span></span></div></div></div></div></div><div className="guidance-panel-wrapper"><div className="guidance-panel-child"><div className="kit-list-wrapper"><div className="kit-empty-list">None</div></div></div></div></div>

        )
    }
}
export default Filters;
