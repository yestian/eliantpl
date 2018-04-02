import React,{Component} from "react";
import Image from './image';
import List from './list';
import BgColor from './bgColor';

class Body extends Component{
    render(){
        return(
            <div className="kit-section-body">
                <div className="kit-panel">
                    <Image/>
                    <List/>
                    <div className="kit-divider"></div>
                    <BgColor/>
                </div>
            </div>
        )
    }
}
export default Body;
