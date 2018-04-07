import React,{Component} from "react";
import ABC from "../../../../../../common/func.js";

class Width extends Component{
    render(){
        let index=this.props.data;
        let node=index.siteData.data[index.sid];
        let res=ABC.thisCls(node,'width');
        if(res.hasOwnProperty('b')){
            if(res.b!=='auto'){
                res.b=parseFloat(res.b,10);
            }
        }
        return(
            <div className="pull-left">
                <div className="guidance-panel-wrapper">
                    <div className="guidance-panel-child">
                        <div className="kit-field">
                            <div className="label kit-label " title="Width">
                                <div className={`link${res.hasOwnProperty('a')?(res.a===1?' local':' upstream'):''}`}><i /><span>宽<span className="colon">:</span></span></div>
                            </div>
                            <div className="kit-unit-box kit-text-input">
                                <input type="text" className="input" tabIndex={1} placeholder="Auto"
                                    defaultValue={res.hasOwnProperty('b')?res.b:''}
                                    ref="width"
                                    onBlur={()=>{this.props.onBlur('width',this.refs.width.value)}}/>
                                <span className="unit">-</span>
                                <div className="right-control ticks">
                                    <div className="tick sprite-mid up"><i /></div>
                                    <span className="sep" />
                                    <div className="tick sprite-mid down"><i /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Width;
