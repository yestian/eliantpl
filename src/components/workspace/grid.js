import React,{Component} from 'react';

class Grid extends Component{
     render(){
         let ico=this.props.ico;
         if(ico.showGrid===1){
             let grid1={width: '20px',height: '100%',outline: 'rgba(0, 0, 0, 0.1) solid 1px'}
             let grid2={width: '11px',height: '100%',borderRight: '1px solid rgba(0, 0, 0, 0.04)'}
             let grid3={height: '100%',flexGrow: 1}
             return (
                <div style={{position: 'absolute',top: 0,left: 0,right: 0,bottom: 0,display: 'flex',justifyContent: 'center',zIndex: 2}}>
                    <div mediaquery="main" style={{display: 'flex',height: '100%',width: '980px'}}>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                        <div style={grid1}><div style={grid2}></div></div>
                     </div>
                 </div>
             )
         }else if(ico.showGrid===2){
            let grid1={width: '20px',height: '100%',outline: 'none',backgroundColor: 'rgba(255, 255, 255, 0.05)',boxShadow: 'rgba(0, 0, 0, 0.07) 0px 0px 0px 1px'};
            let grid2={width: '11px',height: '100%',borderRight: '1px solid rgba(0, 0, 0, 0.05)'};
            let grid3={height: '100%',flexGrow: 1,backgroundColor: 'rgba(0, 0, 0, 0.05)'};
            return (
               <div style={{position: 'absolute',top: 0,left: 0,right: 0,bottom: 0,display: 'flex',justifyContent: 'center',zIndex: 2}}>
                   <div mediaquery="main" style={{display: 'flex',height: '100%',width: '980px'}}>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div><div style={grid3}></div>
                       <div style={grid1}><div style={grid2}></div></div>
                    </div>
                </div>
            )
         }else{
             return '';
         }
    }
}
export default Grid;
