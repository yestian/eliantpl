import React, { Component } from 'react';

class Search extends Component{

    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='搜索';
       let svg=<svg width={35} height={35} viewBox="0 0 35 35" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><g fill="none" fillRule="evenodd"><path opacity=".4" d="M14 6c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm7.55 19.793A13.89 13.89 0 0 1 14 28C6.28 28 0 21.72 0 14S6.28 0 14 0s14 6.28 14 14c0 2.706-.76 5.298-2.207 7.55l8.45 8.45L30 34.242l-8.45-8.45z" /><path fill="currentColor" d="M24.498 21.67l8.33 8.33L30 32.828l-8.33-8.33A12.94 12.94 0 0 1 14 27C6.82 27 1 21.18 1 14S6.82 1 14 1s13 5.82 13 13c0 2.868-.93 5.52-2.502 7.67M14 23a9 9 0 1 0 0-18 9 9 0 0 0 0 18" /></g></svg>;
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
export default Search;
