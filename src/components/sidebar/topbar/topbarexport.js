import React, { Component } from 'react';

class TopbarExport extends Component{
    render(){
        let data=this.props.data;
        if(!data.eyeStatus){
            return(
                <div data-automation-id="export-code" className="bem-TopBar_Body_Button bem-TopBar_Body_ExportButton" onClick={(e)=>this.props.onClick(e)}
                onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                    <svg width="22" height="16" viewBox="0 0 22 16" className="bem-Svg bem-TopBar_Body_ExportButton_Icon bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M4.873 8.065L9.18 1.042H5.31L1 8.065 5.308 15H9.18L4.874 8.065zM16.69 1.042h-3.872l4.308 7.023L12.816 15h3.874L21 8.065l-4.31-7.023z"></path></svg>
                </div>
            )
        }else{
            return '';
        }

    }
}
export default TopbarExport;
