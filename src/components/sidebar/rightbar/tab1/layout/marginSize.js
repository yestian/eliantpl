import React,{Component} from "react";
import $ from 'jquery';
import ABC from "../../../../../common/func.js";
class MarginSize extends Component{
    render(){
        let index=this.props.data.index;
        let sid=index.sid;
        let node=$("#site-iframe-next").contents().find("[data-id="+index.sid+"]");
        let s={
            marginTop:parseFloat(node.css('marginTop')),
            marginRight:parseFloat(node.css('marginRight')),
            marginBottom:parseFloat(node.css('marginBottom')),
            marginLeft:parseFloat(node.css('marginLeft')),
        }
        let mt=ABC.thisCls(index.siteData.data[sid],'margin-top');
        let mr=ABC.thisCls(index.siteData.data[sid],'margin-right');
        let mb=ABC.thisCls(index.siteData.data[sid],'margin-bottom');
        let ml=ABC.thisCls(index.siteData.data[sid],'margin-left');
        console.log(mt);
        // ${mt?(mt===1?' local':' upstream'):''}
        return(
            <React.Fragment>
                <div className="label-wrap top" title="上边距"><div className="label top"><span className={`inner editable top${mt?(mt===1?' local':' upstream'):''}`}>{s.marginTop}</span></div></div>
                <div className="label-wrap right" title="右边距"><div className="label right vert"><span className={`inner editable right${mr?(mr===1?' local':' upstream'):''}`}>{s.marginRight}</span></div></div>
                <div className="label-wrap bottom" title="下边距"><div className="label bottom"><span className={`inner editable bottom${mb?(mb===1?' local':' upstream'):''}`}>{s.marginBottom}</span></div></div>
                <div className="label-wrap left" title="左边距"><div className="label left vert"><span className={`inner editable left${ml?(ml===1?' local':' upstream'):''}`}>{s.marginLeft}</span></div></div>
            </React.Fragment>
        )
    }
}
export default MarginSize;
