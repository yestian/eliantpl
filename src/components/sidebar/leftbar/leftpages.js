import React, { Component } from 'react';

class LeftPages extends Component{
    render() {
        let ico=this.props.props;
        let active='';
        if(!!ico.leftBtns.showPages===true){
            active='active';
        }
        return (
            <div className={`button top ${active}`} data-automation-id="show-pages" onClick={()=>this.props.onClick(!ico.leftBtns.showPages)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main chrome-pages"></i></div>
        )
    }
}
export default LeftPages;
