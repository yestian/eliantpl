import React, { Component } from 'react';

class DropDown extends Component{
  
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;    
        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='下拉菜单';
    let svg=<svg width={59} height={30} viewBox="0 0 59 30" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M56 0H3C1.3 0 0 1.3 0 3v24c0 1.7 1.3 3 3 3h53c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z" /><path fill="currentColor" d="M33.4 13.9c-.4 0-.8.2-1.1.5-.3.3-.4.8-.4 1.3s.1 1 .4 1.3c.3.3.6.5 1.1.5s.8-.2 1.1-.5c.3-.3.5-.8.5-1.3s-.2-1-.5-1.3c-.4-.3-.7-.5-1.1-.5zM56 1H3c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h53c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM14.5 17.9c-.8.8-2 1.1-3.6 1.1H8v-8.4h3c1.5 0 2.6.4 3.4 1.1.8.7 1.2 1.8 1.2 3.1s-.4 2.3-1.1 3.1zm6.1-3.8c-.5 0-.9.2-1.2.6s-.4.9-.4 1.5V19h-1.8v-6.5H19v.9c.2-.3.5-.5.9-.7.3-.2.7-.3 1.1-.3v1.7h-.4zm7 4c-.6.6-1.5 1-2.4 1-1 0-1.8-.3-2.4-1-.6-.6-1-1.4-1-2.4 0-.9.3-1.7 1-2.4.6-.6 1.5-1 2.4-1 1 0 1.8.3 2.4 1 .6.6 1 1.4 1 2.4s-.3 1.8-1 2.4zm8.2 0c-.6.6-1.3 1-2.1 1s-1.4-.3-1.9-.9v3.2H30v-8.8h1.8v.7c.6-.6 1.2-.8 2-.8s1.4.3 2 .9.9 1.4.9 2.4-.3 1.7-.9 2.3zm11.7.9l-4.2-4.3 1.4-1.3 2.8 2.9 2.8-2.9 1.4 1.3-4.2 4.3zm-36.6-6.8h-1v5.1h1.2c.9 0 1.5-.2 2-.6.5-.4.7-1.1.7-1.9 0-.8-.2-1.5-.7-1.9-.5-.4-1.2-.7-2.2-.7zM25.2 14c-.5 0-.9.2-1.2.5s-.5.8-.5 1.3.2 1 .5 1.3c.3.3.7.5 1.2.5s.9-.2 1.2-.5c.3-.3.5-.8.5-1.3s-.2-1-.5-1.3-.7-.5-1.2-.5z" /></svg>;

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
export default DropDown;
