import React,{Component} from 'react';

class TopbarIco extends Component{
    render(){
        return(
            <div className="bem-TopBar_Ribbon" onClick={()=>this.props.onClick(!this.props.topBarStatus)}>
                <svg width="12" height="14" viewBox="0 0 12 14" className="bem-Svg bem-TopBar_Ribbon_Icon bem-TopBar_Body_Button_Icon" style={{transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M1 12.995h10V11H1v1.995zM5 9h2V6h4L6 1 1 6h4v3z"></path></svg>
            </div>
        )
    }
}

export default TopbarIco;
