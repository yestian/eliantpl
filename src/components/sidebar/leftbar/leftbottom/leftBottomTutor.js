import React, { Component } from 'react';

class LeftTutor extends Component{
    render() {
        let data=this.props.ico.leftBtns;
        let active='';
        if(data.showTutor){
            active='active';
        }
        return (
            <div className={`button tutorials ${active}`} data-automation-id="left-video"  onClick={()=>this.props.onClick(!data.showTutor)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main ftu-video-big-blue exclaim"></i><i className="icon-main ftu-video-big"></i></div>
        )
    }
}
export default LeftTutor;
