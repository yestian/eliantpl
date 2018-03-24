import React, { Component } from 'react';

class LeftEmpty extends Component{
    render() {
        let active='';
        if(!!this.props.ico.showEmpty===true){
            active='active';
        }
        return (
            <div className={`button setting sprite-mid empty ${active}`} data-automation-id="left-show-empty"  onClick={()=>this.props.onClick(!this.props.ico.showEmpty)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main chrome-show-empty"></i></div>
        )
    }
}
export default LeftEmpty;
