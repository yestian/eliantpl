import React,{Component} from 'react';

class SelectorStateName extends Component{
     render(){
         let data=this.props.data;
         let active='';
         if(data===1){active='鼠标悬浮'}
         if(data===2){active='键盘按下'}
         if(data===3){active='光标聚焦'}
         return(
             <div style={{margin: 2, position: 'relative', maxWidth: 'calc(100% - 4px)', pointerEvents: 'auto'}}>
                 <div color="#109155" style={{cursor: 'inherit', userSelect: 'none', WebkitFontSmoothing: 'antialiased', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box', minWidth: 0, maxWidth: '100%', paddingLeft: 6, paddingRight: 6, borderRadius: 2, height: 24, background: 'rgb(16, 145, 85)', color: 'rgba(255, 255, 255, 0.901961)', position: 'relative', fontSize: 11, textShadow: 'none', boxShadow: 'rgba(0, 0, 0, 0.14902) 0px 0px 0px 1px', overflow: 'hidden'}}>
                     <span style={{overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', opacity: 1, fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', outline: 'none'}}>{active}</span>
                 </div>
             </div>

        )
    }
}
export default SelectorStateName;
