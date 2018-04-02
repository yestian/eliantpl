import React,{Component} from "react";
import Opacity from "./opacity";
import Filters from "./filters";
import Cursor from "./cursor";

class Body extends Component{
    render(){
        return(
            <div className="kit-section-body">
                <div className="kit-panel">
                    <Opacity/>
                    <div className="kit-divider"></div>
                    <Filters/>
                    <div className="kit-divider"></div>
                    <Cursor/>
                </div>
            </div>
        )
    }
}
export default Body;
