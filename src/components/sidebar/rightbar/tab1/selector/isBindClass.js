import React,{Component} from 'react';

import NoClass from './noClass';
import HasClass from './hasClass';

class IsBindClass extends Component{
     render(){
         let hasClass=this.props.hasClass;
         if(hasClass){
             return <HasClass/>
         }else{
             return <NoClass/>
         }
    }
}
export default IsBindClass;
