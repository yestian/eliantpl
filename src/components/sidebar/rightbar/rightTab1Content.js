import React, { Component } from 'react';
import Nodes from '../../../common/config/getNodeRelated.json';

import IsDummyTab1 from './tab1/isDummyTab1';
import IsSelectedInput from './tab1/selector/isSelectedInput';
import Affecting from './tab1/affecting';
import ResizeNode from './resizeNode';

class RightTab1Content extends Component{
     render(){
         let data=this.props.data;
         let index=data.index;

         let nodeTitle='没有选择';
         let nodeIco='n-div';
         if(index.sid){
             if(typeof index.siteData.data[index.sid]!=='undefined'){
                 let tid=index.siteData.data[index.sid].tid;
                 nodeTitle=Nodes[tid].name;
                 nodeIco=Nodes[tid].ico;
             }else{
                 nodeTitle=Nodes[0].name;
                 nodeIco=Nodes[0].ico;
             }
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
                 {index.sid?<ResizeNode data={data}/>:null}
             </div>
         )
    }
}
export default RightTab1Content;
