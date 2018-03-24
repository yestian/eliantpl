import React, { Component } from 'react';

class LeftAdd extends Component{
    render() {
        // console.log(this.props);
        let ico=this.props.props;
        let active='';
        if(ico.leftBtns.showAdds){
            active='active';
        }
        return (
            <div className={`button top add ${active}`} data-automation-id="left-sidebar-add-button"
            onClick={()=>this.props.onClick(!ico.leftBtns.showAdds)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                <i className="icon-main chrome-add"></i>
            </div>
        )
    }
}
export default LeftAdd;
