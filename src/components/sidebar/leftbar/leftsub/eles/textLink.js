import React, { Component } from 'react';

class TextLink extends Component{
 
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='文本链接';
       let svg=<svg width={31} height={19} viewBox="0 0 31 19" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M11.3 1c-.4-.4-.9-.6-1.4-.6-.5 0-1 .2-1.4.6-.4.3-.6.8-.6 1.4 0 .4.1.8.4 1.2h-.2v5.9H4V1.2H.4V13h11.3V3.6h-.2c.3-.3.4-.7.4-1.2-.1-.6-.3-1.1-.6-1.4zm-3.8 9.4H3V2.2H1.4V12 2.2H3v8.2h4.5zm2.9-7.3c-.2.1-.4.2-.6.2.3.1.5 0 .6-.2zM9.2 1.7c.1-.1.2-.1.2-.2-.1 0-.2.1-.2.2zm0 1.4c.2.2.3.2.5.3-.2-.1-.4-.2-.5-.3-.1-.1-.2-.2-.2-.3 0 .1.1.2.2.3zm1.4 1.5H9.1V12 4.6h1.5zm.1-1.7c.1-.2.2-.3.2-.5s-.1-.4-.2-.6c.1.2.2.3.2.5-.1.3-.1.4-.2.6zm6.2.5c-.5 0-1 .1-1.5.3v-.1h-3.6V13h3.6V8c0-.6.2-.8.3-.8.2-.2.5-.3.7-.3.4 0 .7 0 .7 1.1v5h3.6V7.4c0-1.2-.4-2.2-1.1-2.9-.6-.7-1.6-1.1-2.7-1.1zm-2.4 1.2h-1.6V12 4.6h1.6zm0 1.3c.1-.2.2-.4.4-.5-.2.1-.3.3-.4.5zm2 0c-.4 0-.7.1-1 .3.2-.3.6-.3 1-.3s.8.1 1.1.3c-.3-.2-.7-.3-1.1-.3zm2.5-.7c.2.2.3.3.4.5-.1-.2-.3-.3-.4-.5zm8 2.4l2.3-2.4 1.6-1.7h-4.8l-.3.3-1.3 1.4V.6h-3.6V13h3.6v-2.7l1.5 2.2.3.4h4.3l-1.1-1.6L27 7.6zm-3.5-6v6.1-6.1zm0 8.3V12 9.9zm1.1-1.2l.9 1.4-.9-1.4zm.2-2.3l1.7-1.8h2-2l-1.7 1.8z" /><g fill="currentColor"><path d="M1.4 12V2.2H3v8.2h4.5V12H1.4z" /><path d="M1.4 12V2.2H3v8.2h4.5V12H1.4zm7.8-8.9c-.2-.2-.3-.5-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3.3.4.3.7-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3zm1.4 8.9H9.1V4.6h1.6V12z" /><path d="M9.2 3.1c-.2-.2-.3-.5-.3-.7s.1-.5.3-.7c.2-.2.4-.3.7-.3s.5.1.7.3.3.4.3.7-.1.5-.3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3zm1.4 8.9H9.1V4.6h1.6V12zm3.9-4v4h-1.6V4.6h1.6V6c.3-.5.6-.8 1-1.1.4-.3.9-.4 1.4-.4.8 0 1.5.3 2 .8s.8 1.3.8 2.2V12h-1.6V7.9c0-1.4-.6-2.1-1.7-2.1-.5 0-1 .2-1.4.5-.3.5-.5 1-.5 1.7z" /><path d="M14.5 8v4h-1.6V4.6h1.6V6c.3-.5.6-.8 1-1.1.4-.3.9-.4 1.4-.4.8 0 1.5.3 2 .8s.8 1.3.8 2.2V12h-1.6V7.9c0-1.4-.6-2.1-1.7-2.1-.5 0-1 .2-1.4.5-.3.5-.5 1-.5 1.7zm9 4h-1.6V1.6h1.6v6.1l3-3.2h2l-2.8 3 3 4.5h-1.9l-2.2-3.3-1.1 1.1V12z" /><path d="M23.5 12h-1.6V1.6h1.6v6.1l3-3.2h2l-2.8 3 3 4.5h-1.9l-2.2-3.3-1.1 1.1V12z" /></g><g opacity=".4"><path d="M1 18v-2h29v2H1m30-3H0v4h31v-4" /><path d="M1 16h29v2H1z" /></g><path fill="currentColor" d="M1 16h29v2H1z" /></svg>;
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
export default TextLink;
