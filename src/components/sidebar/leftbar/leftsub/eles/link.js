import React, { Component } from 'react';

class Link extends Component{

    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='链接块';
    let svg=<svg width={36} height={36} viewBox="0 0 36 36" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".2" fill="currentColor" d="M1 1h34v34H1z" /><g fill="currentColor"><path d="M1 1h2v4H1zm32 0h2v4h-2zM3 1h2v2H3zm10 0h4v2h-4zM7 1h4v2H7zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2H7zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z" /><path d="M31 1h4v2h-4zm2 30h2v4h-2zM1 31h2v4H1zm0-18h2v4H1zm0-6h2v4H1zm32 6h2v4h-2zM1 19h2v4H1zm32 0h2v4h-2zM1 25h2v4H1zm32 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z" /><path d="M1 33h4v2H1z" /></g><path opacity=".4" d="M35 1v34H1V1h34m1-1H0v36h36V0z" /><path opacity=".5" fill="currentColor" d="M13.6 27c-1.2 0-2.4-.5-3.2-1.3-.9-.9-1.3-2-1.3-3.2 0-1.2.5-2.4 1.3-3.2l3.2-3.2c.3-.3.7-.6 1-.8.7-.4 1.4-.6 2.2-.6 1.5 0 2.8.7 3.7 1.9l-1.3 1.3c-.5-.8-1.4-1.4-2.4-1.4-.2 0-.4 0-.6.1-.5.1-1 .4-1.3.7l-3.2 3.2c-.5.5-.8 1.2-.8 2 0 .7.3 1.4.8 2 .5.5 1.2.8 2 .8.7 0 1.4-.3 2-.8l.9-.9c.7.3 1.4.4 2.2.4L17 25.8c-1.1.7-2.2 1.2-3.4 1.2zm5.1-5.1c-.4 0-.7 0-1.1-.1-.8-.2-1.6-.6-2.2-1.2l-.5-.5 1.3-1.3c.1.2.3.4.4.5.5.5 1.2.8 2 .8.7 0 1.4-.3 2-.8l3.2-3.2c.5-.5.8-1.2.8-2 0-.7-.3-1.4-.8-2-.5-.5-1.2-.8-2-.8-.7 0-1.4.3-2 .8l-.7.9c-.7-.3-1.4-.4-2.2-.4l1.8-1.8c.9-.9 2-1.3 3.2-1.3 1.2 0 2.4.5 3.2 1.3.9.9 1.3 2 1.3 3.2s-.5 2.4-1.3 3.2l-3.2 3.2c-.3.3-.7.6-1 .8-.7.5-1.4.7-2.2.7z" /></svg>;
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
export default Link;