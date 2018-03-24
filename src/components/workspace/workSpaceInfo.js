import React,{Component} from 'react';

class WorkSpaceInfo extends Component{
     render(){
         let data=this.props.data.ico.ico_event.media;
         let desc='';
         if(data.mediaType===1){
             desc='影响到所有分辨率';
         }else{
             desc=`影响到 ${data.mediaMax}px 及以下`;
         }
         return(
            <div style={{position: 'absolute',left: '-200px',top: '160px',width: '355px',pointerEvents: 'none',transform: 'rotate(-90deg) translateZ(0px)',fontSize: '12px',lineHeight: '12px',color: 'rgba(255, 255, 255, 0.9)',WebkitFontSmoothing: 'antialiased'}}>
                <div style={{float: 'left',margin: '1px 5px 0px 0px',padding: '3px 7px',borderRadius: '2px',backgroundColor: 'rgb(115, 115, 115)'}}>工作区描述</div>
                <div style={{float: 'left',margin: '5px 0px 0px 4px'}}>{desc}</div>
            </div>
        )
    }
}
export default WorkSpaceInfo;
