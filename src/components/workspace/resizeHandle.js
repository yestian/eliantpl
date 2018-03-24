import React,{Component} from 'react';
import $ from 'jquery';
import draggable from 'jquery-ui/ui/widgets/draggable';

class ResizeHandle extends Component{
    componentDidUpdate(){
        let data=this.props.data;
        $('.left-handle,.right-handle').draggable({
            axis:'x',
            revert:true,
            revertDuration: 1,
            start:data.siteStart,
            drag:data.siteDrag,
            stop:data.siteStop
        });
        $('.wf-resizing-overlay').mouseup(function(){
            data.siteMouseUp();
            //清除helper上的left值
            let timer=setTimeout(function(){
                $('.right-handle').css('left','');
                clearTimeout(timer);
            },100);
        });
    }

     render(){
         let prop=this.props.data.ico.ico_event;
         let evt=this.props.data;
         let media=prop.media.mediaWidth;
         return(
            <div className={`canvas-resize-handle ${prop.workDragActive?'wf-resize wf-canvas-resize':''}`}>
                <div className="handle right-handle" style={{right: '-24px'}} onMouseDown={(e)=>{evt.siteMouseDown(e,media)}}>
                    <div className="tab-handle"></div>
                </div>
                <div className="handle left-handle" onMouseDown={(e)=>{evt.siteMouseDown(e,media)}} onDrag={draggable}></div>
            </div>
        )
    }
}
export default ResizeHandle;
