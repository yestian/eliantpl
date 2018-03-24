import React, { Component } from 'react';

class TopbarStatus extends Component{
    render(){
        let data=this.props.data;
        if(!data.eyeStatus){
            return(
                <div className="bem-TopBar_Body_SyncStatus bem-TopBar_Body_SyncStatus-saved" data-automation-id="change-saved" onClick={(e)=>this.props.onClick(e)}
                onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                    <svg width="20" height="20" viewBox="0 0 20 20" className="bem-Svg bem-TopBar_Body_SyncStatus_Icon bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-.935 13.46l-4.097-3.994 1.396-1.432 2.57 2.506 4.556-5.315 1.518 1.302-5.943 6.933z"></path></svg>
                </div>
            )
        }else{
            return '';
        }

    }
}
export default TopbarStatus;
