import React,{Component} from 'react';

class DragGhost extends Component{
     render(){
         return(
            <div className="drag-ghost visible" onClick={this.props.onClick}></div>
        )
    }
}
export default DragGhost;
