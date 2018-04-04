import React,{Component} from "react";

class PaddingSize extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="label-wrap top" title="上填充"><div className="label top"><span className="inner editable top">0</span></div></div>
                <div className="label-wrap right" title="右填充"><div className="label right vert"><span className="inner editable right">0</span></div></div>
                <div className="label-wrap bottom" title="下填充"><div className="label bottom"><span className="inner editable bottom">0</span></div></div>
                <div className="label-wrap left" title="左填充"><div className="label left vert"><span className="inner editable left">0</span></div></div>
            </React.Fragment>
        )
    }
}
export default PaddingSize;
