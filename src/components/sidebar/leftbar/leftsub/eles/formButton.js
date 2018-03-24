import React, { Component } from 'react';

class FormButton extends Component{
  
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='表单按钮';
       let svg=<svg width={59} height={31} viewBox="0 0 59 31" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M56 0H3C1.3 0 0 1.3 0 3v25c0 1.7 1.3 3 3 3h53c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z" /><path fill="currentColor" d="M27 15.3c.2-.1.3-.3.3-.7s-.1-.6-.3-.7c-.2-.1-.6-.2-1.1-.2h-.8v1.7h.8c.5 0 .9 0 1.1-.1zM56 1H3c-1.1 0-2 .9-2 2v25c0 1.1.9 2 2 2h53c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM12.9 19.4c-.5.4-1.2.6-2 .6-1.2 0-2.3-.5-3.3-1.4l1-1.3c.8.7 1.6 1.1 2.3 1.1.3 0 .6-.1.7-.2.2-.1.3-.3.3-.5s-.1-.4-.3-.5c-.2-.1-.6-.3-1.1-.4-.9-.2-1.5-.5-2-.8s-.6-.9-.6-1.6c0-.7.3-1.3.8-1.7.5-.4 1.2-.6 2-.6.5 0 1 .1 1.5.3.5.2 1 .4 1.3.7l-.9 1.3c-.7-.5-1.4-.8-2.1-.8-.3 0-.5.1-.7.2s-.2.3-.2.5.1.4.3.5c.2.1.7.3 1.4.5s1.3.4 1.7.8c.4.4.6.9.6 1.6.1.8-.2 1.3-.7 1.7zm8.7-2.8c0 1.1-.3 2-.9 2.6s-1.4.9-2.4.9-1.8-.3-2.4-.9c-.6-.6-.9-1.5-.9-2.6v-4.3h1.7v4.2c0 .6.1 1.1.4 1.5.3.4.7.5 1.2.5s.9-.2 1.1-.5.4-.8.4-1.5v-4.2h1.7v4.3zm7.4 2.7c-.4.5-1.2.7-2.2.7h-3.4v-7.7h3c.5 0 1 .1 1.3.2.4.1.7.3.9.5.3.4.5.8.5 1.3 0 .6-.2 1-.6 1.3-.1.1-.2.2-.3.2-.1 0-.1.1-.3.1.5.1.9.3 1.1.6s.4.7.4 1.2c.1.7 0 1.2-.4 1.6zm10.6.7h-1.7v-4.8l-2.1 4.2h-1l-2.1-4.2V20H31v-7.7h2.3l2 4.2 2-4.2h2.3V20zm3.6 0h-1.7v-7.7h1.7V20zm7.3-6.2h-2.2V20h-1.7v-6.2h-2.2v-1.5h6.1v1.5zm-23.1 3.1c-.3-.1-.7-.2-1.2-.2h-1v1.8h1.2c.5 0 .9-.1 1.1-.2s.4-.4.4-.7-.3-.5-.5-.7z" /></svg>;
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
export default FormButton;
