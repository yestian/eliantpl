import React,{Component} from "react";

class Transform extends Component{
    render(){
        return(
            <div><div className="guidance-panel-wrapper active"><div className="guidance-panel-child"><div className="kit-field transform"><div className="button-group"><div className="kit-button add-part add-transform-part"><i /></div><div className="add-part kit-button preview transform-settings"><svg width={12} height={12} viewBox="0 0 12 12" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M11 6.625v-1.25l-1.67-.322a3.41 3.41 0 0 0-.306-.74l.954-1.408-.884-.883-1.41.953c-.23-.13-.477-.23-.737-.304L6.625 1h-1.25l-.322 1.67a3.47 3.47 0 0 0-.738.306l-1.41-.954-.883.884.954 1.408c-.13.232-.232.478-.306.74L1 5.374v1.25l1.67.322c.075.26.177.508.307.74L2.022 9.09l.886.885 1.406-.954c.23.13.48.23.74.308l.32 1.67h1.25l.323-1.67c.26-.075.508-.177.74-.306l1.407.953.884-.884-.954-1.407c.13-.232.232-.478.306-.738l1.67-.32zM6 7.988a1.987 1.987 0 1 1 0-3.975 1.987 1.987 0 0 1 0 3.975z" /></svg></div></div><div className="label kit-label " title="Transforms"><div className="link"><i /><span>Transforms<span className="colon">:</span></span></div></div></div></div></div><div className="guidance-panel-wrapper active"><div className="guidance-panel-child"><div className="kit-list-wrapper"><div className="kit-empty-list">None</div></div></div></div></div>

        )
    }
}
export default Transform;
