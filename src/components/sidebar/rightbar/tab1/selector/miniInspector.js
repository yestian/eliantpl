import React,{Component} from "react";
import {connect} from "react-redux";
import { bindActionCreators} from "redux";
import * as actionsCreators from "../../../../../actions/right";
import Suggestions from './suggestions';
import $ from 'jquery';

class MiniInspector extends Component{
    componentDidMount(){
        $('.input').focus();
    }
     render(){
         return(
            <div className="mini-inspector clearfix">
                 <div className="label">选择的元素:</div>
                 <div className="classes inset css-selector focused" onClick={this.props.needClass}>
                     <div className="mf_container css-tokens" style={{paddingRight: 24}}>
                        <div style={{display: 'inline-flex', alignItems: 'center', width: '100%', flexWrap: 'wrap', padding: 1}}>
                             {/* 电脑图标 */}
                             <div style={{margin: 2, position: 'relative', maxWidth: 'calc(100% - 4px)', pointerEvents: 'auto'}}>
                                <div style={{cursor: 'inherit', userSelect: 'none', WebkitFontSmoothing: 'antialiased', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', minWidth: 0, maxWidth: '100%', paddingLeft: 0, paddingRight: 0, borderRadius: 2, height: 24, background: 'rgb(94, 94, 94)', color: 'rgba(255, 255, 255, 0.901961)', position: 'relative', fontSize: 11, textShadow: 'none', boxShadow: 'rgba(0, 0, 0, 0.14902) 0px 0px 0px 1px', overflow: 'hidden'}}><span style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', opacity: 1, fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', outline: 'none'}}><div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 30}}><svg width={23} height={16} viewBox="0 0 23 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M20 13V2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v11H1c0 1 1 2 3 2h15c2 0 3-1 3-2h-2zM4 2h15v11H4V2z" /><path opacity=".5" fill="currentColor" d="M5 3h13v9H5z" /><path opacity=".24" fill="currentColor" d="M4 2v11h15V2H4zm14 10H5V3h13v9z" /></svg></div></span></div>
                            </div>
                             {/* 已经选择的类 */}
                             <div style={{margin: 2, height: 24, display: 'flex', alignItems: 'center'}}>
                                 <div className="input mf_input mp_input base"
                                    data-automation-id="mini-inspector-input"
                                    value
                                    tabIndex={-1}
                                    contentEditable="true"
                                    style={{userSelect: 'text', minWidth: 10, outline: 'none', flexGrow: 1, padding: 2,boxShadow:'none'}}
                                />
                             </div>
                         </div>
                     </div>
                     <Suggestions data={this.props}/>
                 </div>
            </div>
        )
    }
}
export default connect(state=>state,dispatch=>bindActionCreators(actionsCreators,dispatch))(MiniInspector);
