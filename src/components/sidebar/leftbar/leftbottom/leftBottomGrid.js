import React, { Component } from 'react';

class LeftGrid extends Component{
    render() {
        let active='';
        let push='';
        let grid=this.props.ico.showGrid;
        switch(grid){
            case 0:
            active='none';
            push=1;
            break;
            case 1:
            active='basic';
            push=2;
            break;
            case 2:
            active='filled';
            push=0;
            break;
            default:
            active='none';
            push=1;
        }
        return (
            <div className={`button setting sprite-mid grid ${active}`} data-automation-id="left-show-grid"  onClick={()=>this.props.onClick(push)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main chrome-show-grid"></i></div>
        )
    }
}
export default LeftGrid;
