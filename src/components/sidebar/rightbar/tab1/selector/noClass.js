import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../../actions/right';

class UnbindClass extends Component{
     render(){
         return(
             <div className="chunk main">
                 <div className="nest-label">
                     <div className="label">选择的元素:</div>
                 </div>
                 <div className="inset clearfix editable need-class" onClick={this.props.needClass}>
                     <div className="kit-button linked" style={{width: 26, boxSizing: 'border-box'}}><i className="sprite-main" /></div>
                     <div className="dummy-state" data-automation-id="selector-widget">
                         <span className="no-element">无</span>
                         <span className="need-class">选择一个类</span>
                         {/* 如果选中的节点为body */}
                         {/* <span className="need-class">选择一个类或标签</span> */}
                         <span className="is-instance"><i className="sprite-main" />双击符号开始编辑</span>
                     </div>
                 </div>
             </div>
        )
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(UnbindClass);
