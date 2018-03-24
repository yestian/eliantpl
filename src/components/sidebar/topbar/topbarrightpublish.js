import React, { Component } from 'react';

class TopbarPublish extends Component{
    render(){
        return(
            <div data-automation-id="publish-menu-button" className="bem-TopBar_Body_Button bem-TopBar_Body_PublishButton" onClick={(e)=>this.props.onClick(e)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                <svg width="18" height="18" viewBox="0 0 18 18" className="bem-Svg bem-TopBar_Body_PublishButton_Icon bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}><path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M12.995 9.076c0-.026.005-.05.005-.076 0-3.304-1.582-6.22-4-8-2.418 1.78-4 4.696-4 8 0 .026.004.05.005.076A7.99 7.99 0 0 0 1 16h2.012a7.526 7.526 0 0 1 3.095-2.406A9.797 9.797 0 0 0 9 17a9.797 9.797 0 0 0 2.893-3.406A7.526 7.526 0 0 1 14.988 16H17a7.99 7.99 0 0 0-4.005-6.924zM9 4.436a1.564 1.564 0 0 1 0 3.13 1.564 1.564 0 1 1 0-3.13z"></path></svg>
                <span className="bem-Text ">发布</span>
                <svg width="11" height="7" viewBox="0 0 11 7" className="bem-Svg bem-TopBar_Body_PublishButton_ChevronDown bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" d="M9 2L5.5 5 2 2"></path></svg>
            </div>
        )
    }
}
export default TopbarPublish;
