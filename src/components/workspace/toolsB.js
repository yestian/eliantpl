import React,{Component} from 'react';

class ToolsB extends Component{
     render(){
         return(
            <div style={{height: '100%',width: '100%',position: 'absolute',pointerEvents: 'none',zIndex: 13}}>
                <div className="kit-scrollbar with-arrows" style={{width: '10px',position: 'absolute',top: 0,right: '-10px',height: '100%',pointerEvents: 'all',overflowY: 'scroll',overflowX: 'hidden'}}>
                    <div style={{width: '1px',height: '433px'}}></div>
                </div>
            </div>
        )
    }
}
export default ToolsB;
