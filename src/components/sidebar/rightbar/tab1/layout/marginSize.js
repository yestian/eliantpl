import React,{Component} from "react";
import $ from 'jquery';
import ABC from "../../../../../common/func.js";
class MarginSize extends Component{
    render(){
        let index=this.props.data.index;
        let data=index.siteData.data[index.sid];
        let node=$("#site-iframe-next").contents().find("[data-id="+index.sid+"]");
        let s={
            marginTop:parseFloat(node.css('marginTop')),
            marginRight:parseFloat(node.css('marginRight')),
            marginBottom:parseFloat(node.css('marginBottom')),
            marginLeft:parseFloat(node.css('marginLeft')),
        }
        let mt=ABC.thisCls(data,'margin-top');
        if(mt.hasOwnProperty('b')){
            if(mt.b!=='auto'){
                mt.b=parseFloat(mt.b,10);
            }
        }
        let mr=ABC.thisCls(data,'margin-right');
        if(mr.hasOwnProperty('b')){
            if(mr.b!=='auto'){
                mr.b=parseFloat(mr.b,10);
            }
        }
        let mb=ABC.thisCls(data,'margin-bottom');
        if(mb.hasOwnProperty('b')){
            if(mb.b!=='auto'){
                mb.b=parseFloat(mb.b,10);
            }
        }
        let ml=ABC.thisCls(data,'margin-left');
        if(ml.hasOwnProperty('b')){
            if(ml.b!=='auto'){
                ml.b=parseFloat(ml.b,10);
            }
        }
        return(
            <React.Fragment>
                <div className="label-wrap top" title="上边距"><div className="label top"><span className={`inner editable top${mt.hasOwnProperty('a')?(mt.a===1?' local':' upstream'):''}`}>
                    {mt.hasOwnProperty('b')?mt.b:s.marginTop}
                </span></div></div>
                <div className="label-wrap right" title="右边距"><div className="label right vert"><span className={`inner editable right${mr.hasOwnProperty('a')?(mr.a===1?' local':' upstream'):''}`}>
                    {mr.hasOwnProperty('b')?mr.b:s.marginRight}
                </span></div></div>
                <div className="label-wrap bottom" title="下边距"><div className="label bottom"><span className={`inner editable bottom${mb.hasOwnProperty('a')?(mb.a===1?' local':' upstream'):''}`}>
                    {mb.hasOwnProperty('b')?mb.b:s.marginBottom}
                </span></div></div>
                <div className="label-wrap left" title="左边距"><div className="label left vert"><span className={`inner editable left${ml.hasOwnProperty('a')?(ml.a===1?' local':' upstream'):''}`}>
                    {ml.hasOwnProperty('b')?ml.b:s.marginLeft}
                </span></div></div>
            </React.Fragment>
        )
    }
}
export default MarginSize;
