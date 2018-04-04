import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../actions/right';

class Affecting extends Component{
     render(){
         //同一个类名在这个页面上的个数
         let sum=0;

         return(
            <a className={`target-toggle affecting${this.props.right.layout.showSameTypeNodesLine?' visible':''}`} onClick={this.props.toggleSameTypeNodesLine}><i className="icon-main common-target"></i><span>{sum?sum+' 个在这个页面':'无'}</span></a>
        )
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(Affecting);
