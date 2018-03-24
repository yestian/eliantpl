import React,{Component} from 'react';
import {connect} from 'react-redux';
import Ele from './leftsub/ele';

class LeftDragHelperClone extends Component{
     render(){
         let data=this.props.ico.ico_event;

         if(data.itemActive){
            let style={position: 'absolute',width: '81.3333px',left:data.itemDragX,top:data.itemDragY,willChange: 'transform'}
             return(
                 <div style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: data.dragMode?'2147483547':0, pointerEvents: 'none'}}>
                     <div className="wf-drag-helper" width="81.33333333333333" style={style}>
                         <Ele id={data.itemEnter} data={this.props} showHover={0}/>
                     </div>
                 </div>
            )
         }else{
             return null;
         }

    }
}

export default connect(state=>state)(LeftDragHelperClone);
