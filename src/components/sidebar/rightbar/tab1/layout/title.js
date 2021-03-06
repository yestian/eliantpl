import React, { Component } from 'react';

class LayoutTitle extends Component{
     render(){
         let data=this.props.data;
         //选中的元素是body还是其他的节点
         return(
             <div className={`kit-section-title${data.sid===data.siteData.bodyId?' local':' upstream'}`}  onClick={this.props.onClick}>
                 <div className="tick sprite-main" />
                 <div className="label">布局</div>
                 <div className="cascade-indicator"><i className="sprite-main" /></div>
                 <div className="advanced" onClick={this.props.onClick}><i className="status sprite-main" /><i className="switch sprite-main" />高级</div>
             </div>
        )
    }
}
export default LayoutTitle;
