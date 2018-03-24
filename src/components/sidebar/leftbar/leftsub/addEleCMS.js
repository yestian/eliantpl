import React, { Component } from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

class addEleCMS extends Component{
     render(){
         if(this.props.ico.ico_event.leftBtns.showCMS){
             let cmsHeight=$(window).height()-35;
             return(
                 <div><div id="cmsbox" style={{pointerEvents: 'none', position: 'absolute', left: 35, top: 34, width: 1885,height:cmsHeight}}>
                     <div className="bem-Panel" style={{display: 'flex', maxWidth: '100%', flexGrow: 1, height: '100%'}}>
                         <div className="bem-Pane " style={{display: 'flex', flexBasis: 250, flexDirection: 'column', flexShrink: 0, width: 250}}>
                             <div className="bem-Pane_Head">
                                 <div className="bem-Heading bem-Heading-h1 bem-Pane_Title">程序选择</div>
                                 <div className="bem-Pane_Close"><div className="bem-Pane_CloseIcon sprite-main" /></div>
                                 <div className="bem-Pane_Actions "><button data-automation-id="cms-new-collection-button" type="button" className="bem-Button bem-Button-icon bem-Button-head bem-Button-lighter"><i className="bem-Icon  icon-dynamo add-collection" /></button></div>
                             </div>
                         <div className="bem-Pane_Body  kit-scroll-pane kit-scrollbar" style={{display: 'flex', overflow: 'auto', flexDirection: 'column', flexGrow: 1}}>
                             <div className="bem-Pane_Body_Inner" style={{flexGrow: 1}}><div className="bem-List "><div className="bem-List_Row  bem-List_Row-big bem-List_Row-clickable"><div className="bem-List_Cell "><i className="bem-List_Icon  icon-undefined undefined"><i className="bem-Icon  icon-dynamo collection" style={{bottom: 2}} /></i></div>
                             <div className="bem-List_Cell " style={{maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}><span className="bem-Text ">作者</span></div>
                             <div className="bem-List_Cell " style={{maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexBasis: 'auto', flexShrink: 0}}><span className="bem-Text bem-Text-dimmer">6 items</span></div>
                             <div className="bem-List_Cell " style={{flexGrow: 1, flexShrink: 0}}><div className="bem-ProfilePictures" style={{display: 'flex', paddingLeft: '7.2px'}} /></div>
                             <div className="bem-List_Action bem-List_Action-shy"><span className="bem-Link bem-Link-dim" style={{padding: '6px 0px 6px 6px'}}><i title="Edit Settings" className="bem-Icon  icon-main common-list-settings bem-Link_Icon" style={{display: 'inline-block', bottom: 1}} /></span></div>
                         </div></div>
                         <div className="bem-Pane_Card ">
                             <div className="bem-Pane_CardClose"><span className="bem-Link "><i className="bem-Icon  icon-main common-close bem-Link_Icon" style={{display: 'inline-block'}} /></span></div>
                             <div className="bem-Heading bem-Heading-h4 bem-Heading-isolate">Discover the power of the Webflow CMS and Collections</div>
                             <a href="/" rel="noopener noreferrer" className="bem-VideoThumbnail bem-VideoThumbnail-isolate"><img alt='img' src="https://d3e54v103j8qbb.cloudfront.net/img/dm-videothumbnail@2x.221858e235.png" className="bem-VideoThumbnail_Image" /><div className="bem-VideoThumbnail_Overlay" /><i className="bem-VideoThumbnail_Icon  icon-main ftu-overlay-play-button" /></a><div className="bem-Pane_CardFooter">Watch more video tutorials on the <a rel="noopener noreferrer" href="/" className="bem-TextLink">Webflow University</a>.</div></div></div>
                         </div></div></div></div></div>
            )
        }else{
            return '';
        }

    }
}
export default connect(state=>state)(addEleCMS);
