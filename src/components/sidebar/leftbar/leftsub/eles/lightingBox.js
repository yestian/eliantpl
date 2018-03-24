import React, { Component } from 'react';

class LightingBox extends Component{
  
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='灯箱滑块';
       let svg=<svg width={43} height={47} viewBox="0 0 43 47" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M25 35h-7c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm-7 3.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm7 5.5h-6l4.5-4.4 1.5 2.7V44z" opacity=".5" /><path opacity=".4" d="M10 34H3c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h7c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zm-5.5 4c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5zm3.7 3.2l.8 1.3v.5H6.4l1.8-1.8z" /><path fill="currentColor" d="M10 35H3c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm-7 3.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5S5.3 40 4.5 40 3 39.3 3 38.5zm7 5.5H4l4.5-4.4 1.5 2.7V44z" /><path fill="currentColor" d="M40 35h-7c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2zm-7 3.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5zm7 5.5h-6l4.5-4.4 1.5 2.7V44z" opacity=".5" /><path opacity=".4" d="M40 0H3C1.3 0 0 1.3 0 3v25c0 1.7 1.3 3 3 3h37c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM11.2 24l5.8-6.6 2.1 2.1.8.8.7-.8 5.5-6.4 7 10.9H11.2zm5.7-8l1.6 1.6-1.6-1.6zM13 10c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-5 0zM2.2 1.2c-.2 0-.4.2-.5.3.1-.1.3-.3.5-.3z" /><path fill="currentColor" d="M40 1H3c-1.1 0-2 .9-2 2v25c0 1.1.9 2 2 2h37c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM8 10c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm.9 15l8-9 2.8 2.9 6.4-7.4L35 25H8.9z" /></svg>;
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
export default LightingBox;
