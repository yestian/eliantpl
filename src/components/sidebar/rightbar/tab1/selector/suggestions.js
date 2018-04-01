import React,{Component} from "react";

class Suggestions extends Component{
    render(){
        let right=this.props.data.right.layout;
        let {suggestionClick,suggestionHover}=this.props.data;
        let list=["右对齐","品牌链接","品牌文本","容器","按钮"];
         return(
             <ol className="suggestions">
                 <li className="heading">创建新的类</li>
                 <li className="placeholder">输入一个新的类</li>
                 <li className="heading">选择一个全局类</li>
                 <li className="placeholder additional-classes">输入搜索所有全局类</li>
                 {list.map((evt,i)=>{
                     return <li key={i} className={`suggestion clearfix global${right.suggestionIndex===i?' highlighted':''}`}
                        onClick={(e)=>{suggestionClick(e)}}
                        onMouseEnter={()=>{suggestionHover(i)}}
                        onMouseLeave={()=>{suggestionHover(0)}}>
                        <span className="button">{evt}</span>
                        {right.suggestionIndex===i?<span className="icon sprite-main"></span>:''}
                    </li>
                 })}
             </ol>
        )
    }
}
export default Suggestions;
