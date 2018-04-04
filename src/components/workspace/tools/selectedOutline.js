import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../actions/index';
import Nodes from '../../../common/config/getNodeRelated';
import $ from 'jquery';

//根据点击的id获取结果（图标、名称、坐标、宽高、类型ID）
//选中节点图标/名称，上级节点图标/名称，上上级图标/名称
//选中节点尺寸，如果是布局类组件，获取媒体宽度+组件高度
//鼠标点击当前节点图标，弹出三级图标列表
//鼠标放在哪一级图标上，hover哪一级的样式

class SelectedOutline extends Component{
    componentDidUpdate(){
        let id=this.props.index.sid;
             let ifm=$('#site-iframe-next').contents();
             let node=ifm.find("[data-id="+id+"]");
             if(node.length){
                 //当前节点的坐标
                 let width=node.outerWidth();
                 let left=node.offset().left;
                 let top=node.offset().top;
                 let height=node.outerHeight();
                 $('#selectedNode').css({left:left,width:width,top:top,height:height});
             }
    }
     render(){
         let index=this.props.index;
         if(typeof index.siteData!=='undefined' && index.sid){
             let id=index.sid;
             let arr=[];
             let data=index.siteData.data;
             function setArr(id){
                 let tid=data[id].tid;
                arr.unshift({id:id,name:Nodes[tid].name,ico:Nodes[tid].ico});
                if(data[id].pid!==0){
                    id=data[id].pid;
                    setArr(data[id]);
                }
             }
             setArr(id);//执行函数
             return(
                <div id="selectedNode" className={
                    `bem-OutlineSelectedNode selected-outline wf-outline active${index.nodeHelperExpand?' expanded':''}${index.hangdown?' hang-down':''}${index.inside?' inside':''}`}>
                    <div className="breadcrumbs">
                        <div className="inner">
                            <div className="crumbs clearfix" title="点击查看更多">
                                {/* nodeHelperClick(),第一个参数数组长度，第二个参数当前索引，第三个参数当前节点的ID */}
                                {
                                    arr.map((evt,i)=>(
                                        <div className={`crumb${i===(arr.length-1)?' current':''}`}
                                            key={i}
                                            onClick={()=>{this.props.nodeHelperClick(arr.length,i,evt.id)}} onMouseEnter={()=>{this.props.nodeHelperMouseEnter(arr.length,i,evt.id)}} onMouseLeave={this.props.nodeHelperMouseLeave}
                                            >
                                            <div className="inner">
                                                <span className="icon"><i className={`el-icon ${evt.ico}`}></i></span><span className="label">{evt.name}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
         }else{
             return null;
         }

    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(SelectedOutline);
