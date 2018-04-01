import React,{Component} from 'react';
import {connect} from 'react-redux';
import IsBindClass from './isBindClass';
import MiniInspector from './selector/miniInspector';

class SelectedInput extends Component{
     render(){
         let data=this.props.index.siteData.data;
         let prop={
             //选中元素是否有绑定的类
             //需要选中元素的中文名，
             //需要选中元素的类数量
         }
         data.map((evt,i)=>{//所有节点
             if(evt.selected){//选中的节点
                if(evt.classes instanceof Array){
                    let cs=evt.classes;
                    cs.map((evt2,i2)=>{
                        if(evt2.used===1){
                            prop.used=1;//有绑定的类
                            prop.nodeName=evt2.nodeName;
                        }
                    })
                }
             }

         });
         //如果点击了输入框，处于激活状态
         if(this.props.right.layout.needClass){
             return <MiniInspector/>;
         }else{
             return(
                 <div className="selector-widget clearfix">
                     <div className="css-selector">
                         <IsBindClass data={prop}/>
                     </div>
                 </div>
            )
         }
    }
}
export default connect(state=>state)(SelectedInput);
