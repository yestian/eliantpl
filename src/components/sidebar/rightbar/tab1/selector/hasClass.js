import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../../actions/right';

import SelectorStateMenu from './selectorStateMenu';
import DragGhost from './dragGhost';
import SelectorStateName from './selectorStateName';

class BindedClass extends Component{
     render(){
         let {selectorState,selectorStateOpen}=this.props;//方法
         let right=this.props.right.layout;//右侧属性
         let index=this.props.index;//模板属性
         //设置节点input框中的名字
         let node=index.siteData.data[index.sid];//节点所有数据
         return(
             <div className="chunk main">
                 <a className={`pseudo-toggle${right.selectorState?' active':''}`} onClick={selectorStateOpen}><span>状态</span><span className="wf-menu-arrow" /></a>
                 {right.slectorStateOpen?<SelectorStateMenu onClick={selectorState} active={right.selectorState}/>:''}
                 {right.slectorStateOpen?<DragGhost onClick={selectorStateOpen}/>:''}

                 {right.selectorState?
                     // 激活状态的小对勾
                     <a className="quit-pseudos"><svg width={11} height={9} viewBox="0 0 11 9" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="none" stroke="currentColor" strokeWidth={2} strokeMiterlimit={10} d="M9 2L4.5 6.5 2 4" /></svg></a>
                     :''}
                 <div className="nest-label"><div className="label">选择的元素:</div></div>
                 <div className="inset clearfix editable" onClick={this.props.needClass}>
                     <div className="kit-button linked" style={{width: 26, boxSizing: 'border-box'}}><i className="sprite-main" /></div>
                     <div style={{display: 'flex', alignItems: 'center', width: '100%', flexWrap: 'wrap', padding: 1}}>
                         {/* 电脑图标 */}
                         <div style={{margin: 2, position: 'relative', maxWidth: 'calc(100% - 4px)', pointerEvents: 'auto'}}>
                             <div style={{cursor: 'inherit', userSelect: 'none', WebkitFontSmoothing: 'antialiased', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', minWidth: 0, maxWidth: '100%', paddingLeft: 0, paddingRight: 0, borderRadius: 2, height: 24, background: 'rgb(94, 94, 94)', color: 'rgba(255, 255, 255, 0.901961)', position: 'relative', fontSize: 11, textShadow: 'none', boxShadow: 'rgba(0, 0, 0, 0.14902) 0px 0px 0px 1px', overflow: 'hidden'}}>
                                 <span style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', opacity: 1, fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', outline: 'none'}}>
                                     <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 30}}>
                                         <svg width={23} height={16} viewBox="0 0 23 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M20 13V2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v11H1c0 1 1 2 3 2h15c2 0 3-1 3-2h-2zM4 2h15v11H4V2z" /><path opacity=".5" fill="currentColor" d="M5 3h13v9H5z" /><path opacity=".24" fill="currentColor" d="M4 2v11h15V2H4zm14 10H5V3h13v9z" /></svg>
                                     </div>
                                 </span>
                             </div>
                         </div>
                        {node.classes.map((evt,i)=>{
                            if(evt.used){
                                return <div key={i} style={{margin: 2, position: 'relative', maxWidth: 'calc(100% - 4px)', pointerEvents: 'auto'}}>
                                    <div color="#3b79c3" style={{cursor: 'text', userSelect: 'none', WebkitFontSmoothing: 'antialiased', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', minWidth: 26, maxWidth: '100%', paddingLeft: 6, paddingRight: 6, borderRadius: 2, height: 24, background: 'rgb(59, 121, 195)', color: 'rgba(255, 255, 255, 0.901961)', position: 'relative', fontSize: 11, textShadow: 'none', boxShadow: 'rgba(0, 0, 0, 0.14902) 0px 0px 0px 1px', overflow: 'hidden'}}>
                                        <span style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', opacity: 1, fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', outline: 'none'}}>
                                            {evt.nodeName}
                                        </span>
                                    </div>
                                </div>
                            }
                        })}
                        {right.selectorState?<SelectorStateName data={right.selectorState}/>:''}
                 </div>
                 </div>
             </div>

        )
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(BindedClass);
