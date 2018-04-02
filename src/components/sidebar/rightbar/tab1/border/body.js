import React,{Component} from "react";
import SideIco from "./sideIco";
import SideDetail from "./sideDetail";
import RadiusIco from "./radiusIco";
import RadiusDetail from "./radiusDetail";

class Body extends Component{
    render(){
        return(
            <div className="kit-section-body">
                <div className="kit-panel">
                    <div className="border-editor border-side-editor clearfix">
                        <SideIco/>
                        <SideDetail/>
                    </div>
                    <div className="kit-divider"></div>
                    <div className="border-editor border-radius-editor clearfix">
                        <RadiusIco/>
                        <RadiusDetail/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Body;
