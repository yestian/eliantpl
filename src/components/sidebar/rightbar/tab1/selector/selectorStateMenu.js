import React,{Component} from 'react';


class SelectorStateMenu extends Component{
     render(){
         let onClick=this.props.onClick;
         let active=this.props.active;
         return(
             <div className="wf-menu round-style pseudo-class-menu wf-control visible">
                 <div className="tab"><div className="inner"><span className="wf-menu-arrow" /></div></div>
                 <div className="inner">
                     <a className={`pseudo none ${active===0?' active':''}`} style={{cursor:'default'}} onClick={(e)=>{onClick(e,0)}}><i className="radio" /><span>无</span></a>

                     <a className={`pseudo press ${active===1?' active':''}`} style={{cursor:'default'}} onClick={(e)=>{onClick(e,1)}}><i className="radio" /><span>鼠标悬浮</span><i className="status sprite-main" /></a>

                     <a className={`pseudo press ${active===2?' active':''}`} style={{cursor:'default'}} onClick={(e)=>{onClick(e,2)}}><i className="radio" /><span>键盘按下</span><i className="status sprite-main" /></a>

                     <a className={`pseudo focus ${active===3?' active':''}`} style={{cursor:'default'}} onClick={(e)=>{onClick(e,3)}}><i className="radio" /><span>光标聚焦</span><i className="status sprite-main" /></a>
                 </div>
             </div>

        )
    }
}
export default SelectorStateMenu;
