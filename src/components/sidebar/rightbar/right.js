import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsCreators from '../../../actions/icoAction';

import RightTabs from './rightTabs';
import RightInner from './rightInner';

class RightBar extends Component{
    render() {
        let {icoMouseEnter,toggleRightTabs,icoMouseLeave}=this.props;
        let data=this.props.ico;
        //编辑模式下才显示右侧的内容
        if(!data.ico_event.eyeStatus){
            return (
                <div id="right-sidebar" className="right-sidebar">
                    <RightTabs  onClick={toggleRightTabs} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} data={data}/>
                    <div className="inner">
                        <RightInner data={data}/>
                    </div>
                </div>
            )
        }else{
            return '';
        }

    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(RightBar);
