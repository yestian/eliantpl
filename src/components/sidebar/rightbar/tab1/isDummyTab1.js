import React, { Component } from 'react';
import RightSelectorDummy from '../rightSelectorDummy';
import StyleSetBox from './styleSetBox';

class IsDummyTab1 extends Component{
    render(){
        if(this.props.data.index.sid){
            return <StyleSetBox/>
        }else{
            return <RightSelectorDummy/>
        }
   }
}
export default IsDummyTab1;
