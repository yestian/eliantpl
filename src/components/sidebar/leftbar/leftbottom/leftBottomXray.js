import React, { Component } from 'react';

class LeftXray extends Component{
    render() {
        let active='';
        if(!!this.props.ico.showXray===true){
            active='active';
        }
        return (
            <div className={`button setting sprite-mid xray with-divider ${active}`} data-automation-id="left-xray"  onClick={(e)=>this.props.onClick(!this.props.ico.showXray)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main chrome-show-xray"></i></div>
        )
    }
}
export default LeftXray;
