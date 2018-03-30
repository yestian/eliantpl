import React, { Component } from 'react';
import RightSelectorDummy from '../rightSelectorDummy';
import StyleSetBox from './styleSetBox';

class IsDummyTab1 extends Component{
    render(){
        if(typeof this.props.data.index.selectedId!=='undefined'){
            return <StyleSetBox/>
        }else{
            return <RightSelectorDummy/>
        }
   }
}
export default IsDummyTab1;
