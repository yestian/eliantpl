import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsCreators from '../../../../actions/icoAction';
import $ from 'jquery';
/* eslint-disable */
import draggable from 'jquery-ui/ui/widgets/draggable';
import droppable from 'jquery-ui/ui/widgets/droppable';
import sortable from 'jquery-ui/ui/widgets/sortable';
/* eslint-disable */
import AddEleLayout from './addEleLayout';
import AddEleBasic from './addEleBasic';
import AddEleTypography from './addEleTypography';
import AddEleMedia from './addEleMedia';
import AddEleForms from './addEleForms';
import AddEleComponents from './addEleComponents';

class AddElements extends Component{
    componentDidMount(){
        //iframe plugin
        var nativePrepareOffsets = $.ui.ddmanager.prepareOffsets;
        //Overrided prepareOffsets method
        $.ui.ddmanager.prepareOffsets = function(t, event) {
            //Call parent method
            nativePrepareOffsets.apply(this, arguments);
            var m = $.ui.ddmanager.droppables[t.options.scope] || [];
            for (var i = 0; i < m.length; i++) {
                //Iframe fixes
                var doc = m[i].document[0];
                if (doc !== document) {
                    var iframe = $((doc.defaultView || doc.parentWindow).frameElement);
                    var iframeOffset = iframe.offset();
                    var el = m[i].element;

                    //Check our droppable element is in the viewport of out iframe
                    var viewport = {
                        top: iframe.contents().scrollTop(),
                        left: iframe.contents().scrollLeft()
                    };
                    viewport.right = viewport.left + iframe.width();
                    viewport.bottom = viewport.top + iframe.height();

                    var bounds = el.offset();
                    bounds.right = bounds.left + el.outerWidth();
                    bounds.bottom = bounds.top + el.outerHeight();
                    if (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom)) {
                        //In view port
                        var ytop = bounds.top - iframe.contents().scrollTop();
                        ytop = ytop < 0 ? 0 : ytop;
                        var xtop = bounds.left - iframe.contents().scrollLeft();
                        xtop = xtop < 0 ? 0 : xtop;
                        var ybottom = bounds.top + el.height() - iframe.contents().scrollTop();
                        ybottom = ybottom > iframe.height() ? iframe.height() : ybottom;
                        var xbottom = bounds.left + el.width() - iframe.contents().scrollLeft();
                        xbottom = xbottom > iframe.width() ? iframe.width() : xbottom;
                        m[i].offset.top = iframeOffset.top + ytop;
                        m[i].offset.left = iframeOffset.left + xtop;
                        m[i].proportions({
                            width: xbottom - xtop,
                            height: ybottom - ytop,
                        });

                    } else {
                        //Out of view port - skip
                        m[i].proportions().height = 0;
                        continue;
                    }

                }

            }
        };

        $.ui.plugin.add("draggable", "iframeScroll", {
            drag: function(event, ui, i) {

                var o = i.options;
                var selector = o.iframeFix === true ? "iframe" : o.iframeFix;

                //check if mouse in scroll zone
                i.document.find(selector).each(function() {

                    var scrolled = false;
                    var iframeDocument;
                    var iframe = $(this);
                    var offset = iframe.offset();
                    offset.width = iframe.width();
                    offset.height = iframe.height();
                    //Check scroll top
                    if (offset.left < event.pageX && event.pageX < offset.left + offset.width) {
                        if (offset.top < event.pageY && event.pageY < offset.top + o.scrollSensitivity) {
                            iframeDocument = iframe.contents();
                            scrolled = iframeDocument.scrollTop(iframeDocument.scrollTop() - o.scrollSpeed);
                        }
                    }
                    //Check scroll down
                    if (offset.left < event.pageX && event.pageX < offset.left + offset.width) {
                        if ((offset.top + offset.height - o.scrollSensitivity) < event.pageY && event.pageY < offset.top + offset.height) {
                            iframeDocument = iframe.contents();
                            scrolled = iframeDocument.scrollTop(iframeDocument.scrollTop() + o.scrollSpeed);
                        }
                    }
                    //Check scroll left
                    if (offset.left < event.pageX && event.pageX < offset.left + o.scrollSensitivity) {
                        if (offset.top < event.pageY && event.pageY < offset.top + offset.height) {
                            iframeDocument = iframe.contents();
                            scrolled = iframeDocument.scrollLeft(iframeDocument.scrollLeft() - o.scrollSpeed);
                        }
                    }
                    //Check scroll right
                    if ((offset.left + offset.width - o.scrollSensitivity) < event.pageX && event.pageX < offset.left + offset.width) {
                        if (offset.top < event.pageY && event.pageY < offset.top + offset.height) {
                            iframeDocument = iframe.contents();
                            scrolled = iframeDocument.scrollLeft(iframeDocument.scrollLeft() + o.scrollSpeed);
                        }
                    }

                    if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                        $.ui.ddmanager.prepareOffsets(i, event);
                    }

                    clearTimeout(i.scrollTimer);
                    if (i._mouseStarted) {
                        i.scrollTimer = setTimeout(function() {
                            //call drag trigger
                            i._trigger("drag", event);
                            //update offsets
                            if ($.ui.ddmanager) {
                                $.ui.ddmanager.drag(i, event);
                            }
                        }, 10);
                    }
                });
            },
            stop: function(event, ui, i) {
                clearInterval(i.scrollTimer);
            }
        });
        //--------------end plugin-------------//
        let ifm=$('#site-iframe-next').contents();
        ifm.find('*[data-w-id]').droppable({
            hoverClass: "ui-droppable-hover",
            activeClass: "ui-droppable-active",
            addClasses: false,
            greedy: true,
            tolerance: "pointer",
            over:this.props.itemDropOver,
            drop:this.props.itemDropStop,
        });
        $("div[data-item-id]").draggable({
            scroll: true,
            iframeScroll:true,
            scrollSensitivity:20,
            iframeFix: true,
            opacity: 0.85,
            cursorAt:{left:-5,top:-5},
            helper:function(){return $('.wf-drag-helper')},
            revert: "invalid",
            start:this.props.itemDragStart,
            stop:this.props.itemDragStop,
        });
        // $('div[data-item-id]').draggable({
        //     cursorAt:{left:0,top:0},
        //     iframeFix: true,
        //     helper:this.dragHelper,
        //     start:this.props.itemDragStart,
        //     drag:this.props.itemDrag,
        //     stop:this.props.itemDragStop,
        // }).sortable({
        //     appendTo:window.frames['workframe'].document.body,
        //     handle: ".portlet-header",
        //      cancel: ".portlet-toggle",
        //      placeholder: "portlet-placeholder ui-corner-all",
        //     stop:function(e,ui){
        //         console.log(ui);
        //     }
        // });
    }

     render(){
         let arrowD=<svg width={9} height={6} viewBox="0 0 9 6" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M4.5 5L1 1h7z" /></svg>;
         let arrowR=<svg width="6" height="9" viewBox="0 0 6 9" className="bem-Svg " style={{display: 'block',transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M5 4.5L1 8V1z"></path></svg>;
         let s2={display: 'flex', flexDirection: 'column', flex: '0 1 auto'};
         let s3={outline: 0, cursor: 'default', userSelect: 'none', background: 'rgb(43, 43, 43)', borderTop: '1px solid rgb(33, 33, 33)', borderBottom: '1px solid rgb(33, 33, 33)', height: 28, paddingTop: 8, paddingBottom: 8, boxSizing: 'border-box', display: 'flex', alignItems: 'center', flex: '0 1 auto'};
         let s4={width: 'calc(100% - 12px)', color: 'rgb(217, 217, 217)', fontSize: '12px', fontFamily: '-apple-system, BlinkMacSystemFont, proxima-nova, Roboto, Arial, sans-serif, Georgia, serif', lineHeight: '16px', fontWeight: 600}
         let s5={display: 'flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '20px'}
         let s6={display: 'flex', flexWrap: 'wrap'}
        // let {addSubpageToggle,addSubMouseEnter,addSubMark,dragItemDown}=this.props;
         let newdata={
             arrowD:arrowD,
             arrowR:arrowR,
             s2:s2,
             s3:s3,
             s4:s4,
             s5:s5,
             s6:s6,
         }
         return(
             <div>
                <AddEleLayout data={newdata}/>
                <AddEleBasic data={newdata}/>
                <AddEleTypography data={newdata}/>
                <AddEleMedia data={newdata}/>
                <AddEleForms data={newdata}/>
                <AddEleComponents data={newdata}/>
            </div>
        )
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(AddElements);
