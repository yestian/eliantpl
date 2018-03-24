import React, { Component } from 'react';

class TopbarCenter extends Component{

    render(){
        let media=this.props.media.mediaType;
        return(
            <div className="bem-TopBar_Body_Group">
                <div className={`bem-TopBar_Body_Button bem-TopBar_Body_MediaQueryButton ${media===1?'bem-TopBar_Body_MediaQueryButton-active':''}`} data-automation-id="media-pc" onClick={(e)=>this.props.onClick(e,1)}
                onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                    <svg width="33" height="23" viewBox="0 0 33 23" className="bem-Svg bem-TopBar_Body_MediaQueryButton_Icon bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M7 4h19v14H7z" opacity=".3"></path><path fill="currentColor" d="M29 19H1v1.563h.02C1.135 21.358 3.32 22 6 22h21c2.68 0 4.866-.642 4.98-1.437H32V19h-3zM6 3h21v16h2V3c0-1.1-.9-2-2-2H5.947C4.847 1 4 1.9 4 3v16h2V3z"></path></svg>
                </div>
                <div className={`bem-TopBar_Body_Button bem-TopBar_Body_MediaQueryButton ${media===2?'bem-TopBar_Body_MediaQueryButton-active':''}`} data-automation-id="media-tablet" onClick={(e)=>this.props.onClick(e,2)}
                onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                    <svg width="20" height="24" viewBox="0 0 20 24" className="bem-Svg bem-TopBar_Body_MediaQueryButton_Icon bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M17 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-6 21H9v-2h2v2zm6-2.952H3V3h14v16.048z"></path><path fill="currentColor" d="M4 4h12v14H4z" opacity=".3"></path></svg>
                </div>
                <div className={`bem-TopBar_Body_Button bem-TopBar_Body_MediaQueryButton ${media===3?'bem-TopBar_Body_MediaQueryButton-active':''}`} data-automation-id="media-landscape" onClick={(e)=>this.props.onClick(e,3)}
                onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                    <svg width="20" height="14" viewBox="0 0 20 14" className="bem-Svg bem-TopBar_Body_MediaQueryButton_Icon bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M6 4h10v6H6z" opacity=".3"></path><path fill="currentColor" d="M17 1H3.048C1.948 1 1 1.9 1 3v8c0 1.1.947 2 2.048 2H17c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM4 8H2V6h2v2zm13 3H5V3h12v8z"></path></svg>
                </div>
                <div className={`bem-TopBar_Body_Button bem-TopBar_Body_MediaQueryButton ${media===4?'bem-TopBar_Body_MediaQueryButton-active':''}`} data-automation-id="media-portrait" onClick={(e)=>this.props.onClick(e,4)}
                onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                    <svg width="14" height="20" viewBox="0 0 14 20" className="bem-Svg bem-TopBar_Body_MediaQueryButton_Icon bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M4 4h6v10H4z" opacity=".3"></path><path fill="currentColor" d="M11 1H3c-1.1 0-2 .9-2 2v13.952C1 18.052 1.9 19 3 19h8c1.1 0 2-.947 2-2.048V3c0-1.1-.9-2-2-2zM8 18H6v-2h2v2zm3-3H3V3h8v12z"></path></svg>
                </div>
            </div>
        )
    }
}
export default TopbarCenter;
