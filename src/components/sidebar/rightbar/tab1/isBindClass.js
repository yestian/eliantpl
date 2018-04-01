import React,{Component} from 'react';

import UnBindClass from './unBindClass';
import BindedClass from './bindedClass';

class IsBindClass extends Component{
     render(){
         let data=this.props.data;
         if(typeof data.used!=='undefined' && data.used){
             return <BindedClass data={data}/>
         }else{
             return <UnBindClass/>
         }
    }
}
export default IsBindClass;
