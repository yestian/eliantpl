import React,{Component} from "react";
import MarginTop from './dragArrow/marginTop';
import MarginRight from './dragArrow/marginRight';
import MarginBottom from './dragArrow/marginBottom';
import MarginLeft from './dragArrow/marginLeft';

import PaddingTop from './dragArrow/paddingTop';
import PaddingRight from './dragArrow/paddingRight';
import PaddingBottom from './dragArrow/paddingBottom';
import PaddingLeft from './dragArrow/paddingLeft';
import $ from 'jquery';

class ResizeNode extends Component{
    render(){
        let data=this.props.data;
        //节点信息
        let node=$('#site-iframe-next').contents().find("[data-id="+data.index.sid+"]");
        let s={
            width:node.outerWidth(),
            height:node.outerHeight(),
            left:node.offset().left,
            top:node.offset().top,
            marginTop:parseFloat(node.css('marginTop'),10),
            marginBottom:parseFloat(node.css('marginBottom'),10),
            marginLeft:parseFloat(node.css('marginLeft'),10),
            marginRight:parseFloat(node.css('marginRight'),10),
            paddingTop:parseFloat(node.css('paddingTop'),10),
            paddingBottom:parseFloat(node.css('paddingBottom'),10),
            paddingLeft:parseFloat(node.css('paddingLeft'),10),
            paddingRight:parseFloat(node.css('paddingRight'),10),
            mediaWidth:data.ico.ico_event.media.mediaWidth
        }
        let type=parseInt(data.index.layoutDragType,10);
        if(type===11){
            return <MarginTop data={data} node={s}/>
        }else if(type===12){
            return <MarginRight data={data} node={s}/>
        }else if(type===13){
            return <MarginBottom data={data} node={s}/>
        }else if(type===14){
            return <MarginLeft data={data} node={s}/>
        }else if(type===21){
            return <PaddingTop data={data} node={s}/>
        }else if(type===22){
            return <PaddingRight data={data} node={s}/>
        }else if(type===23){
            return <PaddingBottom data={data} node={s}/>
        }else if(type===24){
            return <PaddingLeft data={data} node={s}/>
        }else{
            return <div className="hud-preload" style={{top: 76, left: '-1635px', width: 1624, height: 122}}>预加载</div>
        }
    }
}
export default ResizeNode;
