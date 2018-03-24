import React, { Component } from 'react';

class Tab4Index1 extends Component{
     render(){
         let A1={transform: 'translateY(992px)',position: 'absolute',left: 0,right: 0,zIndex: 5}
         let S1={borderTop: '0px',minHeight: '31px',padding: '1px 30px 0px 16px',backgroundColor: 'rgb(64, 64, 64)'}
         let S2={position: 'absolute',marginTop: '3px',right: '3px',padding: '4px',color: 'rgb(166, 166, 166)',outline: 0,cursor: 'default',userSelect: 'none'}
         let S3={display: 'block',transform: 'translate(0px, 0px)'}
         let S4={display: 'block',transform: 'translate(0px, 0px)',float: 'left',opacity: 0.6,margin: '2px 0px 0px -10px'}
         let S5={display: 'inline-block',maxWidth: '208px',marginTop: '2px',marginLeft: '4px'}
         let S6={cursor: 'inherit',userSelect: 'none',WebkitFontSmoothing: 'antialiased',display: 'inline-flex',alignItems: 'center',justifyContent: 'center',boxSizing: 'border-box',minWidth: '0px',maxWidth: '100%',paddingLeft: '6px',paddingRight: '6px',borderRadius: '2px',height: '24px',background: 'rgb(59, 121, 195)',color: 'rgba(255, 255, 255, 0.9)',position: 'relative',fontSize: '11px',textShadow: 'none',boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px',overflow: 'hidden'}
         let S7={overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap',opacity: 1,fontFamily: 'inherit',fontSize: 'inherit',fontWeight: 'inherit',outline: 'none'}
         return(
             <div index="1" total="5" style={A1}>
                 <div depth="1" style={S1}>
                     <div tabIndex="0" style={S2}>
                         <svg width="12" height="12" viewBox="0 0 12 12" className="bem-Svg " style={S3}><path fill="currentColor" d="M10.838 3.7L8.53 6.01a.9.9 0 0 1-1.27 0L5.993 4.74a.902.902 0 0 1 0-1.27L8.3 1.164A3.71 3.71 0 0 0 7.27 1a3.73 3.73 0 0 0-3.73 3.73c0 .473.098.92.26 1.336L1.073 9.138l1.737 1.737 2.62-2.322.484-.358c.422.164.876.264 1.355.264A3.73 3.73 0 0 0 11 4.73c0-.36-.067-.7-.162-1.03z"></path></svg>
                     </div>
                     <svg width="10" height="17" viewBox="0 0 10 17" className="bem-Svg " style={S4}><path fill="currentColor" d="M9 11H6V8H4v3H1v2h3v3h2v-3h3z"></path><path fill="currentColor" d="M4 1h2v4H4z" opacity=".3"></path></svg>
                     <div style={S5}>
                         <div color="#3b79c3" style={S6}><span style={S7}>在顶部</span></div>
                     </div>
                </div>
            </div>
        )
    }
}
export default Tab4Index1;
