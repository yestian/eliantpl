import React, { Component } from 'react';
import {connect} from 'react-redux';

import IsDummyTab2 from './isDummyTab2';

class RightTab2Content extends Component{
     render(){
         let data=this.props.index;
         let title='没有选择';
         if(data.node){
             title="有标题";
         }
         return (
             <div className="tab-pane">
                 <div className="settings-tab kit-sidebar-tab">
                    <div className="kit-sidebar-top-section">
                        <div className="selected-node-title">
                            <div className="type-icon-inset">
                                 <div className="el-icon n-div"></div>
                             </div>
                             <div className="label">{title}</div>
                        </div>
                    </div>
                     <IsDummyTab2/>
                 </div>
             </div>
         )
    }
}

export default connect(state=>state)(RightTab2Content);
