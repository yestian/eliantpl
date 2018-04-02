import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../../actions/right';

import Title from './title';
import Body from './body';

class Typography extends Component{
     render(){
         let {translateTitle}=this.props;
         let right=this.props.right.layout;
         return(
            <div className={`kit-section transitions-section${right.translateOpen?' open':''}${right.translateAdv?' show-advanced':''}`}>
                <Title onClick={translateTitle} data={right}/>
                <Body/>
            </div>
        )
    }
}
export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(Typography);
