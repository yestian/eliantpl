import React,{Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import ToolsFlux from './components/workspace/toolsFlux';
import WorkIframe from './components/workspace/iframe/workIframe';
class WorkSpace extends Component{

     render(){
        let data=this.props.ico.ico_event;
        let media=data.media;
        let typeName=media.typeName;
        let size={};
        //--------------框架高度------------
        let topH=0,botH=0;
        if(data.topBarStatus){topH=35;}
        if(data.botBarStatus){botH=29;}
        let iframeH=$(window).height()-topH-botH;
        //-------------框架高度--------------
        if(data.eyeStatus && data.media.mediaType===1){
           size={
               width:$(window).width()-20,
               maxWidth:$(window).width()-20,
               minWidth:0
           }
       }else{
           let index=this.props.index;
           let N=0;
           let w=media.mediaWidth,Max=media.mediaMax,Min=media.mediaMin;
           if(index.siteDragX<0){
               N=w-index.siteDragX*2;
           }else if(index.siteDragX>0){
               N=w-index.siteDragX*2-10;
           }else{
               N=w;
           }
           if(N>=Max){N=Max}
           if(N<=Min){N=Min}
           size={
              width:N,
              maxWidth:Max,
              minWidth:Min
          }
       }

         return(
             <div id="workspace" className={`workspace loaded ${typeName}`}>
                 <div className="site-canvas" style={size} >
                     <ToolsFlux/>
                     <WorkIframe height={iframeH} size={size}/>
                 </div>
            </div>
        )
    }
}
export default connect((state)=>state)(WorkSpace);
