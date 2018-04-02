import React,{Component} from "react";

class ParentPerspective extends Component{
    render(){
        return(
            <div className="parent-perspective clearfix"><svg width={15} height={15} viewBox="0 0 15 15" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)', marginLeft: 3, color: 'rgb(217, 217, 217)'}}><path d="M13 7a5.5 5.5 0 0 0-5-5V0H7v2a5.5 5.5 0 0 0-5 5H0v1h2a5.5 5.5 0 0 0 5 5v2h1v-2a5.5 5.5 0 0 0 5-5h2V7zm-1 1a4.48 4.48 0 0 1-4 3.95V10H7v1.95A4.48 4.48 0 0 1 3.05 8H5V7H3.05A4.48 4.48 0 0 1 7 3.05V5h1V3.05A4.48 4.48 0 0 1 11.95 7H10v1zM7.5 6.72a.78.78 0 1 0 .78.78.78.78 0 0 0-.78-.78z" fill="currentColor" /></svg><div className="parent-perspective-label">Parent Perspective:</div><div className="parent-perspective-class"><div className="parent-perspective-class-value preview">Not Set</div></div></div>

        )
    }
}
export default ParentPerspective;
