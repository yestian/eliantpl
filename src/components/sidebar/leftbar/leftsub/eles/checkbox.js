import React, { Component } from 'react';

class Checkbox extends Component{
  
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;  
        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='复选框';
    let svg=<svg width={28} height={24} viewBox="0 0 28 24" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".2" fill="currentColor" d="M3 1h22v22H3z" /><path opacity=".4" d="M25 1v22H3V1h22m1-1H2v24h24V0z" /><path fill="currentColor" d="M3 1v22h22V7.3c-.7.7-1.3 1.4-2 2.2V21H5V3h18c.6-.5 1.3-.9 2-1.4V1H3zm20 5.3c.6-.5 1.3-.9 2-1.4V4c-.7.7-1.3 1.5-2 2.3z" /><path fill="currentColor" d="M7.4 10.7l1.7-1.6c2 1 3.3 1.7 5.5 3.3 4.2-4.8 7-7.2 12.2-10.5l.6 1.3c-4.3 3.7-7.4 7.9-11.9 16-2.8-3.2-4.7-5.3-8.1-8.5z" /></svg>;
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
export default Checkbox;
