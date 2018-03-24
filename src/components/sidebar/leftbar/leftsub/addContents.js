import React, { Component } from 'react';
import AddElements from './addElements';
import AddSymbois from './addSymbois';

class AddContents extends Component{
     render(){
         if(this.props.type){
            return <AddSymbois/>
        }else{
            return <AddElements/>
        }
    }
}
export default AddContents;
