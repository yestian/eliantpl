import React, { Component } from 'react';
import Ele from './ele';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../actions/icoAction';

class AddEleLayout extends Component{
    // 1.extend
    // 2.模块名称
    // 3.方法参数
     render(){
         let data=this.props.data;//公共样式变量
         let extend=this.props.ico.ico_event.addSub4Expand;//是否展开模块
         let s1={flexBasis: '33.3333%', overflow: 'hidden', boxSizing: 'border-box', borderRight: '1px solid rgb(51, 51, 51)', borderBottom: '1px solid rgb(51, 51, 51)'}
         let flex='33.33333333333333%';
         // 鼠标进入，移出
         // 鼠标点击
         // 鼠标按下
         // 鼠标弹起
         // 鼠标拖拽
         let {itemMouseEnter,itemMouseLeave,itemMouseUp}=this.props;
         return(
             <div style={{borderBottom: 0, marginBottom: extend?0:'-1px'}}>
                 <div style={data.s2}>
                 <div style={data.s3}  onClick={()=>{this.props.addSubpageToggle('ADD_SUB4_TOGGLE')}}>
                     <div style={data.s5}>{extend?data.arrowD:data.arrowR}</div>
                     <div style={data.s4}>媒体</div>
                 </div>
                 {/* 展开和收起，收起的时候去掉下面 */}
                 {extend?
                     (<div columncount={3} style={data.s6}>
                         {/* 所有的鼠标事件都绑定在data里面 */}
                         <div data-item-id={15} flexbasis={flex} style={s1}
                            onMouseEnter={(e)=>{itemMouseEnter(e)}}
                            onMouseLeave={itemMouseLeave}
                            onMouseUp={(e)=>{itemMouseUp(e)}}>
                            <Ele id={15} data={this.props} showHover={1}/>
                        </div>
                        <div data-item-id={16} flexbasis={flex} style={s1}
                            onMouseEnter={(e)=>{itemMouseEnter(e)}}
                            onMouseLeave={itemMouseLeave}
                            onMouseUp={(e)=>{itemMouseUp(e)}}>
                            <Ele id={16} data={this.props} showHover={1}/>
                        </div>
                     </div>)
                 :null}
                 </div>
             </div>
        )
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(AddEleLayout);
