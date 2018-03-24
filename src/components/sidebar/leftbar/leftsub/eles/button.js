import React, { Component } from 'react';

class Button extends Component{

    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='按钮';
       let svg=<svg width={59} height={31} viewBox="0 0 59 31" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M56 0H3C1.3 0 0 1.3 0 3v25c0 1.7 1.3 3 3 3h53c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z" /><path fill="currentColor" d="M10 16.7H8.8v1.6H10c.6 0 .8-.4.8-.8s-.2-.8-.8-.8zm29.8-2.9c-1.2 0-2.1 1-2.1 2.3 0 1.3.9 2.4 2.1 2.4 1.2 0 2.1-1 2.1-2.4.1-1.4-.9-2.3-2.1-2.3zm-29.3.7c0-.4-.2-.7-.7-.7h-1v1.4h1c.5 0 .7-.4.7-.7zM56 1H3c-1.1 0-2 .9-2 2v25c0 1.1.9 2 2 2h53c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM9.8 20H6.9v-7.9h2.9c1.6 0 2.7.7 2.7 2.1 0 .7-.3 1.3-.9 1.7.9.3 1.2 1.1 1.2 1.8 0 1.7-1.4 2.3-3 2.3zm10.8-2.9c0 1.8-1.3 3-3.3 3-2 0-3.3-1.3-3.3-3v-5h2v5c0 .8.5 1.3 1.4 1.3s1.4-.4 1.4-1.3v-5h1.9v5zm7.6-3.3h-2.4V20h-1.9v-6.2h-2.4v-1.7h6.7v1.7zm7.1 0h-2.4V20H31v-6.2h-2.4v-1.7h6.7v1.7zm4.5 6.3c-2.4 0-4.1-1.8-4.1-4.1s1.7-4 4.1-4c2.4 0 4.1 1.8 4.1 4 .1 2.3-1.7 4.1-4.1 4.1zm12.1-.1H50l-2.2-3.7c-.3-.5-.7-1.3-.7-1.3s.1.8.1 1.3V20h-1.9v-7.9h1.9l2.2 3.7c.3.5.7 1.3.7 1.3s-.1-.8-.1-1.3v-3.7h1.9V20z" /></svg>;
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
export default Button;
