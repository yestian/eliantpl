import React,{Component} from 'react';
import $ from 'jquery';


class OutlineDropParentNode extends Component{
     render(){
         let data=this.props.data.ico.ico_event;
         let index=this.props.data.index;

         if(data.dragMode){
             let typeid=index.dropPtypeid;
             let suit=this.props.suit;
                 if(index.dropPid && $.inArray(data.dragId, suit[typeid].accept)!==-1){
                     return(
                         <div className="bem-OutlineDropParentNode wf-outline active inside" style={{top: 0, left: 0, transform: `translate(${index.pleft}px, ${index.ptop}px)`, width: index.pwidth, height: index.pheight, position: 'fixed'}}>
                             {/* 默认为空，鼠标进入iframe才激活 */}
                             <div className="breadcrumbs">
                                 <div className="inner">
                                     <div className="crumbs clearfix">
                                         <div className="crumb current">
                                             <div className="inner">
                                                 <span className="icon"><i className="el-icon n-body"></i></span>
                                                 <span className="label">{suit[typeid].name.toUpperCase()}</span>
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
        }else{
            return null;
        }

    }
}
export default OutlineDropParentNode;
