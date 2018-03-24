import React,{Component} from 'react';
import $ from 'jquery';

const head=`<meta charset="utf-8"/>
    <title>设计</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" type="text/css" href="http://chuankukeji.com/normalize.css"/>
    <link rel="stylesheet" type="text/css" href="http://chuankukeji.com/designer.css"/>`;

class WorkIframe extends Component{
    componentDidMount(){
        let ifm= $('#site-iframe-next').contents();
        let body=`<div data-w-id="222"  data-type="4" class="w-section"><a data-w-id="33333"  data-type="3" class="w-button">Button Text</a><a href="#" data-w-id="4444"  data-type="3" class="w-button">Button Text</a></div><div data-w-id="7777"  data-type="2" class="w-section wf-empty">818</div><div data-w-id="7777"  data-type="2" class="w-section wf-empty">919</div>`;

        ifm.find('html').addClass('site-scrollbar allow-drag-cursor wf-design-mode').attr({lang:'zh-CN',spellcheck:'true','data-site':111111111111111,'data-page':111111111111111});//html
        ifm.find('head').append(head);//head
        ifm.find('body').attr({'data-w-id':12,'data-type':0}).append(body);//body
        //继续加载创建的所有节点，从服务器获取
    }
    //-----------------------------------------------------------------------------
    //拖拽发生时，改变内容
    componentDidUpdate(){
        let ifm= $('#site-iframe-next').contents();
        let data=this.props.data.ico.ico_event;
        //激活拖动
        if(data.dragMode){
            ifm.find('html').addClass('wf-drag-mode');
        }else{
            ifm.find('html').removeClass('wf-drag-mode');
        }

    }

     render(){
         let iframe={
             height: '203px',display: 'inline',minHeight: '100%',maxHeight: '100%',border: 0,position: 'relative',overflow: 'hidden',transformStyle: 'preserve-3d',pointerEvents: 'auto'
         }

         return(
             <div id="site-iframe-next-container">
                 <iframe id="site-iframe-next" title="workspaceIframe" name="workframe" style={{...iframe,...this.props.size,height:this.props.iframeH}}></iframe>
             </div>
        )
    }
}
export default WorkIframe;
