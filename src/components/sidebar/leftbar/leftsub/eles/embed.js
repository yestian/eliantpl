import React, { Component } from 'react';

class Embed extends Component{
   
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;
        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='内嵌网页';
       let svg=<svg width={50} height={37} viewBox="0 0 50 37" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M47 0H3C1.3 0 0 1.3 0 3v31c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3z" /><path fill="currentColor" d="M47 1H3c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM17.8 15.4l-5.3 3.2v.1l5.3 3.2v3.2l-8.2-5.2v-2.4l8.2-5.2v3.1zM24 27h-3l6-17h3l-6 17zm17.3-7.1L33 25.1v-3.2l5.3-3.2v-.1L33 15.4v-3.2l8.2 5.2v2.5z" /></svg>;
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
export default Embed;
