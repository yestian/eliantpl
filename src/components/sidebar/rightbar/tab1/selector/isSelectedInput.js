import React, { Component } from 'react';
import UnSelectedInput from './unSelectedInput';
import SelectedInput from './selectedInput';

class IsSelectedInput extends Component{
     render(){
         if(this.props.data.index.sid){
             return <SelectedInput/>
         }else{
             return <UnSelectedInput/>
         }
    }
}
export default IsSelectedInput;
