import React, { Component } from 'react';
import RightSelectorDummy from './rightSelectorDummy';
// import NodeStyleSet from './nodeStyleSet';

class IsDummyTab1 extends Component{
     render(){
        if(1){
            return <RightSelectorDummy/>
        }
        // else{
        //     return <NodeStyleSet/>
        // }
    }
}
export default IsDummyTab1;
