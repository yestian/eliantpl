import React,{Component} from "react";

class PaddingSize extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="label-wrap top" title="Top Padding"><div className="label top"><span className="inner editable top">0</span></div></div>
                <div className="label-wrap right" title="Right Padding"><div className="label right vert"><span className="inner editable right">0</span></div></div>
                <div className="label-wrap bottom" title="Bottom Padding"><div className="label bottom"><span className="inner editable bottom">0</span></div></div>
                <div className="label-wrap left" title="Left Padding"><div className="label left vert"><span className="inner editable left">0</span></div></div>
            </React.Fragment>
        )
    }
}
export default PaddingSize;
