import React, { Component } from 'react';

class Select extends Component{
 
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='下拉列表';
       let svg=<svg width={60} height={23} viewBox="0 0 60 23" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M57 0H3C1.3 0 0 1.3 0 3v17c0 1.7 1.3 3 3 3h54c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM32 13H8v-2h24v2z" /><path fill="currentColor" d="M57 1H3c-1.1 0-2 .9-2 2v17c0 1.1.9 2 2 2h54c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM32 13H8v-2h24v2zm17 1l-4-4h8l-4 4z" /><path opacity=".75" fill="currentColor" d="M8 11h24v2H8z" /></svg>;
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
export default Select;
