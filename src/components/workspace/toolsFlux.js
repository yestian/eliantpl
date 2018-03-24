import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../actions/index';

import ToolsA from './toolsA';
import ToolsB from './toolsB';
import ResizeHandle from './resizeHandle';
import WorkspaceInfo from './workSpaceInfo';

class ToolsFlux extends Component{
     render(){
         let data=this.props;
         return(
            <div id="tools-flux">
                <div className="bem-Tools">
                    <ToolsA/>
                    <ToolsB/>
                    <ResizeHandle data={data}/>
                    <WorkspaceInfo data={data}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(ToolsFlux);
