import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsCreators from '../../../actions/icoAction';

import LeftLogoFlux from './leftlogoflux';
import LeftAdd from './leftadd';
import LeftPages from './leftpages';
import LeftCms from './leftcms';
import LeftPictures from './leftpictures';
import LeftSettings from './leftsettings';
import LeftBotEdges from './leftbottom/leftBottomEdges';
import LeftBotShowEmpty from './leftbottom/leftBottomEmpty';
import LeftBotShowGrid from './leftbottom/leftBottomGrid';
import LeftBotShowXray from './leftbottom/leftBottomXray';
import LeftBotTutor from './leftbottom/leftBottomTutor';
import LeftBotHelp from './leftbottom/leftBottomHelp';

class Leftbar extends Component{
    render() {
        let {toggleAdd,togglePages,toggleCMS,togglePictures,toggleSettings,icoMouseEnter,icoMouseLeave,toggleEdges,toggleEmpty,toggleGrid,toggleXray,toggleTutor}=this.props;
        let ico=this.props.ico.ico_event;
        // console.log(ico);
        if(!!ico.eyeStatus!==true){
            return (
                <div className="left-sidebar">
                    <div className="left-sidebar-links">
                        <LeftLogoFlux/>
                        <LeftAdd onClick={toggleAdd} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} props={ico}/>
                        <LeftPages onClick={togglePages} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} props={ico}/>
                        <LeftCms onClick={toggleCMS} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} props={ico}/>
                        <LeftPictures onClick={togglePictures} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} props={ico}/>
                        <LeftSettings onClick={toggleSettings} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} props={ico}/>
                        <div className="bottom">
                            <LeftBotEdges onClick={toggleEdges} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} ico={ico}/>
                            <LeftBotShowEmpty onClick={toggleEmpty} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} ico={ico}/>
                            <LeftBotShowGrid onClick={toggleGrid} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} ico={ico}/>
                            <LeftBotShowXray onClick={toggleXray} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} ico={ico}/>
                            <LeftBotTutor onClick={toggleTutor} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} ico={ico}/>
                            <LeftBotHelp onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                        </div>
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
)(Leftbar);
