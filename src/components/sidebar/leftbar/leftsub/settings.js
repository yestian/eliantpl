import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../actions/icoAction';
//添加按钮的产生的二级页面

class Settings extends Component{
     render(){
         return(
             <div className="bem-Panel" style={{display: 'flex', maxWidth: '100%', flexGrow: 1, height: '100%'}}>
                 <div className="bem-Pane " style={{display: 'flex', flexBasis: 250, flexDirection: 'column', flexShrink: 0, width: 250}}>
                <div className="bem-Pane_Head">
                     <div className="bem-Heading bem-Heading-h1 bem-Pane_Title">设置</div>
                     <div className="bem-Pane_Close" onClick={()=>{this.props.toggleSettings()}}><div className="bem-Pane_CloseIcon sprite-main" /></div>
                 </div>
                 <div className="bem-Pane_Body  kit-scroll-pane kit-scrollbar" style={{display: 'flex', overflow: 'auto', flexDirection: 'column', flexGrow: 1}}><div className="bem-Pane_Body_Inner" style={{flexGrow: 1}}><div className="bem-List ">
                     <div className="bem-List_Row  bem-List_Row-big bem-List_Row-clickable"><div className="bem-List_Cell "><svg width={15} height={15} viewBox="0 0 15 15" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M10.03 8.97l-.16.16A4.95 4.95 0 0 0 11 6 5 5 0 0 0 1 6a5 5 0 0 0 5 5c1.19 0 2.27-.434 3.13-1.13l-.16.16 3.5 3.5 1.06-1.06-3.5-3.5zM6 9.5C4.07 9.5 2.5 7.93 2.5 6S4.07 2.5 6 2.5 9.5 4.07 9.5 6 7.93 9.5 6 9.5z" /></svg></div>
                     <div className="bem-List_Cell " style={{maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}><span className="bem-Text ">搜索</span></div>
                     <div className="bem-List_Cell " style={{flexGrow: 1, flexShrink: 0}} /></div></div></div></div></div></div>

        )
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(Settings);
