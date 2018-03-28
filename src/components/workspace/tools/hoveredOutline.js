import React,{Component} from 'react';
import Nodes from '../../../common/config/getNodeRelated';

class HoverOutline extends Component{
     render(){
         let data=this.props.data.index.hoveredId;
         if(typeof data!=='undefined' && data.id){
             let name=Nodes[data.typeId].name;
             let ico=`el-icon ${Nodes[data.typeId].ico}`;
             return(
                <div className={`bem-OutlineHoveredNode hovered-outline wf-outline active${(typeof data.inside!=='undefined')?' inside':''}`} style={{top: data.top,left: data.left,width: data.width,height: data.height,position: 'fixed'}}>
                    <div className="breadcrumbs">
                        <div className="inner">
                            <div className="crumbs clearfix" title="">
                                <div className="crumb current">
                                    <div className="inner">
                                        <span className="icon"><i className={ico}></i></span>
                                        <span className="label">{name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null;
        }

    }
}
export default HoverOutline;
