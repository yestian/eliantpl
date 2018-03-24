import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../actions/icoAction';
import $ from 'jquery';
import AddContents from './addContents';
import { Scrollbars } from 'react-custom-scrollbars';
//添加按钮的产生的二级页面

class Add extends Component{
    componentDidMount(){
        let H=$(window).height()-119;
        $('#addElementsBox').height(H);
    }
     render(){
         let type=this.props.ico.ico_event.addType;
         let active={position: 'relative',display: 'flex',alignItems: 'center',justifyContent: 'center',paddingRight: '5px',paddingLeft: '5px',height: '28px',borderRadius: '2px 0px 0px 2px',color: 'rgb(235, 235, 235)',background: 'rgb(43, 43, 43)',borderWidth: '1px',borderStyle: 'solid',borderColor: 'rgb(33, 33, 33)',boxSizing: 'border-box',outline: 0,cursor: 'default',userSelect: 'none'};
         let normal={position: 'relative',display: 'flex',alignItems: 'center',justifyContent: 'center',paddingRight: '5px',paddingLeft: '5px',height:' 28px',borderRadius: '0px 2px 2px 0px',color: 'rgb(217, 217, 217)',background: 'rgb(94, 94, 94)',borderWidth: '1px',borderStyle: 'solid',borderColor: 'rgb(51, 51, 51)',boxSizing: 'border-box',outline: 0,cursor: 'default',userSelect: 'none'};
         let eleBox={margin: '5px',overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap'};
         let ele={fontWeight: 'bold',fontFamily: '-apple-system, BlinkMacSystemFont, proxima-nova, Roboto, Arial, sans-serif, Georgia, serif',fontSize: '12px'};
         let eleMode={zIndex: 0,minWidth: '28px',flexGrow: 1,flexBasis: 0};
         return(
            <div style={{height:'100%'}}>
                <div className="bem-Panel" style={{display: 'flex',flexGrow: 1,height: '100%',pointerEvents: 'auto'}}>
                    <div className="bem-pane" style={{display: 'flex', flexBasis: '250px', flexDirection: 'column', width: '250px'}}>
                        <div style={{borderBottom: '1px solid rgb(43, 43, 43)',WebkitFontSmoothing: 'auto'}}>
                            <div className="bem-Pane_Head">
                                <div className="bem-Heading bem-Heading-h1 bem-Pane_Title">添加</div>
                                <div className="bem-Pane_Close" style={{marginLeft: 'auto'}}>
                                    <div className="bem-Pane_CloseIcon sprite-main" onClick={()=>this.props.toggleAdd(0)}></div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '100%',flexGrow: 1,maxHeight: '100%',overflow: 'hidden',backgroundColor: 'rgb(64, 64, 64)',boxSizing: 'border-box'}}>
                            <div>
                                <div style={{padding: '5px',backgroundColor: 'rgb(77, 77, 77)'}}>
                                    <div style={{position: 'relative',flexBasis: '100%',display: 'flex',flexDirection: 'row'}}>
                                        <div style={{marginLeft:0,...eleMode}} onClick={(e)=>this.props.toggleAddType(e,!type)} className={type?'':'active'}>
                                            <div style={type?normal:active}>
                                                <div style={eleBox}>
                                                    <div style={ele}>元素</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{marginLeft:'-1px',...eleMode}} onClick={(e)=>this.props.toggleAddType(e,!type)} className={type?'active':''}>
                                            <div data-automation-id="add-tab-symbol-tab" style={type?active:normal}>
                                                <div style={eleBox}>
                                                    <div style={ele}>标记</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="addElementsBox" style={{position: 'relative',overflow: 'hidden',width: '248px'}}>
                                <Scrollbars autoHide>
                                    <div style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                                        <AddContents type={type}/>
                                    </div>
                                </Scrollbars>
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
)(Add);
