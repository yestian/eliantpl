import React, { Component } from 'react';

class TopbarDo extends Component{
    render(){
        let data=this.props.data;
        if(!data.eyeStatus){
            return(
                <div className="bem-TopBar_Body_UndoRedo">
                    <div data-automation-id="topbar-undo" className="bem-TopBar_Body_Button bem-TopBar_Body_UndoRedo_Undo " onClick={(e)=>this.props.onClick(e)}
                    onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                    onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                        <svg width="17" height="15" viewBox="0 0 17 15" className="bem-Svg bem-TopBar_Body_UndoRedo_Undo_Icon bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M7 5.035V1L1 7.498 7 14V9.957c2.17-.03 7.258.312 8.562 4.043h.436S15.858 5.624 7 5.035z"></path></svg>
                    </div>
                    <div data-automation-id="topbar-redo" className="bem-TopBar_Body_Button bem-TopBar_Body_UndoRedo_Redo " onClick={(e)=>this.props.onClick(e)}
                    onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                    onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                        <svg width="17" height="15" viewBox="0 0 17 15" className="bem-Svg bem-TopBar_Body_UndoRedo_Redo_Icon bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M16 7.498L10 1v4.035C1.14 5.625 1.002 14 1.002 14h.435C2.742 10.27 7.83 9.928 10 9.957V14l6-6.502z"></path></svg>
                    </div>
                </div>
            )
        }else{
            return '';
        }

    }
}
export default TopbarDo;
