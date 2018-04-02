import React,{Component} from "react";
import Translation from "./translation";
import Transform from "./transform";
import Perspective from "./perspective";
import ParentPerspective from "./parentPerspective";

class Body extends Component{
    render(){
        return(
            <div className="kit-section-body">
                <div className="kit-panel">
                    <Translation/>
                    <div className="kit-divider"></div>
                    <Transform/>
                    <div className="kit-divider"></div>
                    <Perspective/>
                    <ParentPerspective/>
                </div>
            </div>
        )
    }
}
export default Body;
