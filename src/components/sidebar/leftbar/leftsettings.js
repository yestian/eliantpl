import React, { Component } from 'react';

class LogoFlux extends Component{
    render() {
        let ico=this.props.props;
        let active='';
        if(!!ico.leftBtns.showSettings===true){
            active='active';
        }
        return (
            <div className={`button top ${active}`} data-automation-id="left-settings"  onClick={()=>this.props.onClick(!ico.leftBtns.showSettings)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                <svg width="19" height="19" viewBox="0 0 19 19" className="bem-Svg" style={{display: 'block',transform: 'translate(0px, 0px)',position: 'relative',left: '1px'}}><path d="M19 8.313v2.377l-3.173.61a6.54 6.54 0 0 1-.58 1.402l1.812 2.675-1.68 1.678-2.68-1.81a6.516 6.516 0 0 1-1.406.58L10.684 19h-2.37l-.61-3.17a6.575 6.575 0 0 1-1.404-.58l-2.68 1.81-1.68-1.68 1.81-2.674a6.63 6.63 0 0 1-.58-1.406L0 10.688V8.313L3.174 7.7c.137-.488.332-.96.58-1.403L1.94 3.62l1.68-1.678 2.676 1.81A6.56 6.56 0 0 1 7.7 3.174L8.312 0h2.377l.61 3.172a6.6 6.6 0 0 1 1.4.578l2.674-1.81 1.676 1.68-1.81 2.677c.25.443.443.914.58 1.404l3.18.62zM6.47 11.246a3.498 3.498 0 1 0 6.062-3.496 3.498 3.498 0 0 0-6.06 3.496z" fill="currentColor"></path></svg>
            </div>
        )
    }
}
export default LogoFlux;
