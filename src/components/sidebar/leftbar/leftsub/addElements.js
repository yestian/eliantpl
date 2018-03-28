import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsCreators from '../../../../actions/icoAction';
import $ from 'jquery';
require ('../../../../static/js/iframe.js');
/* eslint-disable */
import draggable from 'jquery-ui/ui/widgets/draggable';
import droppable from 'jquery-ui/ui/widgets/droppable';
import sortable from 'jquery-ui/ui/widgets/sortable';
/* eslint-disable */
import AddEleLayout from './addEleLayout';
import AddEleBasic from './addEleBasic';
import AddEleTypography from './addEleTypography';
import AddEleMedia from './addEleMedia';
import AddEleForms from './addEleForms';
import AddEleComponents from './addEleComponents';

class AddElements extends Component{
    componentDidMount(){
        //iframe plugin

        //--------------end plugin-------------//
        let ifm=$('#site-iframe-next').contents();
        ifm.find('*[data-w-id]').droppable({
            hoverClass: "ui-droppable-hover",
            addClasses: false,
            tolerance: "touch",
            over:this.props.itemDropOver,
            drop:this.props.itemDropStop,
        });
        $("div[data-item-id]").draggable({
            scroll: true,
            iframeScroll:true,
            scrollSensitivity:20,
            iframeFix: true,
            opacity: 0.85,
            helper:function(){return $('.wf-drag-helper')},
            revert: "invalid",
            start:this.props.itemDragStart,
            stop:this.props.itemDragStop,
        });
    }

     render(){
         let arrowD=<svg width={9} height={6} viewBox="0 0 9 6" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M4.5 5L1 1h7z" /></svg>;
         let arrowR=<svg width="6" height="9" viewBox="0 0 6 9" className="bem-Svg " style={{display: 'block',transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M5 4.5L1 8V1z"></path></svg>;
         let s2={display: 'flex', flexDirection: 'column', flex: '0 1 auto'};
         let s3={outline: 0, cursor: 'default', userSelect: 'none', background: 'rgb(43, 43, 43)', borderTop: '1px solid rgb(33, 33, 33)', borderBottom: '1px solid rgb(33, 33, 33)', height: 28, paddingTop: 8, paddingBottom: 8, boxSizing: 'border-box', display: 'flex', alignItems: 'center', flex: '0 1 auto'};
         let s4={width: 'calc(100% - 12px)', color: 'rgb(217, 217, 217)', fontSize: '12px', fontFamily: '-apple-system, BlinkMacSystemFont, proxima-nova, Roboto, Arial, sans-serif, Georgia, serif', lineHeight: '16px', fontWeight: 600}
         let s5={display: 'flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '20px'}
         let s6={display: 'flex', flexWrap: 'wrap'}
        // let {addSubpageToggle,addSubMouseEnter,addSubMark,dragItemDown}=this.props;
         let newdata={
             arrowD:arrowD,
             arrowR:arrowR,
             s2:s2,
             s3:s3,
             s4:s4,
             s5:s5,
             s6:s6,
         }
         return(
             <div>
                <AddEleLayout data={newdata}/>
                <AddEleBasic data={newdata}/>
                <AddEleTypography data={newdata}/>
                <AddEleMedia data={newdata}/>
                <AddEleForms data={newdata}/>
                <AddEleComponents data={newdata}/>
            </div>
        )
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(AddElements);
