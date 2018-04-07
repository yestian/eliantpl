import React,{Component} from "react";
import $ from 'jquery';
import ABC from "../../../../../common/func.js";

class PaddingSize extends Component{
    render(){
        let index=this.props.data.index;
        let sid=index.sid;
        let data=index.siteData.data[sid];
        let node=$("#site-iframe-next").contents().find("[data-id="+index.sid+"]");
        let s={
            paddingTop:parseFloat(node.css('paddingTop')),
            paddingRight:parseFloat(node.css('paddingRight')),
            paddingBottom:parseFloat(node.css('paddingBottom')),
            paddingLeft:parseFloat(node.css('paddingLeft')),
        }
        let mt=ABC.thisCls(data,'padding-top');
        let mr=ABC.thisCls(data,'padding-right');
        let mb=ABC.thisCls(data,'padding-bottom');
        let ml=ABC.thisCls(data,'padding-left');
        return(
            <React.Fragment>
                <div className="label-wrap top" title="上填充"><div className="label top"><span className={`inner editable top${mt.hasOwnProperty('a')?(mt.a===1?' local':' upstream'):''}`}>
                    {mt.hasOwnProperty('b')?parseFloat(mt.b,10):s.paddingTop}
                </span></div></div>
                <div className="label-wrap right" title="右填充"><div className="label right vert"><span className={`inner editable right${mr.hasOwnProperty('a')?(mr.a===1?' local':' upstream'):''}`}>
                    {mr.hasOwnProperty('b')?parseFloat(mr.b,10):s.paddingRight}
                </span></div></div>
                <div className="label-wrap bottom" title="下填充"><div className="label bottom"><span className={`inner editable bottom${mb.hasOwnProperty('a')?(mb.a===1?' local':' upstream'):''}`}>
                    {mb.hasOwnProperty('b')?parseFloat(mb.b,10):s.paddingBottom}
                </span></div></div>
                <div className="label-wrap left" title="左填充"><div className="label left vert"><span className={`inner editable left${ml.hasOwnProperty('a')?(ml.a===1?' local':' upstream'):''}`}>
                    {ml.hasOwnProperty('b')?parseFloat(ml.b,10):s.paddingLeft}
                </span></div></div>
            </React.Fragment>
        )
    }
}
export default PaddingSize;
