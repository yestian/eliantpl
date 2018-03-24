import React, { Component } from 'react';

class LeftCms extends Component{
    render() {
        let ico=this.props.props;
        let active='';
        if(!!ico.leftBtns.showCMS===true){
            active='active';
        }
        return (
            <div className={`button top dynamo ${active}`} data-automation-id="left-sidebar-cms-button" onClick={()=>this.props.onClick(!ico.leftBtns.showCMS)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main chrome-collections"></i></div>
        )
    }
}
export default LeftCms;
