import React, { Component } from 'react';

class NavBar extends Component{
 
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='导航菜单';
       let svg=<svg width={64} height={22} viewBox="0 0 64 22" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M61 0H3C1.3 0 0 1.3 0 3v16c0 1.7 1.3 3 3 3h58c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zM15 11v4h-1v-.2c0-1.5-1.1-2.8-2.5-2.8S9 13.3 9 14.8v.2H8v-4h-.4l3.9-3.6 3.9 3.6H15zm-5 3.8v-.4.4zm1.5-1.8h.3-.3c-.4 0-.7.2-.9.4.2-.2.5-.4.9-.4zM63 3c0-1.1-.9-2-2-2H3h58c1.1 0 2 .9 2 2z" /><path fill="currentColor" d="M61 1H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h58c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM16 12v4h-3v-1.2c0-1-.7-1.8-1.5-1.8s-1.5.8-1.5 1.8V16H7v-4H5l6.5-6 6.5 6h-2zm42 4H48v-2h10v2zm0-4H48v-2h10v2zm0-4H48V6h10v2z" /></svg>;
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
export default NavBar;
