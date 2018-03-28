import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsCreators from '../../../actions/icoAction';
import $ from 'jquery';

import TopbarToShow from './topbarToShow';
import TopbarEye from './topbarEye';
import TopbarToHide from './topbarToHide';
import TopbarShowPagesBtn from './topbarShowPagesBtn';
import TopbarCenter from './topbarCenter';
import TopbarPublish from './topbarrightpublish';
import TopbarUndoRedo from './topbarundoredo.js';
import TopbarRightStatus from './topbarrightstatus.js';
import TopbarExport from './topbarexport.js';

class Topbar extends Component{
  render() {
      let {icoMouseEnter,icoClickToggle,icoMouseLeave,eyeToggle,toggleTopBar,selectMedia,togglePages}=this.props;
      let ico_event=this.props.ico.ico_event;
      if(!!ico_event.topBarStatus===false){
           $(".bem-TopBar_Body").animate({top:'-32px'},500);
           $('html').removeClass('avoid-top-bar');
      }else{
           $(".bem-TopBar_Body").animate({top:0},500);
           $('html').addClass('avoid-top-bar');
      }

    return (
      <div className="bem-TopBar">
          <div className="bem-TopBar_Body" style={{top:0}}>
                <div className="bem-TopBar_Body_Group bem-TopBar_Body_Group-left">
                    {/* 眼睛开启模式下才显示的，是否隐藏顶部的按钮 */}
                    <TopbarToHide icoprops={ico_event} onClick={toggleTopBar}/>
                    {/* 显示网站页面列表的按钮 */}
                    <TopbarShowPagesBtn icoprops={ico_event} onClick={togglePages}/>
                    {/* 眼睛图标 */}
                    <TopbarEye onClick={eyeToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} prop={ico_event}/>
                </div>
                {/* 中间的媒体图标 */}
               <TopbarCenter onClick={selectMedia} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} media={ico_event.media} index={this.props.index}/>
               <div className="bem-TopBar_Body_Group bem-TopBar_Body_Group-right">
                   {/* 重做和撤销 */}
                   <TopbarUndoRedo  onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} data={ico_event}/>
                   {/* 上传状态 */}
                   <TopbarRightStatus  onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} data={ico_event}/>
                   {/* 代码输出 */}
                   <TopbarExport onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave} data={ico_event}/>
                   {/* 项目发布 */}
                   <TopbarPublish onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
               </div>
          </div>
          {/* 顶部菜单隐藏的情况下，通过这个按钮，恢复顶部菜单的显示 */}
          <TopbarToShow onClick={toggleTopBar} topBarStatus={ico_event.topBarStatus}/>
      </div>
    )
  }
}
export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(Topbar);
