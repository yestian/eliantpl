import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../actions/icoAction';

class TutorVideo extends Component{
     render(){
         if(this.props.data.leftBtns.showTutor){
            return (
                <div>
                    <div style={{position: 'absolute', pointerEvents: 'none', left: 0, top: 0, width: 1920, height: 949,overflow:'hidden'}}>
                    <div className="bem-VideoTutorials">
                        <div className="kit-slate slate-level-1">
                            <div className="header"><h2>视频指导</h2><a className="close"><i className="sprite-main" /></a></div>
                            <div className="content">
                                <div className="scroll-pane kit-scrollbar main-scroll-pane">
                                    <div className="kit-section open"><div className="kit-section-title"><div className="label"><span>介绍</span><i className="status sprite-main" /><div className="pull-right"><i className="icon-main" /></div></div></div><div className="kit-section-body"><div className="bem-VideoTutorials_List">
                                        <div className="bem-VideoTutorials_ListItem video-item"><i className="icon-main ftu-video-small" /><span className="bem-VideoTutorials_ListItem_Title"><span>设计介绍</span><span className="bem-VideoTutorials_ListItem_Length"> (2:55)</span></span><i className="icon-main common-arrow-right" /></div></div></div></div>
                                    <div className="kit-section open"><div className="kit-section-title"><div className="label"><span>网站结构</span><i className="status sprite-main" /><div className="pull-right"><i className="icon-main" /></div></div></div>
                                    <div className="kit-section-body"><div className="bem-VideoTutorials_List">
                                    <div className="bem-VideoTutorials_ListItem video-item"><i className="icon-main ftu-video-small" /><span className="bem-VideoTutorials_ListItem_Title"><span>导航栏</span><span className="bem-VideoTutorials_ListItem_Length"> (2:46)</span></span><i className="icon-main common-arrow-right" /></div></div></div></div>
                                </div>
                            </div>
                        </div>
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
)(TutorVideo);
