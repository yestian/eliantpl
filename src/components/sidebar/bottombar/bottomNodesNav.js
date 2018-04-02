import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../actions/index';
import Nodes from '../../../common/config/getNodeRelated.json';
import $ from 'jquery';

class BottomNodesNav extends Component{
     render(){
         let data=this.props.index;

         let leftArrow=<svg width="7" height="28" viewBox="0 0 7 28" className="bem-Svg left notch" style={{display: 'block',transform: 'translate(0px, 0px)',color: 'rgb(235, 235, 235)'}}><path fill="currentColor" d="M6.5 14L.5 0H0v28h.5z"></path><path fill="#858585" d="M1 0H0l6 14-6 14h1l6-14z"></path></svg>;
         let rightArrow=<svg width="7" height="28" viewBox="0 0 7 28" className="bem-Svg right notch" style={{display: 'block',transform: 'translate(0px, 0px)',color: 'rgb(235, 235, 235)'}}><path fill="currentColor" d="M.5 0l6 14-6 14H7V0z"></path><path fill="#858585" d="M1 0H0l6 14-6 14h1l6-14z"></path></svg>;
         //循环得出所有节点树
         let id=this.props.index.sid;
         let node=$('#site-iframe-next').contents().find("[data-id="+id+"]");
         let bodyId=data.siteData.bodyId;
             let nodeNav=[];
             let typeId=parseInt(node.attr('data-type'),10);
             while(typeId!==0){
                 let ico=Nodes[typeId].ico;
                 let name=Nodes[typeId].name;
                 nodeNav.push({ico:ico,name:name,id:id});
                 node=node.parent();
                 id=node.attr('data-id');
                 typeId=parseInt(node.attr('data-type'),10);
             }
             let style={
                 backgroundColor:'rgb(235, 235, 235)'
             }
             let style1={
                 backgroundColor:'rgb(255, 255, 255)',
                 zIndex:1
             }
         return(
        <div className="bem-BottomBar">
            <div className="bem-BottomBar_Main">
                <div className="bem-Breadcrumbs">
                    <div className="bem-Breadcrumbs_Container">
                        {
                            nodeNav.map((evt,i)=>(
                                <div key={i} className="bem-Breadcrumbs_Breadcrumb"
                                    style={data.bottomNodeHoveredIndex===(nodeNav.length-i+1)?style1:style}
                                    onMouseEnter={()=>{this.props.bottomNodesNavMouseEnter(nodeNav.length-i+1)}}
                                    onMouseLeave={this.props.bottomNodesNavMouseLeave}
                                    onClick={(e)=>{this.props.bottomNodesNavClick(e,evt.id,i)}}
                                    >
                                    {leftArrow}
                                    <div className="bem-Breadcrumbs_Breadcrumb_Inner "><i className={`el-icon ${evt.ico}`}></i><div className="label">{evt.name}</div></div>
                                    {rightArrow}
                                </div>
                            ))
                        }
                        <div className="bem-Breadcrumbs_Breadcrumb"
                            style={data.bottomNodeHoveredIndex===1?style1:style}
                            onMouseEnter={()=>{this.props.bottomNodesNavMouseEnter(1)}}
                            onMouseLeave={this.props.bottomNodesNavMouseLeave}
                            onClick={(e)=>{this.props.bottomNodesNavClick(e,bodyId,99)}}
                            >
                            <div className="bem-Breadcrumbs_Breadcrumb_Inner last"><i className="el-icon n-body"></i><div className="label">Body</div></div>
                            {rightArrow}
                        </div>
                    </div>
                </div>
                <div className="bem-BottomBar_RealtimeSiteViewers">
                    <div className="bem-ProfilePictures" style={{display: 'flex',paddingLeft: '6.6px',opacity: 0.1}}></div>
                </div>
            </div>
        </div>
        )
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(BottomNodesNav);
