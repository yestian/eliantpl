import React, { Component } from 'react';

class Tabs extends Component{
 
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='选项卡';
       let svg=<svg width={53} height={39} viewBox="0 0 53 39" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M3 10h47v26H3z" opacity=".2" /><path fill="currentColor" d="M50 10v26H3V10h47m2-2H1v30h51V8z" /><path d="M10 22h32v2H10zm0-4h32v2H10zm0 8h15v2H10z" fill="currentColor" /><path opacity=".4" d="M45 7V1.8c0-1-.8-1.8-1.8-1.8H31.8c-1 0-1.8.8-1.8 1.8 0-1-.8-1.8-1.8-1.8H16.8c-1 0-1.8.8-1.8 1.8 0-1-.8-1.8-1.8-1.8H1.8C.8 0 0 .8 0 1.8V39h53V7h-8zM31 1.8c0-.4.4-.8.8-.8h11.4c.4 0 .8.4.8.8V6H31V1.8zm-15 0c0-.4.4-.8.8-.8h11.4c.4 0 .8.4.8.8V6H16V1.8zm-15 0c0-.4.4-.8.8-.8h11.4c.4 0 .8.4.8.8V7H1V1.8zM52 38H1V8h51v30z" /><path fill="currentColor" d="M13.2 1H1.8c-.4 0-.8.4-.8.8V8h13V1.8c0-.4-.4-.8-.8-.8zm15 0H16.8c-.4 0-.8.4-.8.8V6h13V1.8c0-.4-.4-.8-.8-.8zm15 0H31.8c-.4 0-.8.4-.8.8V6h13V1.8c0-.4-.4-.8-.8-.8z" /></svg>;
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
export default Tabs;
