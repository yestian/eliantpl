import React, { Component } from 'react';

class TextBlock extends Component{
 
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='文本块';
       let svg=<svg width={33} height={13} viewBox="0 0 33 13" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M10 .2H.4v3.5h3V12h3.7V3.7h3V.2zm22.4 9.7l-.6-1.1-.7-1.2-.9 1-.2.2v-3h2V2.6h-2V.2h-3.6v2.3H23l-.3.5-.8 1.2-.8-1.2-.3-.5h-4.4l.8 1.2-.2-.2c-.9-.8-2-1.2-3.2-1.2-1.3 0-2.4.4-3.3 1.3-1 .9-1.4 2.1-1.4 3.5 0 1.5.5 2.6 1.4 3.5.9.9 2.1 1.3 3.4 1.3 1.1 0 2.1-.3 2.9-.8l-.5.9h4.3l.3-.4.9-1.3 1 1.3.3.4h4.4l-1.1-1.6L24 7.2l1.3-1.8v.5h.9v2.7c0 1.1.3 1.9 1 2.6.7.6 1.5 1 2.4 1 .9 0 1.8-.3 2.5-1l.6-.5-.3-.8zM18 9.5l-.3-.3-.2-.2h.9l-.4.5zm.5-.7V6.9c0-.7-.1-1.3-.3-1.8l1.5 2.2-1.2 1.5zm6.8-5.2l-2.5 3.6 2.5-3.6z" /><path d="M6.1 2.7V11H4.4V2.7h-3V1.2H9v1.5H6.1zM17.5 8h-5.8c0 .5.3 1 .7 1.3.5.3 1 .5 1.6.5.9 0 1.6-.3 2.1-.9l.9 1c-.8.8-1.8 1.2-3.1 1.2-1 0-1.9-.3-2.7-1s-1.1-1.6-1.1-2.8c0-1.2.4-2.1 1.1-2.8.7-.7 1.6-1 2.6-1s1.9.3 2.6.9 1.1 1.5 1.1 2.5V8zm-5.8-1.3H16c0-.6-.2-1.1-.6-1.4-.4-.3-.9-.5-1.5-.5s-1.1.2-1.5.5c-.5.4-.7.8-.7 1.4zm8.6-3.1L21.9 6l1.7-2.5h1.9l-2.6 3.6 2.7 3.8h-1.9l-1.8-2.5-1.8 2.6h-1.8l2.6-3.8-2.5-3.7h1.9zm8.5 1.2v3.8c0 .4.1.6.3.8.2.2.4.3.8.3s.7-.2 1-.5l.6 1.1c-.6.5-1.2.7-1.8.7-.7 0-1.2-.2-1.7-.7-.5-.5-.7-1.1-.7-1.9V4.8h-.9V3.6h.9V1.2h1.6v2.3h2v1.3h-2.1z" fill="currentColor" /></svg>;
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
export default TextBlock;
