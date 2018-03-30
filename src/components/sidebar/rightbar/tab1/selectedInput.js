import React, { Component } from 'react';

class SelectedInput extends Component{
     render(){
         return(
             <div className="selector-widget clearfix">
                 <div className="css-selector">
                     <div className="chunk main">
                         <div className="nest-label">
                             <div className="label">选择的元素:</div>
                         </div>
                         <div className="inset clearfix editable need-class">
                             <div className="kit-button linked" style={{width: 26, boxSizing: 'border-box'}}><i className="sprite-main" /></div>
                             <div className="dummy-state" data-automation-id="selector-widget">
                                 <span className="no-element">无</span>
                                 <span className="need-class">选择一个类或标签</span>
                                 <span className="is-instance"><i className="sprite-main" />双击符号开始编辑</span>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        )
    }
}
export default SelectedInput;
