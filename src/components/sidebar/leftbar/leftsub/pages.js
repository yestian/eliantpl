import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../actions/icoAction';
//添加按钮的产生的二级页面

class Pages extends Component{
     render(){
         // console.log(this.props);
         return(
             <div className="bem-Panel" style={{display: 'flex', flexGrow: 1}}>
                 <div className="bem-Pane " style={{display: 'flex', flexBasis: 250, flexDirection: 'column', width: 250}}>
                     <div className="bem-Pane_Head">
                         <div className="bem-Heading bem-Heading-h1 bem-Pane_Title">所有页面</div>
                         <div className="bem-Pane_Close" onClick={()=>{this.props.togglePages(0)}}><div className="bem-Pane_CloseIcon sprite-main" /></div>
                         <div className="bem-Pane_Actions "><button type="button" className="bem-Button bem-Button-block bem-Button-head bem-Button-lighter" style={{width: 35}}><div className="bem-Button_Inner"><svg width={24} height={18} viewBox="0 0 24 18" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M5.96 3.75a6.3 6.3 0 0 0 .946-.81c.184-.187.354-.377.513-.56L6.122 1H1v3h4.416c.016.01.255-.05.545-.25zM16 3H9.498c-.132.17-.29.37-.487.6-.48.56-1.114 1.24-1.845 1.752-.493.333-1.034.635-1.747.648H1v8h12v-4h3V3zm4 9V9h-2v3h-3v2h3v3h2v-3h3v-2h-3z" /></svg></div></button><button data-automation-id="add-page-button" type="button" className="bem-Button bem-Button-block bem-Button-head bem-Button-lighter" style={{width: 35}}><div className="bem-Button_Inner"><svg width={20} height={18} viewBox="0 0 20 18" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M16 12V9h-2v3h-3v2h3v3h2v-3h3v-2h-3zm-4-7L8 1H1v13h8v-4h3V5z" /></svg></div></button></div>
                     </div>
                     <div className="bem-Pane_Body  kit-scroll-pane kit-scrollbar" style={{display: 'flex', overflow: 'auto', flexDirection: 'column', flexGrow: 1}}>
                         <div className="bem-Pane_Body_Inner" style={{display: 'flex', flexGrow: 1}}>
                             <div className="bem-List " style={{width: '100%'}}>
                                 <div className="bem-List_Row  " style={{alignItems: 'stretch', flexBasis: 50, flexDirection: 'column', justifyContent: 'space-around', padding: '4px 8px 8px', minHeight: 50}}><div className="bem-Flex" style={{display: 'flex', justifyContent: 'space-between'}}><div className="bem-Flex" style={{display: 'flex', color: 'rgb(234, 56, 76)'}}>没有页面<a target="_blank" href="/dashboard/sites/aaas-first-project-dbcb57/hosting?ref=pmeter" className="bem-TextLink" style={{color: 'rgb(166, 166, 166)', marginLeft: 5}}>添加主机</a></div><div className="bem-Flex" style={{display: 'flex', color: 'rgb(166, 166, 166)'}} /></div><div className="bem-Flex" style={{display: 'flex', flexBasis: 5, height: 5, position: 'relative'}}><div style={{borderRadius: 8, flexGrow: 1, backgroundColor: 'rgb(43, 43, 43)'}} /><div style={{backgroundColor: 'rgb(234, 56, 76)', borderRadius: 8, top: 0, left: 0, right: '0%', bottom: 0, position: 'absolute'}} /></div></div>
                                 <div className="bem-View" style={{display: 'flex', flexDirection: 'column'}}><div className="bem-List_Section">静态页面</div></div>
                                 <div className="bem-List_Row isSelected " style={{opacity: 1, paddingRight: 0, position: 'relative'}}><div className="bem-List_Cell "><div style={{position: 'relative'}}><div style={{display: 'flex', justifyContent: 'center', overflow: 'visible'}}><span className="pageico"></span></div></div></div><div className="bem-List_Cell " style={{maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexBasis: 0, flexGrow: 1}}><span data-automation-id="selected-page-name" className="bem-Text bem-Text-baseline">Home</span></div><div className="bem-View" style={{display: 'flex', marginLeft: 'auto', paddingRight: 5, paddingLeft: 5}}><div className="bem-List_Action " style={{alignSelf: 'center', width: 24, marginLeft: 0}}><span className="bem-Link bem-Link-dim"><svg width={16} height={15} viewBox="0 0 16 15" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M8 1L1 7v1h2v6h3v-3c.216-1.14.87-2 2-2s1.784.86 2 2v3h3V8h2V7L8 1z" /></svg></span></div><div data-automation-id="page-settings-button" className="bem-List_Action bem-List_Action-shy" style={{alignSelf: 'center', width: 24, marginLeft: 0}}><span className="bem-Link bem-Link-dim"><svg width={16} height={16} viewBox="0 0 16 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M15 8.875v-1.75l-2.34-.45a4.782 4.782 0 0 0-.427-1.036l1.337-1.98-1.24-1.238-1.97 1.336a4.855 4.855 0 0 0-1.04-.427L8.873 1h-1.75l-.45 2.34a4.67 4.67 0 0 0-1.03.426L3.67 2.43 2.43 3.67l1.337 1.97a4.79 4.79 0 0 0-.428 1.036L1 7.124v1.75l2.34.452c.102.364.245.71.427 1.034L2.43 12.33l1.24 1.238 1.97-1.335c.323.183.67.323 1.034.43L7.124 15h1.75l.452-2.338a4.93 4.93 0 0 0 1.034-.43l1.972 1.334 1.237-1.237-1.34-1.97c.18-.33.32-.67.43-1.04L15 8.87zm-7 1.908a2.782 2.782 0 1 1 0-5.565 2.782 2.782 0 0 1 0 5.565z" /></svg></span></div></div></div>
                                 <div className="bem-List_Row  bem-List_Row-clickable bem-List_Row-draggable" style={{opacity: 1, paddingRight: 0, position: 'relative'}}><div draggable="true" className="bem-List_DragHandle" /><div className="bem-List_Cell "><div style={{position: 'relative'}}><div style={{display: 'flex', justifyContent: 'center', overflow: 'visible'}}><span className="pageico"></span></div></div></div><div className="bem-List_Cell " style={{maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexBasis: 0, flexGrow: 1}}><span className="bem-Text bem-Text-baseline">示例页面</span></div><div className="bem-View" style={{display: 'flex', marginLeft: 'auto', paddingRight: 5, paddingLeft: 5}}><div className="bem-List_Action bem-List_Action-shy" style={{alignSelf: 'center', width: 24, marginLeft: 0}}><span className="bem-Link bem-Link-dim"><svg width={16} height={16} viewBox="0 0 16 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M15 8.875v-1.75l-2.34-.45a4.782 4.782 0 0 0-.427-1.036l1.337-1.98-1.24-1.238-1.97 1.336a4.855 4.855 0 0 0-1.04-.427L8.873 1h-1.75l-.45 2.34a4.67 4.67 0 0 0-1.03.426L3.67 2.43 2.43 3.67l1.337 1.97a4.79 4.79 0 0 0-.428 1.036L1 7.124v1.75l2.34.452c.102.364.245.71.427 1.034L2.43 12.33l1.24 1.238 1.97-1.335c.323.183.67.323 1.034.43L7.124 15h1.75l.452-2.338a4.93 4.93 0 0 0 1.034-.43l1.972 1.334 1.237-1.237-1.34-1.97c.18-.33.32-.67.43-1.04L15 8.87zm-7 1.908a2.782 2.782 0 1 1 0-5.565 2.782 2.782 0 0 1 0 5.565z" /></svg></span></div></div></div>
                                 <div className="bem-List_Row  bem-List_Row-clickable bem-List_Row-draggable" style={{opacity: 1, paddingRight: 0, position: 'relative'}}><div draggable="true" className="bem-List_DragHandle" /><div className="bem-List_Cell "><div style={{position: 'relative'}}><div style={{display: 'flex', justifyContent: 'center', overflow: 'visible'}}><span className="pageico"></span></div></div></div><div className="bem-List_Cell " style={{maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexBasis: 0, flexGrow: 1}}><span className="bem-Text bem-Text-baseline">所有布局</span></div><div className="bem-View" style={{display: 'flex', marginLeft: 'auto', paddingRight: 5, paddingLeft: 5}}><div className="bem-List_Action bem-List_Action-shy" style={{alignSelf: 'center', width: 24, marginLeft: 0}}><span className="bem-Link bem-Link-dim"><svg width={16} height={16} viewBox="0 0 16 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M15 8.875v-1.75l-2.34-.45a4.782 4.782 0 0 0-.427-1.036l1.337-1.98-1.24-1.238-1.97 1.336a4.855 4.855 0 0 0-1.04-.427L8.873 1h-1.75l-.45 2.34a4.67 4.67 0 0 0-1.03.426L3.67 2.43 2.43 3.67l1.337 1.97a4.79 4.79 0 0 0-.428 1.036L1 7.124v1.75l2.34.452c.102.364.245.71.427 1.034L2.43 12.33l1.24 1.238 1.97-1.335c.323.183.67.323 1.034.43L7.124 15h1.75l.452-2.338a4.93 4.93 0 0 0 1.034-.43l1.972 1.334 1.237-1.237-1.34-1.97c.18-.33.32-.67.43-1.04L15 8.87zm-7 1.908a2.782 2.782 0 1 1 0-5.565 2.782 2.782 0 0 1 0 5.565z" /></svg></span></div></div></div>
                                 <div className="bem-View" style={{display: 'flex', flexDirection: 'column'}}><div className="bem-List_Section">功能页面</div></div>
                                 <div className="bem-List_Row  bem-List_Row-clickable" style={{opacity: 1, paddingRight: 0, position: 'relative'}}><div className="bem-List_Cell "><div style={{position: 'relative'}}><div style={{display: 'flex', justifyContent: 'center', overflow: 'visible'}}><span className="pageico"></span></div></div></div><div className="bem-List_Cell " style={{maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexBasis: 0, flexGrow: 1}}><span className="bem-Text bem-Text-baseline">密码</span></div><div className="bem-View" style={{display: 'flex', marginLeft: 'auto', paddingRight: 5, paddingLeft: 5}}><div className="bem-List_Action bem-List_Action-shy" style={{alignSelf: 'center', width: 24, marginLeft: 0}}><span className="bem-Link bem-Link-dim"><svg width={16} height={16} viewBox="0 0 16 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M15 8.875v-1.75l-2.34-.45a4.782 4.782 0 0 0-.427-1.036l1.337-1.98-1.24-1.238-1.97 1.336a4.855 4.855 0 0 0-1.04-.427L8.873 1h-1.75l-.45 2.34a4.67 4.67 0 0 0-1.03.426L3.67 2.43 2.43 3.67l1.337 1.97a4.79 4.79 0 0 0-.428 1.036L1 7.124v1.75l2.34.452c.102.364.245.71.427 1.034L2.43 12.33l1.24 1.238 1.97-1.335c.323.183.67.323 1.034.43L7.124 15h1.75l.452-2.338a4.93 4.93 0 0 0 1.034-.43l1.972 1.334 1.237-1.237-1.34-1.97c.18-.33.32-.67.43-1.04L15 8.87zm-7 1.908a2.782 2.782 0 1 1 0-5.565 2.782 2.782 0 0 1 0 5.565z" /></svg></span></div></div></div>
                                 <div className="bem-List_Row  bem-List_Row-clickable" style={{opacity: 1, paddingRight: 0, position: 'relative'}}><div className="bem-List_Cell "><div style={{position: 'relative'}}><div style={{display: 'flex', justifyContent: 'center', overflow: 'visible'}}><span className="pageico"></span></div></div></div><div className="bem-List_Cell " style={{maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexBasis: 0, flexGrow: 1}}><span className="bem-Text bem-Text-baseline">404错误页</span></div><div className="bem-View" style={{display: 'flex', marginLeft: 'auto', paddingRight: 5, paddingLeft: 5}}><div className="bem-List_Action bem-List_Action-shy" style={{alignSelf: 'center', width: 24, marginLeft: 0}}><span className="bem-Link bem-Link-dim"><svg width={16} height={16} viewBox="0 0 16 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M15 8.875v-1.75l-2.34-.45a4.782 4.782 0 0 0-.427-1.036l1.337-1.98-1.24-1.238-1.97 1.336a4.855 4.855 0 0 0-1.04-.427L8.873 1h-1.75l-.45 2.34a4.67 4.67 0 0 0-1.03.426L3.67 2.43 2.43 3.67l1.337 1.97a4.79 4.79 0 0 0-.428 1.036L1 7.124v1.75l2.34.452c.102.364.245.71.427 1.034L2.43 12.33l1.24 1.238 1.97-1.335c.323.183.67.323 1.034.43L7.124 15h1.75l.452-2.338a4.93 4.93 0 0 0 1.034-.43l1.972 1.334 1.237-1.237-1.34-1.97c.18-.33.32-.67.43-1.04L15 8.87zm-7 1.908a2.782 2.782 0 1 1 0-5.565 2.782 2.782 0 0 1 0 5.565z" /></svg></span></div></div></div>
                                 <div className="bem-View" style={{display: 'flex', flexDirection: 'column'}}><div className="bem-List_Section">CMS收集页面</div></div>
                                 <div className="bem-List_Row  bem-List_Row-clickable" style={{paddingRight: 0}}><div className="bem-List_Cell "><div style={{position: 'relative'}}><div style={{display: 'flex', justifyContent: 'center', overflow: 'visible'}}><span className="pageico"></span></div></div></div><div className="bem-List_Cell " style={{maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexBasis: 0, flexGrow: 1}}><span className="bem-Text bem-Text-baseline">Authors Template</span></div><div className="bem-View" style={{display: 'flex', marginLeft: 'auto', paddingRight: 5, paddingLeft: 5}}><div className="bem-List_Action bem-List_Action-shy" style={{alignSelf: 'center', width: 24, marginLeft: 0}}><span className="bem-Link bem-Link-dim"><svg width={16} height={16} viewBox="0 0 16 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M15 8.875v-1.75l-2.34-.45a4.782 4.782 0 0 0-.427-1.036l1.337-1.98-1.24-1.238-1.97 1.336a4.855 4.855 0 0 0-1.04-.427L8.873 1h-1.75l-.45 2.34a4.67 4.67 0 0 0-1.03.426L3.67 2.43 2.43 3.67l1.337 1.97a4.79 4.79 0 0 0-.428 1.036L1 7.124v1.75l2.34.452c.102.364.245.71.427 1.034L2.43 12.33l1.24 1.238 1.97-1.335c.323.183.67.323 1.034.43L7.124 15h1.75l.452-2.338a4.93 4.93 0 0 0 1.034-.43l1.972 1.334 1.237-1.237-1.34-1.97c.18-.33.32-.67.43-1.04L15 8.87zm-7 1.908a2.782 2.782 0 1 1 0-5.565 2.782 2.782 0 0 1 0 5.565z" /></svg></span></div></div></div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

        )
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(Pages);
