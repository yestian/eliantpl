import React,{Component} from 'react';
import {connect} from 'react-redux';
import IsBindClass from './isBindClass';
import MiniInspector from './miniInspector';

class SelectedInput extends Component{
     render(){
         let index=this.props.index;
         let data=index.siteData.data;
         let hasClass=0;

             let thisNode=data[index.sid];
             if(thisNode.classes instanceof Array && thisNode.classes.length){
                 let cls=thisNode.classes;
                 for(let i=0;i<cls.length;i++){
                     if(cls[i].used){
                         hasClass=1;
                         break;
                     }
                 }
             }
         

         //如果点击了输入框，处于激活状态
         //点了输入框显示的内容完全不一样，一个selector-wigit，一个mini-inspector
         if(this.props.right.layout.needClass){
             return <MiniInspector/>;
         }else{
             return(
                 <div className="selector-widget clearfix">
                     <div className="css-selector">
                         <IsBindClass hasClass={hasClass}/>
                     </div>
                 </div>
            )
         }
    }
}
export default connect(state=>state)(SelectedInput);
