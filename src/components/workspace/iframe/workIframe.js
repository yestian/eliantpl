import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../actions/index';
import $ from 'jquery';
import Nodes from '../../../common/config/getNodeRelated.json';
import BodyDOMs from './bodyDOMs';

const head=`<meta charset="utf-8"/>
    <title>设计</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" type="text/css" href="http://chuankukeji.com/normalize.css"/>
    <link rel="stylesheet" type="text/css" href="http://chuankukeji.com/designer.css"/>`;

class WorkIframe extends Component{
    componentDidMount(){
        // 发送获取数据的请求
        this.props.loadSiteData();
    }
    //-----------------------------------------------------------------------------
    componentDidUpdate(){
        let ifm= $('#site-iframe-next').contents();
        let index=this.props.index;
        let datas=index.siteData;
        let {siteId,pageId,bodyId}=datas;
        ifm.find('html').addClass('site-scrollbar allow-drag-cursor wf-design-mode').attr({lang:'zh-CN',spellcheck:'true','data-site':siteId,'data-page':pageId});//html
        if(!ifm.find('head').children().length){
            ifm.find('head').append(head);//head
        }
        let body=ifm.find('body');
        body.attr({'data-id':bodyId,'data-type':0});
        document.getElementById('site-iframe-next').contentDocument.getElementsByTagName('body')[0].addEventListener('click',(e)=>{this.props.nodeClick(e,index.selectedId)});

        //------------节点无关内容--------
        let org=this.props.ico.ico_event;
        //激活拖动
        if(org.dragMode){
            ifm.find('html').addClass('wf-drag-mode');
        }else{
            ifm.find('html').removeClass('wf-drag-mode');
        }
    }

    render(){
        let index=this.props.index;
        let datas=index.siteData;
        let {nodeClick,nodeMouseEnter,nodeMouseLeave}=this.props;
         let iframe={
             height: '203px',display: 'inline',minHeight: '100%',maxHeight: '100%',border: 0,position: 'relative',overflow: 'hidden',transformStyle: 'preserve-3d',pointerEvents: 'auto'
         }
         if(typeof datas!=='undefined'){
             let data=datas.data;
             function digui(data,pid=0){
                 let arr=[];
                 /* eslint-disable */
                 data.map((evt,i)=>{
                     if(evt.pid===pid){
                         //递归，把下级节点数组，放入上级节点的第三个参数中
                         //如果下级节点不存在，在当前节点中放入对应的文本值
                         let sons=digui(data,evt.id);
                         let empty='';
                         if(!sons.length){
                            sons=evt.txt;//第三个变量变为文本
                            //如果文本不存在
                            if(!evt.txt){
                                empty=" wf-empty";
                            }
                        }
                        //创建节点，并且把子节点拼装在一起
                         arr.push(
                             React.createElement(Nodes[evt.tid].tagName,
                             {
                                'data-id':evt.id,
                                'data-type':evt.tid,
                                key:Math.random(),
                                className:`${Nodes[evt.tid].className}${empty}`,
                                // onClick:(e)=>nodeClick(e,index.selectedId),
                                onMouseEnter:(e)=>nodeMouseEnter(e,index.selectedId),
                                onMouseLeave:(e)=>nodeMouseLeave(e,index.selectedId),
                             },
                             sons));
                     }
                 });
                 /* eslint-disable */
                 return arr;
             }
             return(
                 <div id="site-iframe-next-container">
                     <iframe id="site-iframe-next" title="workspaceIframe" name="workframe" style={{...iframe,...this.props.size,height:this.props.iframeH}}></iframe>
                     <BodyDOMs>{digui(data)}</BodyDOMs>
                 </div>
            )
        }else{
            return (<div id="site-iframe-next-container">
                <iframe id="site-iframe-next" title="workspaceIframe" name="workframe" style={{...iframe,...this.props.size,height:this.props.iframeH}}></iframe>
            </div>);
        }

    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(WorkIframe);
