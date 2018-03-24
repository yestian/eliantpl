import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../actions/icoAction';
//添加按钮的产生的二级页面

class Pictures extends Component{
    componentDidMount(){
        let H=$(window).height()-147;
        $('#assets-tab').height(H);
    }
     render(){
         return(
             <div>
                 <div className="bem-Panel" style={{display: 'flex', flexGrow: 1, height: '100%', pointerEvents: 'none'}}>
                     <div className="bem-Pane " style={{display: 'flex', flexBasis: 250, flexDirection: 'column', width: 250, borderBottom: 'none'}}>
                         <div style={{WebkitFontSmoothing: 'antialiased'}}>
                             <div className="bem-Pane_Head">
                                 <div className="bem-Heading bem-Heading-h1 bem-Pane_Title">素材</div>
                                 <div className="bem-Pane_Close" onClick={()=>{this.props.togglePictures(0)}} style={{marginLeft: 'auto'}}><div className="bem-Pane_CloseIcon sprite-main" /></div>
                                 <div className="bem-Pane_Actions "><button type="button" className="bem-Button  link-button hidden"><svg width={12} height={12} viewBox="0 0 12 12" className="bem-Svg link-icon" style={{display: 'inline-block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M2.97 9.158a2.035 2.035 0 0 1 0-2.877l.92-1.016-.88-.882-.922 1.02a3.282 3.282 0 1 0 4.64 4.64l.92-1.02-.88-.88-.92 1.018a2.037 2.037 0 0 1-2.878 0zm2.353-1.523l2.35-2.35-.915-.915-2.35 2.35.915.915zM5.4 1.99l-.98.98.88.883.98-.98A2.035 2.035 0 1 1 9.16 5.75l-.98.98.882.882.98-.98a3.282 3.282 0 1 0-4.64-4.64z" /></svg><span className="bem-Text ">Link</span></button><button type="button" className="bem-Button  bem-FileInput upload-button" style={{marginRight: '-1px', marginLeft: 4}}><i className="bem-Icon  icon-main upload-asset" style={{bottom: 1}} /><div style={{display: 'inline-block', marginLeft: 7}}>上传</div><input type="file" accept=".jpg,.png,.gif,.bmp,.svg,.pdf,.doc,.xls,.ppt,.docx,.xlsx,.pptx,.txt,.csv" multiple className="bem-FileInput_Input" /></button></div>
                             </div>
                             <div style={{borderTop: '1px solid rgb(33, 33, 33)', padding: '6px 10px', backgroundColor: 'rgb(77, 77, 77)'}}><div className="bem-Dropdown   AssetsMenu"><span className="bem-Link "><span className="bem-Text ">所有素材</span><div className="bem-AssetsTab_SortCaret"><svg width={9} height={6} viewBox="0 0 9 6" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M4.5 5L1 1h7z" /></svg></div></span><div className="bem-Dropdown_Body"><div className="bem-Dropdown_Shield" /><div className="bem-Dropdown_InnerBody"><div className="bem-Menu"><div className="bem-Menu_Item  dropdown-menu-item checked" style={{display: 'flex', alignItems: 'center'}}><span className="bem-Text " style={{display: 'inline-block', width: 105}}>All Assets</span><span className="bem-Text "><i className="bem-Icon  icon-main checkmark-white" style={{bottom: 2}} /></span></div><div className="bem-Menu_Item  dropdown-menu-item" style={{display: 'flex', alignItems: 'center'}}><span className="bem-Text " style={{display: 'inline-block', width: 105}}>Images</span><span className="bem-Text " /></div><div className="bem-Menu_Item  dropdown-menu-item" style={{display: 'flex', alignItems: 'center'}}><span className="bem-Text " style={{display: 'inline-block', width: 105}}>Documents</span><span className="bem-Text " /></div></div></div></div></div></div>
                         </div>
                         <div style={{borderTop: '1px solid rgb(33, 33, 33)'}}>
                             <div id="assets-tab" className="bem-AssetsTab">

                                 <div className="bem-Pane bem-Pane-tab" style={{display: 'flex', flexBasis: '100%', flexDirection: 'column', width: '100%', position: 'relative'}}>
                                 <div className="bem-AssetGrid " style={{flexGrow: 1}}><div className="bem-View" style={{display: 'flex', alignItems: 'stretch', flexGrow: 1, position: 'relative'}}><div className="bem-View" style={{boxShadow: 'rgba(0, 0, 0, 0) 0px 20px 20px -20px inset, rgba(0, 0, 0, 0.3) 0px -20px 20px -20px inset', position: 'absolute', top: '-1px', left: 0, right: 0, bottom: 0, zIndex: 1, pointerEvents: 'none'}} />
                                 <Scrollbars autoHide><div className="bem-LazyGrid" style={{flexGrow: 1, position: 'relative'}}><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(0px, 0px, 0px)', height: 118, position: 'absolute', width: 80}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://daks2k3a4ib2z.cloudfront.net/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b04b_photo-1441486374104-36abe5ed9b69-bw-p-130x130q80.jpeg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">phot…w.jpg</div></div></div><div title="photo-1441486374104-36abe5ed9b69-bw.jpg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(79px, 0px, 0px)', height: 118, position: 'absolute', width: 80}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://daks2k3a4ib2z.cloudfront.net/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b04c_photo-1431329842981-433c8635c2b9-bw-p-130x130q80.jpeg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">phot…w.jpg</div></div></div><div title="photo-1431329842981-433c8635c2b9-bw.jpg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(159px, 0px, 0px)', height: 118, position: 'absolute', width: 80}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b045_social-33-white.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…e.svg</div></div></div><div title="social-33-white.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(0px, 118px, 0px)', height: 118, position: 'absolute', width: 80}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b03c_social-33.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…3.svg</div></div></div><div title="social-33.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(79px, 118px, 0px)', height: 118, position: 'absolute', width: 80}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b040_social-35-white.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…e.svg</div></div></div><div title="social-35-white.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(159px, 118px, 0px)', height: 118, position: 'absolute', width: 80}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b03a_social-34-white.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…e.svg</div></div></div><div title="social-34-white.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(0px, 236px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4afdc_social-35.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…5.svg</div></div></div><div title="social-35.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(79px, 236px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b049_social-34.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…4.svg</div></div></div><div title="social-34.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(159px, 236px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4aff3_social-36.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…6.svg</div></div></div><div title="social-36.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(0px, 354px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b000_social-25-white.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…e.svg</div></div></div><div title="social-25-white.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(79px, 354px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b00f_social-25.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…5.svg</div></div></div><div title="social-25.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(159px, 354px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4afe8_social-40-white.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…e.svg</div></div></div><div title="social-40-white.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(0px, 472px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4aff4_social-38-white.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…e.svg</div></div></div><div title="social-38-white.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(79px, 472px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b00b_social-40.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…0.svg</div></div></div><div title="social-40.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(159px, 472px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4affc_social-38.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…8.svg</div></div></div><div title="social-38.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(0px, 590px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4afe9_End-Slice2%20Top.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">End-…p.svg</div></div></div><div title="End-Slice2 Top.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(79px, 590px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4afdb_End-Slice2%20Bottom.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">End-…m.svg</div></div></div><div title="End-Slice2 Bottom.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(159px, 590px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b027_end-08-slash2-bottom.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">end-…m.svg</div></div></div><div title="end-08-slash2-bottom.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(0px, 708px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b052_end-07-slash2-top.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">end-…p.svg</div></div></div><div title="end-07-slash2-top.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(79px, 708px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4afeb_end-01-white.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">end-…e.svg</div></div></div><div title="end-01-white.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(159px, 708px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4afcf_justicons-white-71.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">just…1.svg</div></div></div><div title="justicons-white-71.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(0px, 826px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b02e_social-30-white.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…e.svg</div></div></div><div title="social-30-white.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(79px, 826px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4b024_social-26-white.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…e.svg</div></div></div><div title="social-26-white.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div><div draggable="true" className="bem-AssetGrid_Item  bem-AssetGrid_Item-grid bem-AssetGrid_Item-big" style={{transform: 'translate3d(159px, 826px, 0px)', width: 80, height: 118, position: 'absolute'}}><div className="bem-AssetGrid_ItemBody" style={{alignItems: 'center', flexDirection: 'column'}}><div className="bem-AssetGrid_ItemPreview" style={{maxWidth: 118, flexGrow: 0, height: 84}}><img  alt="img" src="https://uploads-ssl.webflow.com/5a61c81dd70c030001b4afc7/5a61c81ed70c030001b4aff1_social-28-white.svg" className="bem-AssetGrid_ItemImage" /></div><div className="bem-AssetGrid_ItemText"><div className="bem-AssetGrid_ItemName">soci…e.svg</div></div></div><div title="social-28-white.svg" className="bem-AssetGrid_Reticle" /><div className="bem-AssetGrid_DetailsButton"><i className="bem-Icon  icon-main asset-settings" /></div></div></div>
                             </Scrollbars>
                         </div></div></div></div></div>
                         <div style={{borderTop: '1px solid rgb(33, 33, 33)', padding: '6px 10px', backgroundColor: 'rgb(77, 77, 77)'}}><div className="bem-Dropdown   AssetsMenu"><div className="bem-Dropdown_Body" style={{top: 'initial', bottom: '100%'}}><div className="bem-Dropdown_Shield" /><div className="bem-Dropdown_InnerBody">
                             <div className="bem-Menu"><div className="bem-Menu_Item  dropdown-menu-item checked" style={{display: 'flex', alignItems: 'center'}}><span className="bem-Text " style={{display: 'inline-block', width: 105}}>时间排序</span><span className="bem-Text "><i className="bem-Icon  icon-main checkmark-white" style={{bottom: 2}} /></span></div><div className="bem-Menu_Item  dropdown-menu-item" style={{display: 'flex', alignItems: 'center'}}><span className="bem-Text " style={{display: 'inline-block', width: 105}}>时间倒序</span><span className="bem-Text " /></div>
                             <div className="bem-Menu_Item  dropdown-menu-item" style={{display: 'flex', alignItems: 'center'}}><span className="bem-Text " style={{display: 'inline-block', width: 105}}>字母排序 (A-Z)</span><span className="bem-Text " /></div>
                             <div className="bem-Menu_Item  dropdown-menu-item" style={{display: 'flex', alignItems: 'center'}}><span className="bem-Text " style={{display: 'inline-block', width: 105}}>字母排序 (Z-A)</span><span className="bem-Text " /></div></div>
                         </div></div><span className="bem-Link "><span className="bem-Text ">时间排序</span><div className="bem-AssetsTab_SortCaret"><svg width={9} height={6} viewBox="0 0 9 6" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M4.5 5L1 1h7z" /></svg></div></span></div>
                         <div className="bem-Dropdown  bem-Dropdown-right AssetsMenu" style={{float: 'right', top: '-5px', right: '-5px', padding: 5}}><div className="bem-Dropdown_Body" style={{top: 'initial', bottom: '100%'}}><div className="bem-Dropdown_Shield" />
                         <div className="bem-Dropdown_InnerBody">
                             <div className="bem-Menu">
                                 <div className="bem-Menu_Item  dropdown-menu-item checked" style={{display: 'flex', alignItems: 'center'}}><svg width={11} height={11} viewBox="0 0 11 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M0 0h4v4H0V0zm7 0h4v4H7V0zM0 7h4v4H0V7zm7 0h4v4H7V7z" fill="currentColor" fillRule="evenodd" /></svg><span className="bem-Text " style={{display: 'inline-block', width: 80}}>网格</span><span className="bem-Text "><i className="bem-Icon  icon-main checkmark-white" style={{bottom: 2}} /></span></div>
                                 <div className="bem-Menu_Item  dropdown-menu-item" style={{display: 'flex', alignItems: 'center'}}><svg width={11} height={11} viewBox="0 0 11 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M0 0h2v2H0V0zm0 4h2v2H0V4zm4-4h7v2H4V0zm0 4h7v2H4V4zM0 8h2v2H0V8zm4 0h7v2H4V8z" fill="currentColor" fillRule="evenodd" /></svg><span className="bem-Text " style={{display: 'inline-block', width: 80}}>列表</span><span className="bem-Text " /></div>
                                 <div className="bem-Menu_Item  dropdown-menu-item" style={{display: 'flex', alignItems: 'center'}}><svg width={11} height={11} viewBox="0 0 11 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M3 0h8v1H3V0zm0 3h8v1H3V3zm0 3h8v1H3V6zm0 3h8v1H3V9zM0 0h1v1H0V0zm0 3h1v1H0V3zm0 3h1v1H0V6zm0 3h1v1H0V9z" fill="currentColor" fillRule="evenodd" /></svg><span className="bem-Text " style={{display: 'inline-block', width: 80}}>列表小图</span><span className="bem-Text " /></div></div></div>
                     </div><span className="bem-Link " style={{display: 'block', marginTop: 3}}><svg width={11} height={11} viewBox="0 0 11 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M0 0h4v4H0V0zm7 0h4v4H7V0zM0 7h4v4H0V7zm7 0h4v4H7V7z" fill="currentColor" fillRule="evenodd" /></svg></span></div></div>
                     </div>
                 </div>
             </div>

        )
    }
}
export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(Pictures);