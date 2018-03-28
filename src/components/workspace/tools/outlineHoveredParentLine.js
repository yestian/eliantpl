import React,{Component} from 'react';

class OutlineHoveredParentLine extends Component{
     render(){
         let data=this.props.data.nodeHelperHoverId;
         if((typeof data!=='undefined' && data.id)){
             let style={
                 left:data.left,
                 top:data.top,
                 width:data.width,
                 height:data.height
             }
             return(
                <div className="bem-OutlineHoveredParentNode wf-outline active" style={style}></div>
            )
        }else{
            return null;
        }
    }
}
export default OutlineHoveredParentLine;
