import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../actions/index';
import $ from 'jquery';
import Nodes from '../../../common/config/getNodeRelated.json';
import BodyDOMs from './bodyDOMs';
import BodyStyle from './bodyStyle';

class WorkIframe extends Component{
    componentDidMount(){
        this.props.loadSiteData();

        let {nodeClick,bodyMouseEnter,bodyMouseLeave}=this.props;
        let body=document.getElementById('site-iframe-next').contentDocument.getElementsByTagName('body')[0];
        body.addEventListener('click',(e)=>{nodeClick(e)});
        body.addEventListener('mouseenter',(e)=>{bodyMouseEnter(e)});
        body.addEventListener('mouseleave',(e)=>{bodyMouseLeave(e)});
    }
    componentDidUpdate(){
        let ifm= $('#site-iframe-next').contents();
        let datas=this.props.index.siteData;
        let {siteId,pageId,bodyId}=datas;
        ifm.find('html').addClass('site-scrollbar allow-drag-cursor wf-design-mode').attr({lang:'zh-CN',spellcheck:'true','data-site':siteId,'data-page':pageId});//html
        ifm.find('body').attr({'data-id':bodyId,'data-type':0});
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
        let iframe={
            height: '203px',display: 'inline',minHeight: '100%',maxHeight: '100%',border: 0,position: 'relative',overflow: 'hidden',transformStyle: 'preserve-3d',pointerEvents: 'auto'
        }
        let ifm= $('#site-iframe-next').contents();
        let index=this.props.index;
        let datas=index.siteData;
        let {nodeMouseEnter,nodeMouseLeave}=this.props;
         if(typeof datas!=='undefined'){
             let data=datas.data;
             //-------------获取节点树-----------------
             function digui(data,pid=0){
                 let arr=[];
                 /* eslint-disable */
                 data.map((evt,i)=>{
                     if(evt.pid===pid){
                         //递归，把下级节点数组，放入上级节点的第三个参数中
                         //如果下级节点不存在，在当前节点中放入对应的文本值
                         let sons=digui(data,evt.id);
                         //---------------获取class名称组合-------------
                         //------------获取类名----------------
                         let theClass='';
                         function digui_class(data,related=0){
                             if(data instanceof Array){
                                 data.map((evt,i)=>{
                                     if(evt.used===1){
                                         if(evt.related===related){//顶级类
                                             theClass+=' '+evt.className;//拼接类名，在html中使用
                                             digui_class(data,evt.className);//递归
                                         }
                                     }
                                 })
                             }
                         }
                         digui_class(evt.classes);//获取联合类

                         if(!sons.length){
                            sons=evt.txt;//第三个变量变为文本
                        }

                        //创建节点，并且把子节点拼装在一起
                         arr.push(
                             React.createElement(Nodes[evt.tid].tagName,
                             {
                                'data-id':evt.id,
                                'data-type':evt.tid,
                                key:Math.random(),
                                className:`${Nodes[evt.tid].className}${typeof evt.empty==='undefined'?' wf-empty':''}${theClass}`,
                                onMouseEnter:(e)=>{nodeMouseEnter(e,index.selectedId)},
                                onMouseLeave:(e)=>{nodeMouseLeave(e,index.selectedId)},
                             },
                             sons));
                     }
                 });
                 /* eslint-disable */
                 return arr;
             }
             //创建css递归，写入style样式表
             function styles(data,pid=0){
                 let allStyle=[];
                data.map((evt,i)=>{
                    let myClass='';
                    let myClassStyle='';
                     function digui_style(data,related=0){
                         if(data instanceof Array){
                             data.map((evt,i)=>{
                                 if(evt.used===1){
                                     if(evt.related===related){//顶级类
                                         myClass+='.'+evt.className;
                                         //.aa 使用aa的style   .aa .bb使用bb的style 字符串拼接.aa+evt.style
                                         let pureStyle=JSON.stringify(evt.style).replace(/,/g,';').replace(/"/g,'');
                                         myClassStyle+=`${myClass}${pureStyle}`;
                                         digui_style(data,evt.className);//递归
                                     }
                                 }
                             });
                              allStyle[i]=myClassStyle;
                         }
                     }

                    digui_style(evt.classes);//运行函数
                });
                return allStyle;
             }
             return(
                 <div id="site-iframe-next-container">
                     <iframe id="site-iframe-next" title="workspaceIframe" name="workframe" style={{...iframe,...this.props.size,height:this.props.iframeH}}></iframe>
                     <BodyDOMs>{digui(data)}</BodyDOMs>
                     <BodyStyle><meta charSet="utf-8"/>
                         <title>设计</title>
                         <meta name="viewport" content="width=device-width, initial-scale=1"/>
                         <link rel="stylesheet" type="text/css" href="http://chuankukeji.com/normalize.css"/>
                         <link rel="stylesheet" type="text/css" href="http://chuankukeji.com/designer.css"/>
                         <style type="text/css">{styles(data)}</style>
                     </BodyStyle>
                 </div>
            )
        }else{
            return (<div id="site-iframe-next-container">
                {/* //第一次加载供上面获取节点，然后就执行if里面的 */}
                {/* loading...界面 */}
                <iframe id="site-iframe-next" title="workspaceIframe" name="workframe" style={{...iframe,...this.props.size,height:this.props.iframeH}}></iframe>
            </div>);
        }

    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(WorkIframe);
