import React,{Component} from "react";
import BoxShadow from "./boxShadow";
import BoxShadowList from "./boxShadowList";
import TextShadow from "./textShadow";
import TextShadowList from "./textShadowList";

class Body extends Component{
    render(){
        return(
            <div className="kit-section-body">
                <div className="kit-panel">
                    <BoxShadow/>
                    <BoxShadowList/>
                    <div className="kit-divider not-typographic"></div>
                    <TextShadow/>
                    <TextShadowList/>
                </div>
            </div>
        )
    }
}
export default Body;
