import React, { Component } from 'react';

class Columns extends Component{
 
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='多列';
    let svg=<svg width={62} height={50} viewBox="0 0 62 50" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".2" fill="currentColor" d="M14 10h16v34H14zm19 0h16v34H33z" /><g fill="currentColor"><path d="M14 10h2v4h-2zm14 0h2v4h-2zm-12 0h2v2h-2zm4 0h4v2h-4zm0 32h4v2h-4z" /><path d="M26 10h4v2h-4zm2 30h2v4h-2zm-14 0h2v4h-2zm0-18h2v4h-2zm0-6h2v4h-2zm14 6h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z" /><path d="M14 42h4v2h-4zm19-32h2v4h-2zm14 0h2v4h-2zm-12 0h2v2h-2zm4 0h4v2h-4zm0 32h4v2h-4z" /><path d="M45 10h4v2h-4zm2 30h2v4h-2zm-14 0h2v4h-2zm0-18h2v4h-2zm0-6h2v4h-2zm14 6h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm-14 6h2v4h-2zm14 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z" /><path d="M33 42h4v2h-4z" /></g><path opacity=".25" fill="currentColor" d="M59 1H3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM14.5 3c.8 0 1.5.7 1.5 1.5S15.3 6 14.5 6 13 5.3 13 4.5 13.7 3 14.5 3zm-5 0c.8 0 1.5.7 1.5 1.5S10.3 6 9.5 6 8 5.3 8 4.5 8.7 3 9.5 3zm-5 0C5.3 3 6 3.7 6 4.5S5.3 6 4.5 6 3 5.3 3 4.5 3.7 3 4.5 3zM59 47H3V8h56v39z" /><path opacity=".4" d="M30 10v34H14V10h16m1-1H13v36h18V9zm18 1v34H33V10h16m1-1H32v36h18V9z" /></svg>;
    //--------------------------------------------
        let s1={color: 'rgb(217, 217, 217)', fontFamily: 'Arial, sans-serif', fontSize: '11px', lineHeight: '16px', WebkitFontSmoothing: 'antialiased', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '92px', cursor: '-webkit-grab'}
        let s2={display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 40};
        let s3={display: 'flex', flexDirection: 'column', fontSize: '11px', textShadow: 'none', padding: '6px 6px 0px', justifyContent: 'center', lineHeight: '1.2', textAlign: 'center', cursor: 'inherit', userSelect: 'none'};
        let color1='rgb(64, 64, 64)';
        let color2='rgb(77,77,77)';
        let color3='rgb(166, 166, 166)';
        let color4='rgb(217, 217, 217)';
        //如果鼠标进入，而且showhover====1，则显示mouseetner效果
        return(
            <div style={{...s1, backgroundColor: isEnter?color2:color1}}>
                <div style={s2}>{svg}</div>
                <div style={{...s3, color: isEnter?color4:color3}}>{title}</div>
                {isEnter?data.qMark:null}
            </div>
       )
   }
}
export default Columns;
