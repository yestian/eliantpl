import React, { Component } from 'react';
import {connect} from 'react-redux';

import IsDummyTab1 from './isDummyTab1';
import IsSelectedInput from './isSelectedInput';

class RightTab1Content extends Component{
     render(){
         let data=this.props.data,
         sameClassNum='无',
         title='没有选择';
         
         if(data.index.noded){
             sameClassNum=10000;
             title="有标题";
         }
         return (
            <div className="tab-pane">
                <div className="style-tab kit-sidebar-tab">
                    <div className="kit-sidebar-top-section">
                        <div className="selected-node-title">
                             <div className="type-icon-inset">
                                 <div className="el-icon n-div"></div>
                             </div>
                             <div className="label">{title}</div>
                        </div>
                        <div className="kit-divider top"></div>
                         {/* 根据是否选择了节点，变换不同的内容 */}
                        <IsSelectedInput data={data}/>
                         {/* 相同的目标元素个数 */}
                        <a className="target-toggle affecting"><i className="icon-main common-target"></i><span>{sameClassNum}</span></a>
                    </div>
                    <IsDummyTab1 data={data}/>
                 </div>
             </div>
         )
    }
}
export default connect(state=>state)(RightTab1Content);
