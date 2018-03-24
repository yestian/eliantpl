import React, { Component } from 'react';

class RichText extends Component{
 
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='富文本';
       let svg=<svg width={55} height={33} viewBox="0 0 55 33" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M45 1H25v6h20V1zm-1 1H26v4h18-18V2h18zM20 19c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3H3C1.3 0 0 1.3 0 3v13c0 1.7 1.3 3 3 3h17zm2-16c0-.5-.2-.9-.5-1.3.3.4.5.8.5 1.3zm-7.5 4.7l-4.1 4.5 4.1-4.5zm-4 5.9l3.9-4.3L18 14h-7.9l.4-.4zm-3.2-1.9L9 13.6l.4.4H5.2l2.1-2.3zm-1.2-.2l1.1-1.3-1.1 1.3zm2.4.1l1.2 1.3-1.2-1.3zM9 6c0-.7-.4-1.3-.9-1.7.5.4.9 1 .9 1.7zM7 5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-1-.7c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2 .7 0 1.2-.3 1.6-.8-.4.5-.9.8-1.6.8-1.1 0-2-.9-2-2 0-.7.4-1.4 1-1.7zM3 15h17l-4.5-6 4.5 6H3zm-2 1V3c0-.5.2-.9.5-1.3-.3.4-.5.8-.5 1.3v13c0 .6.2 1.1.6 1.4-.4-.4-.6-.9-.6-1.4zm2 2h17c.4 0 .8-.1 1.1-.3-.3.2-.7.3-1.1.3H3zm22-9v12H1v12h34v-4h17v-4h2v-4h-2v-4h2v-4h1V9H25zm1 9v2h25-25v-2zM2 26v2-2zm32 6H2v-2 2h32zm19-10H2v2h51H2v-2h51zm0-8H26v2-2h27zm1-2H26v-2h28v2zm0-2H26v2h28v-2z" /><path fill="currentColor" d="M26 10v2h28v-2H26zm0 6h27v-2H26v2zM44 2H26v4h18V2zm7 16H26v2h25v-2zM2 28h49v-2H2v2zm0-4h51v-2H2v2zm0 8h32v-2H2v2zm18-14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h17zM7 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm.3 6.3L9.8 13l4.7-5.2L20 15H3l4.3-4.7z" /></svg>;
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
export default RichText;
