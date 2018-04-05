import React,{Component} from 'react';
import $ from 'jquery';
import {connect} from "react-redux";
import { bindActionCreators} from "redux";
import * as actionsCreators from "./actions/right";
import WorkSpace from './workspace.js';
import DesignerReact from './DesignerReact';

class App extends Component{
    render(){
        //没有模块可以操作的判断，放在app里面
        //判断眼睛状态，如果激活模式下
        let eyeStatus=this.props.ico.ico_event.eyeStatus;
        if(eyeStatus===true){
            $('html').removeClass('avoid-right-sidebar avoid-left-sidebar avoid-bottom-bar');
            //如果点击了内容区的drag操作，要显示标尺
            if(this.props.index.siteResizeActive){
                $('html').addClass('avoid-bottom-bar');
            }else{
                $('html').removeClass('avoid-bottom-bar');
            }
        }else{
            $('html').addClass('avoid-right-sidebar avoid-left-sidebar avoid-bottom-bar');
        }

        //是否激活进入drag状态
        if(this.props.index.siteResizeActive){
            $('body,.canvas-resize-handle').addClass('wf-resizing wf-canvas-resizing');
            if(!$('.wf-resizing-overlay').length){
                $('body').append('<div class="wf-resizing-overlay"></div>');
            }
        }else{
            $('body,.canvas-resize-handle').removeClass('wf-resizing wf-canvas-resizing');
            $('.wf-resizing-overlay').remove();
        }
        let layout=this.props.right.layout;
        let clikType=0;
        if(layout.nodeMarginActive){clikType=1}
        if(layout.nodePaddingActive){clikType=2}
        //是否发生了drag行为
        let isDrag=0;
        if(layout.layoutDragId===this.props.sid){isDrag=1}
        //点击的方位
        let nodePos=0;
        if(layout.nodePosition===1 || layout.nodePosition===3){nodePos='row'}
        if(layout.nodePosition===2 || layout.nodePosition===4){nodePos='col'}
        return (
            <React.Fragment>
                <WorkSpace/>
                <div id="debug-overlay"></div>
                <iframe id="responsive-images-iframe" src="empty.html" title="imgFrame" style={{width:'240px'}}></iframe>
                <div id="designer-app-react-mount">
                  <DesignerReact/>
                </div>
                <div id="preload-assets"></div>
                <div id="drag-ghost">
                    {layout.nodePosition?<div className={`drag-ghost ${nodePos}`} onMouseUp={()=>{this.props.nodeLayoutMouseUp(clikType,layout.nodePosition,isDrag)}}></div>:null}
                </div>
                <div id="debug-undo-stack" className="debug-panel">
                    <div className="column undo">
                        <div className="title">撤销
                            <div className="count">0</div>
                        </div>
                        <div className="stack"></div>
                    </div>
                    <div className="column redo">
                        <div className="title">重做
                            <div className="count">0</div>
                        </div>
                      <div className="stack"></div>
                    </div>
                </div>
                <div id="wf-eyedropper-button"></div>
            </React.Fragment>
        )
    }
}


$(document).ready(function(){
    var html=$('html');
    html.addClass('wf-doc wf-proximanova-n6-active wf-proximanova-n4-active wf-proximanova-n3-active wf-active avoid-right-sidebar avoid-left-sidebar avoid-top-bar avoid-bottom-bar');
    $('#preload-assets').append('<img src="./static/img/example-bg.png"/><img src="./static/img/image-placeholder.png"/><img src="./static/img/placeholder-thumb.png"/>');//预加载图片
});
//connect链接

export default connect(state=>state,dispatch=>bindActionCreators(actionsCreators,dispatch))(App);
