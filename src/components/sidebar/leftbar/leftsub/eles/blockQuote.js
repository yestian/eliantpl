import React, { Component } from 'react';

class BlockQuote extends Component{
  
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover; 
        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='块引用';
       let svg=<svg width={56} height={29} viewBox="0 0 56 29" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M56 17v-4h-2V9H22v8H0v12h36v-4h19v-4h-1v-4h2zm-1-3v2-2zm-32 0v2-2zm-4.1 2l.8.2.3-.7.8-1.7.5-1-1-.4c-1.1-.4-2-1.3-2.4-2.3H21V0H11v6.5c0 4.9 3 8.5 7.9 9.5zm-2.2-7H20h-3.3zm-8.8 7l.8.2.3-.8.8-1.7.5-1-1-.4c-1.1-.4-2-1.3-2.4-2.3H10V0H0v6.5C0 11.4 3 15 7.9 16zm1-2.7l-.5 1 .5-1C7.7 12.8 6.7 12 6.2 11c.5 1 1.5 1.8 2.7 2.3zM5.7 9H9V1v8H5.7z" /><path fill="currentColor" d="M23 14v2h32v-2H23zm30 4H1v2h52v-2zm0-8H23v2h30v-2zM1 24h53v-2H1v2zm0 4h34v-2H1v2zM1 6.5c0 4.6 2.9 7.7 7.1 8.5l.8-1.7c-2-.8-3.2-2.5-3.2-4.3H9V1H1v5.5zM20 1h-8v5.5c0 4.6 2.9 7.7 7.1 8.5l.8-1.7c-1.9-.7-3.2-2.5-3.2-4.3H20V1z" /></svg>;
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
export default BlockQuote;
