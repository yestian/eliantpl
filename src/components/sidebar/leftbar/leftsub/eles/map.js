import React, { Component } from 'react';

class Map extends Component{
 
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='地图';
    let  svg=<svg width={25} height={36} viewBox="0 0 25 36" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M12.6.3C5.7.3.1 5.9.1 12.8c0 8.5 11.2 21.4 11.7 21.9l.8.9.8-.9c.4-.6 11.6-13.5 11.6-21.9C25 5.9 19.4.3 12.6.3zm3.9 12.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" /><path fill="currentColor" d="M12.6 1.3C6.2 1.3 1.1 6.4 1.1 12.8 1.1 20.9 12.6 34 12.6 34S24 20.9 24 12.8c0-6.4-5.1-11.5-11.4-11.5zm0 16.4c-2.7 0-5-2.2-5-5s2.2-5 5-5c2.7 0 5 2.2 5 5s-2.3 5-5 5z" /></svg>;
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
export default Map;
