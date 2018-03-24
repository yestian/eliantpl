import React,{Component} from 'react';

class TopbarIco extends Component{
    render(){
        let ico=this.props.icoprops;
        if(!!ico.eyeStatus===true){
            return(
                <div className="bem-TopBar_Body_Button bem-TopBar_Body_HidePreviewButton" onClick={()=>this.props.onClick(!ico.topBarStatus)}>
                    <svg width="12" height="14" viewBox="0 0 12 14" className="bem-Svg bem-TopBar_Body_HidePreviewButton_Icon  bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}>
                        <path fill="currentColor" d="M1 12.995h10V11H1v1.995zM5 9h2V6h4L6 1 1 6h4v3z"></path>
                    </svg>
                </div>
            )
        }else{
            return '';
        }

    }
}

export default TopbarIco;
