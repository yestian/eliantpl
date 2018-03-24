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
         let extend=this.props.ico.ico_event.addSub6Expand;//是否展开模块
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
                 <div style={data.s3}  onClick={()=>{this.props.addSubpageToggle('ADD_SUB6_TOGGLE')}}>
                     <div style={data.s5}>{extend?data.arrowD:data.arrowR}</div>
                     <div style={data.s4}>组件</div>
                 </div>
                 {/* 展开和收起，收起的时候去掉下面 */}
                 {extend?
                     (<div columncount={3} style={data.s6}>
                         {/* 所有的鼠标事件都绑定在data里面 */}
                         <div data-item-id={25} flexbasis={flex} style={s1}
                            onMouseEnter={(e)=>{itemMouseEnter(e)}}
                            onMouseLeave={itemMouseLeave}
                            onMouseUp={(e)=>{itemMouseUp(e)}}>
                            <Ele id={25} data={this.props} showHover={1}/>
                        </div>
                        <div data-item-id={26} flexbasis={flex} style={s1}
                            onMouseEnter={(e)=>{itemMouseEnter(e)}}
                            onMouseLeave={itemMouseLeave}
                            onMouseUp={(e)=>{itemMouseUp(e)}}>
                            <Ele id={26} data={this.props} showHover={1}/>
                        </div><div data-item-id={27} flexbasis={flex} style={s1}
                            onMouseEnter={(e)=>{itemMouseEnter(e)}}
                            onMouseLeave={itemMouseLeave}
                            onMouseUp={(e)=>{itemMouseUp(e)}}>
                            <Ele id={27} data={this.props} showHover={1}/>
                        </div><div data-item-id={28} flexbasis={flex} style={s1}
                            onMouseEnter={(e)=>{itemMouseEnter(e)}}
                            onMouseLeave={itemMouseLeave}
                            onMouseUp={(e)=>{itemMouseUp(e)}}>
                            <Ele id={28} data={this.props} showHover={1}/>
                        </div><div data-item-id={29} flexbasis={flex} style={s1}
                            onMouseEnter={(e)=>{itemMouseEnter(e)}}
                            onMouseLeave={itemMouseLeave}
                            onMouseUp={(e)=>{itemMouseUp(e)}}>
                            <Ele id={29} data={this.props} showHover={1}/>
                        </div><div data-item-id={30} flexbasis={flex} style={s1}
                            onMouseEnter={(e)=>{itemMouseEnter(e)}}
                            onMouseLeave={itemMouseLeave}
                            onMouseUp={(e)=>{itemMouseUp(e)}}>
                            <Ele id={30} data={this.props} showHover={1}/>
                        </div><div data-item-id={31} flexbasis={flex} style={s1}
                            onMouseEnter={(e)=>{itemMouseEnter(e)}}
                            onMouseLeave={itemMouseLeave}
                            onMouseUp={(e)=>{itemMouseUp(e)}}>
                            <Ele id={31} data={this.props} showHover={1}/>
                        </div><div data-item-id={32} flexbasis={flex} style={s1}
                            onMouseEnter={(e)=>{itemMouseEnter(e)}}
                            onMouseLeave={itemMouseLeave}
                            onMouseUp={(e)=>{itemMouseUp(e)}}>
                            <Ele id={32} data={this.props} showHover={1}/>
                        </div><div data-item-id={33} flexbasis={flex} style={s1}
                            onMouseEnter={(e)=>{itemMouseEnter(e)}}
                            onMouseLeave={itemMouseLeave}
                            onMouseUp={(e)=>{itemMouseUp(e)}}>
                            <Ele id={33} data={this.props} showHover={1}/>
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
