import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../../actions/right';

import LayoutTitle from './layoutTitle';
import LayoutBody from './layoutBody';

class Layout extends Component{
     render(){
         let {cssLayoutTitle}=this.props;
         let right=this.props.right.layout;
         return(
            <div className={`kit-section layout-section${right.openCssLayout?' open':''}${right.layoutAdvanced?' show-advanced':''}`}>
                <LayoutTitle onClick={cssLayoutTitle} data={right}/>
                <LayoutBody/>
            </div>
        )
    }
}
export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(Layout);
