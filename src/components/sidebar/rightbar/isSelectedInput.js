import React, { Component } from 'react';
import UnSelectedInput from './unSelectedInput';
// import SelectedInput from './selectedInput';

class IsSelectedInput extends Component{
     render(){
        if(1){
            return <UnSelectedInput/>
        }else{
            return '';
            // return <SelectedInput/>
        }
    }
}
export default IsSelectedInput;
