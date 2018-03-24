import React, { Component } from 'react';

class LeftBotPages extends Component{
    render() {
        let active='';
        if(!!this.props.ico.showEdges===true){
            active='active';
        }
        return (
            <div className={`button setting sprite-mid edges ${active}`} data-automation-id="left-edges"  onClick={()=>this.props.onClick(!this.props.ico.showEdges)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main chrome-show-edges"></i></div>
        )
    }
}


export default LeftBotPages;
