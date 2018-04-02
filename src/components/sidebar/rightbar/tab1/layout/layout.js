import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../../actions/right';

import Title from './title';
import Body from './body';

class Layout extends Component{
     render(){
         let {layoutTitle}=this.props;
         let right=this.props.right.layout;
         return(
            <div className={`kit-section layout-section${right.layoutOpen?' open':''}${right.layoutAdv?' show-advanced':''}`}>
                <Title onClick={layoutTitle} data={right}/>
                <Body/>
            </div>
        )
    }
}
export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(Layout);
