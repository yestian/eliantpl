import React, { Component } from 'react';
import Nodes from '../../../common/config/getNodeRelated.json';

import IsDummyTab1 from './tab1/isDummyTab1';
import IsSelectedInput from './tab1/selector/isSelectedInput';
import Affecting from './tab1/affecting';

class RightTab1Content extends Component{
     render(){
         let data=this.props.data;
         let index=data.index;

         let nodeTitle='没有选择';
         let nodeIco='n-div';
         if(typeof index.selectedId!=='undefined'){
             let thisId=Nodes[index.selectedId.thisid.typeId];
             nodeTitle=thisId.name;
             nodeIco=thisId.ico;
         }

         return (
            <div className="tab-pane">
                <div className="style-tab kit-sidebar-tab">
                    <div className="kit-sidebar-top-section">
                        <div className="selected-node-title">
                             <div className="type-icon-inset">
                                 <div className={`el-icon ${nodeIco}`}></div>
                             </div>
                             <div className="label">{nodeTitle}</div>
                        </div>
                        <div className="kit-divider top"></div>
                         {/* 根据是否选择了节点，变换不同的内容 */}
                        <IsSelectedInput data={data}/>
                         {/* 相同的目标元素个数 */}
                         <Affecting/>
                    </div>
                    <IsDummyTab1 data={data}/>
                 </div>
             </div>
         )
    }
}
export default RightTab1Content;
