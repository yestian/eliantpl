import React, { Component } from 'react';
import UnSelectedInput from './unSelectedInput';
import SelectedInput from './selectedInput';

class IsSelectedInput extends Component{
     render(){
         if(typeof this.props.data.index.selectedId!=='undefined'){
             return <SelectedInput/>
         }else{
             return <UnSelectedInput/>
         }
    }
}
export default IsSelectedInput;
