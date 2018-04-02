import React,{Component} from "react";

class Cursor extends Component{
    render(){
        return(
            <div className="guidance-panel-wrapper"><div className="guidance-panel-child"><div className="kit-field"><div className="label kit-label " title="Cursor"><div className="link"><i /><span>Cursor<span className="colon">:</span></span></div></div><div className="kit-cursor-input kit-input-control pull-right"><div className="preview"><div className="trigger"><div className="kit-button cursor-button sprite-main-after auto"><i className="sprite-main" /></div></div></div><div className="kit-text-input"><input type="text" className="input" defaultValue="auto" /></div></div></div></div></div>

        )
    }
}
export default Cursor;
