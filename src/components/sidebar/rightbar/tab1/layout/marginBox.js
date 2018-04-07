import React, { Component } from 'react';
// import DragSVG from './dragSVG';
import MarginAuto from './marginAuto';
import Margin from './margin';

class MarginBox extends Component{
     render(){
         return(
            <div className="margin-box offset-box clearfix">
                {/* <DragSVG/> */}
                <MarginAuto onClick={this.props.data} right={this.props.right}/>
                <Margin/>
            </div>
        )
    }
}
export default MarginBox;
