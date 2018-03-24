import React, { Component } from 'react';

class Label extends Component{

    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='元素注释';
       let svg=<svg width={38} height={14} viewBox="0 0 38 14" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M12.1 3.4c-1.4 0-2.6.4-3.7 1.3l-.7.6.6.8.7 1-.2.1c-.8.5-1.2 1.3-1.3 2.2H4V1.2H.4V13h8.1v-.9c-.1-.1-.1-.2-.2-.2l.3.3c.7.6 1.6.9 2.6.9.5 0 1-.1 1.5-.2v.1h3.4V7.2c0-1.3-.4-2.2-1.2-2.9-.8-.6-1.7-.9-2.8-.9zm-.4 6.4c-.3 0-.5-.1-.6-.1.1 0 .3-.1.7-.1h.6c-.3.1-.5.2-.7.2zM34.3.6v5.6c-.2-.6-.6-1.2-1.1-1.6-.9-.8-2-1.2-3.2-1.2-1.3 0-2.4.4-3.3 1.3-.5.4-.9 1-1.1 1.6-.2-.6-.6-1.1-1-1.6-.9-.9-2-1.3-3.3-1.3-.5 0-1 .1-1.4.3V.6h-3.6V13h3.6v-.2c.5.2 1 .3 1.5.3 1.2 0 2.3-.5 3.2-1.4.4-.4.8-1 1-1.5-.1-.2-.1-.4-.2-.6.2.9.6 1.6 1.2 2.2.9.9 2.1 1.3 3.4 1.3 1.6 0 2.9-.5 3.9-1.6l.5-.5v2H38V.6h-3.7zM21.9 9.3c-.3.3-.6.4-.9.4-.3 0-.6-.1-.8-.4-.3-.3-.4-.6-.4-1.1 0-.5.1-.8.4-1.1.2-.3.5-.4.8-.4.4 0 .6.1.9.4.3.3.4.6.4 1.1 0 .5-.1.9-.4 1.1zm12.4 1.4l-.5-.5-.2-.2h.7v.7z" /><path d="M1.4 12V2.2H3v8.2h4.5V12H1.4zm13.7 0h-1.4v-1c-.6.7-1.4 1.1-2.5 1.1-.8 0-1.4-.2-1.9-.7s-.8-1-.8-1.8.3-1.3.8-1.6c.5-.4 1.3-.5 2.2-.5h2v-.3c0-1-.6-1.5-1.7-1.5-.7 0-1.4.3-2.2.8l-.6-1c.9-.7 1.9-1.1 3.1-1.1.9 0 1.6.2 2.1.7s.8 1.1.8 2.1V12zm-1.6-2.8v-.6h-1.8c-1.1 0-1.7.4-1.7 1.1 0 .4.1.6.4.8.3.2.7.3 1.2.3s.9-.1 1.3-.4c.4-.3.6-.7.6-1.2zm7.8-4.8c1 0 1.9.3 2.6 1 .7.7 1.1 1.6 1.1 2.8 0 1.1-.4 2.1-1.1 2.8-.7.7-1.5 1.1-2.5 1.1-.9 0-1.8-.4-2.5-1.2V12h-1.6V1.6h1.6v4.2c.6-.9 1.4-1.4 2.4-1.4zm-2.5 3.9c0 .7.2 1.3.6 1.7.4.5 1 .7 1.6.7s1.2-.2 1.6-.7.7-1 .7-1.7-.2-1.3-.6-1.8c-.4-.5-1-.7-1.6-.7-.6 0-1.2.2-1.6.7-.5.5-.7 1.1-.7 1.8zm14.8.7h-5.8c0 .5.3 1 .7 1.3.5.3 1 .5 1.6.5.9 0 1.6-.3 2.1-.9l.9 1c-.8.8-1.8 1.2-3.1 1.2-1 0-1.9-.3-2.7-1s-1.1-1.6-1.1-2.8c0-1.2.4-2.1 1.1-2.8.7-.7 1.6-1 2.6-1s1.9.3 2.6.9 1.1 1.5 1.1 2.5V9zm-5.8-1.3H32c0-.6-.2-1.1-.6-1.4-.3-.3-.8-.5-1.4-.5s-1.1.2-1.5.5c-.5.4-.7.8-.7 1.4zm9.1 4.3h-1.6V1.6h1.6V12z" fill="currentColor" /></svg>;
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
export default Label;
