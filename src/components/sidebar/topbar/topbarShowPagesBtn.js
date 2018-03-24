import React,{Component} from 'react';
class TopbarShowPages extends Component{
     render(){
         return(
             <div data-automation-id="pages-menu" className="bem-TopBar_Body_ContextLens" onClick={()=>this.props.onClick(!this.props.icoprops.leftBtns.showPages)}>
                 <div className="bem-TopBar_Body_ContextLens_Name">
                     <span className="bem-TopBar_Body_ContextLens_Name_Label ">页面列表: </span>
                     <span data-automation-id="top-bar-page-name" className="bem-TopBar_Body_ContextLens_Name_Value ">首页</span>
                 </div>
             </div>
        )
    }
}
export default TopbarShowPages;
