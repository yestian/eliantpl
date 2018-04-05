import React,{Component} from "react";
import {connect} from "react-redux";
import { bindActionCreators} from "redux";
import * as actionsCreators from "../../../../../actions/right";
import PaddingSize from './paddingSize';

class Padding extends Component{
    render(){
        // let right=this.props.right;
        let {showNodePadding,nodePaddingClick}=this.props;
        return(
            <div className="padding">
                <div className="handle sprite-mid top reverse guidance-panel-wrapper" style={{opacity: 0}}><div className="guidance-panel-child" /></div>
                <div className="handle sprite-mid top reverse" title="修改上填充" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    onMouseEnter={()=>{showNodePadding(1)}}
                    onMouseLeave={()=>{showNodePadding(0)}}
                    onMouseDown={()=>{nodePaddingClick(1,1)}}
                    onMouseUp={()=>{nodePaddingClick(0)}}
                    ><svg width={16} height={9} viewBox="0 0 16 9" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M3 3h10v1H3zM1 1h14v1H1zm4 4h6v1H5zm2 2h2v1H7z" fill="currentColor" /></svg></div>

                <div className="handle sprite-mid right vert reverse" title="修改右填充" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    onMouseEnter={()=>{showNodePadding(1)}}
                    onMouseLeave={()=>{showNodePadding(0)}}
                    onMouseDown={()=>{nodePaddingClick(1,2)}}
                    onMouseUp={()=>{nodePaddingClick(0)}}
                    ><svg width={9} height={16} viewBox="0 0 9 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M5 3h1v10H5zm2-2h1v14H7zM3 5h1v6H3zM1 7h1v2H1z" fill="currentColor" /></svg></div>

                <div className="handle sprite-mid bottom reverse" title="修改下填充" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    onMouseEnter={()=>{showNodePadding(1)}}
                    onMouseLeave={()=>{showNodePadding(0)}}
                    onMouseDown={()=>{nodePaddingClick(1,3)}}
                    onMouseUp={()=>{nodePaddingClick(0)}}
                    ><svg width={16} height={9} viewBox="0 0 16 9" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M3 5h10v1H3zM1 7h14v1H1zm4-4h6v1H5zm2-2h2v1H7z" fill="currentColor" /></svg><svg width={35} height={7} viewBox="0 0 35 7" className="bem-Svg text" style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M4 2h1v2H4v1H2v1H1V1h3v1zM2 4h2V2H2v2zm5-2V1h2v1h1v4H9V5H7v1H6V2h1zm2 2V2H7v2h2zm5 2h-3V1h3v1h1v3h-1v1zm0-1V2h-2v3h2zm5 1h-3V1h3v1h1v3h-1v1zm0-1V2h-2v3h2zm4 0h1v1h-3V5h1V2h-1V1h3v1h-1v3zm3 1h-1V1h1v1h1v1h-1v3zm1-2V3h1V1h1v5h-1V4h-1zm4 1h-1V2h1v3zm0-3V1h3v1h-3zm3 1h-2v1h1v1h-2v1h3V3z" fill="currentColor" /></svg></div>

                <div className="handle sprite-mid left vert reverse" title="修改左填充" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    onMouseEnter={()=>{showNodePadding(1)}}
                    onMouseLeave={()=>{showNodePadding(0)}}
                    onMouseDown={()=>{nodePaddingClick(1,4)}}
                    onMouseUp={()=>{nodePaddingClick(0)}}
                    ><svg width={9} height={16} viewBox="0 0 9 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M3 3h1v10H3zM1 1h1v14H1zm4 4h1v6H5zm2 2h1v2H7z" fill="currentColor" /></svg></div>

                <PaddingSize data={this.props}/>
            </div>
        )
    }
}
export default connect(state=>state,dispatch=>bindActionCreators(actionsCreators,dispatch))(Padding);
