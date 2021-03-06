import React, { Component } from 'react';

class Video extends Component{

    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;   
       let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='视频';
       let svg=<svg width={50} height={37} viewBox="0 0 50 37" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M47 0H3C1.3 0 0 1.3 0 3v31c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm-9 13.7v9.6l-6-3.4v-2.8l6-3.4zM39 25l-3.6-2 3.6 2zM13 14c0-.6.4-1 1-1h13c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1H14c-.6 0-1-.4-1-1v-9zm1 11h13c.9 0 1.7-.6 1.9-1.5-.2.8-1 1.5-1.9 1.5H14c-.6 0-1.1-.2-1.4-.6.3.4.9.6 1.4.6zm14.7-12.1c-.1-.1-.2-.2-.2-.3 0 .1.1.2.2.3.2.3.3.7.3 1.1 0-.4-.1-.8-.3-1.1zM1 3c0-.2 0-.3.1-.5-.1.2-.1.3-.1.5zm.1 31.5c-.1-.1-.1-.3-.1-.5 0 .2 0 .4.1.5z" /><path fill="currentColor" d="M47 1H3c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM29 23c0 1.1-.9 2-2 2H14c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h13c1.1 0 2 .9 2 2v9zm10 2l-8-4.5v-4l8-4.5v13z" /></svg>;
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
export default Video;
