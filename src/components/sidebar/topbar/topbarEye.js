import React, { Component } from 'react';

//需求：鼠标进入图标，延迟1秒添加文字提示框，文字提示框
//需求：鼠标离开，销毁文字提示框
class TopbarEye extends Component{
    render(){
        let active=null;
        let pr=this.props.prop;
        if(!!pr.eyeStatus===true){
            active='bem-TopBar_Body_PreviewButton-active';
        }else{
            active='';
        }
        return(
            <div data-automation-id="preview-mode-button" className={`bem-TopBar_Body_Button bem-TopBar_Body_PreviewButton ${active}`} onClick={(e)=>this.props.onClick(e,!pr.eyeStatus,!pr.botBarStatus)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                <svg width="18" height="14" viewBox="0 0 18 14" className="bem-Svg bem-TopBar_Body_PreviewButton_Icon bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M9.028 1C4.596 1 1 6.94 1 6.94s3.596 6.1 8.028 6.1c4.434 0 8.027-6.1 8.027-6.1S13.462 1 9.028 1zM9 11a4 4 0 0 1-4-4c0-2.027 1.512-3.683 3.467-3.946A2.48 2.48 0 0 0 8 4.5 2.5 2.5 0 0 0 10.5 7a2.49 2.49 0 0 0 2.234-1.4c.164.437.266.906.266 1.4a4 4 0 0 1-4 4z"></path></svg>
            </div>
        )
    }
}

export default TopbarEye;
