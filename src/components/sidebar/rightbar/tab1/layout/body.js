import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../../actions/right';

import GuidePanel from './guidePanel';
import MarginBox from './marginBox';
import Transition from './transition';

class LayoutBody extends Component{
     render(){
         let {displaySettingClick,layoutIcoMouseEnter,layoutIcoMouseLeave}=this.props;
         // let right=this.props.right;
         let index=this.props.index;

         
         let ids=index.siteData.data;
         let selectedData='';
         for(let i=0;i<ids.length;i++){
             if(ids[i].id===index.selectedId.thisid.id){
                 selectedData=ids[i];
                 break;
             }
         }
         return(
             <div className="kit-section-body">
                <GuidePanel
                     onClick={displaySettingClick}
                     onMouseEnter={layoutIcoMouseEnter}
                     onMouseLeave={layoutIcoMouseLeave}
                     display={selectedData.display}/>
                <MarginBox/>
                <div className="kit-divider after-margin"></div>
                <Transition/>
            </div>
        )
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(LayoutBody);