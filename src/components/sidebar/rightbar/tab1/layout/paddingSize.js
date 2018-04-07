import React,{Component} from "react";
import $ from 'jquery';
import ABC from "../../../../../common/func.js";

class PaddingSize extends Component{
    render(){
        let index=this.props.data.index;
        let sid=index.sid;
        let node=$("#site-iframe-next").contents().find("[data-id="+index.sid+"]");
        let s={
            paddingTop:parseFloat(node.css('paddingTop')),
            paddingRight:parseFloat(node.css('paddingRight')),
            paddingBottom:parseFloat(node.css('paddingBottom')),
            paddingLeft:parseFloat(node.css('paddingLeft')),
        }
        let mt=ABC.thisCls(index.siteData.data[sid],'padding-top');
        let mr=ABC.thisCls(index.siteData.data[sid],'padding-right');
        let mb=ABC.thisCls(index.siteData.data[sid],'padding-bottom');
        let ml=ABC.thisCls(index.siteData.data[sid],'padding-left');
        return(
            <React.Fragment>
                <div className="label-wrap top" title="上填充"><div className="label top"><span className={`inner editable top${mt?(mt===1?' local':' upstream'):''}`}>{s.paddingTop}</span></div></div>
                <div className="label-wrap right" title="右填充"><div className="label right vert"><span className={`inner editable right${mr?(mr===1?' local':' upstream'):''}`}>{s.paddingRight}</span></div></div>
                <div className="label-wrap bottom" title="下填充"><div className="label bottom"><span className={`inner editable bottom${mb?(mb===1?' local':' upstream'):''}`}>{s.paddingBottom}</span></div></div>
                <div className="label-wrap left" title="左填充"><div className="label left vert"><span className={`inner editable left${ml?(ml===1?' local':' upstream'):''}`}>{s.paddingLeft}</span></div></div>
            </React.Fragment>
        )
    }
}
export default PaddingSize;
