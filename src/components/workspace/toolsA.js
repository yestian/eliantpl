import React,{Component} from 'react';
import {connect} from 'react-redux';
import Grid from './grid';
import ItemDragStatus from './tools/itemDragStatus';
import OutlineDropParentNode from './tools/outlineDropParentNode';
import HoveredOutline from './tools/hoveredOutline';
import SelectedOutline from './tools/selectedOutline';
import OutlineHoveredParentLine from './tools/outlineHoveredParentLine';


class ToolsA extends Component{
     render(){
         let ico=this.props.ico.ico_event;
         let suit=[
              {typeid:0,name:'body',ico:'n-body',accept:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]},
              {typeid:1,name:'section',ico:'n-div',className:'wf-empty w-section',errMsg:'Section标签不能嵌套，选择div标签代替.',accept:[1,3,4]},
              {typeid:2,name:'section',ico:'n-div',className:'wf-empty w-section',errMsg:'Section标签不能嵌套，选择div标签代替.',accept:[2,3,4]},
             ];
         return(
             <div style={{height: '100%',width: '100%',position: 'absolute'}}>
                 <div style={{height: '100%',width: '100%',position: 'absolute',top: 0,left: 0}}>
                     <div><div></div></div>
                     <div id="w-rich-text-node-canvas"></div>
                     <div className="resize-hint" style={{transform: 'translate(10px, 10px)'}}>
                         <div className="main">
                             <div className="value text">0</div>
                             <div className="x text">x</div>
                             <div className="value text">0</div>
                         </div>
                         <div className="note text"></div>
                     </div>
                     {/* 可以放置时候的外边框线条 */}
                     <OutlineDropParentNode data={this.props} suit={suit}/>
                     {/* 鼠标放在哪个节点上 */}
                     <HoveredOutline data={this.props}/>
                     {/* 点击选中哪个节点 */}
                     <SelectedOutline/>
                     {/* 展开节点的辅助工具后，鼠标在哪个父级节点上，父级节点的黄色提示框 */}
                     <OutlineHoveredParentLine data={this.props.index}/>
                 </div>
                 {/* 不能放置元素的节点提示，以及放置成功的绿色线条 */}
                 <ItemDragStatus data={this.props} suit={suit}/>
                 {/* 左侧设置的背景网格,网格有2种模式 */}
                 <Grid ico={ico}/>
            </div>

        )
    }
}

export default connect((state)=>state)(ToolsA);
