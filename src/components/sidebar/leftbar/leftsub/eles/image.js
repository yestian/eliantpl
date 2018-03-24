import React, { Component } from 'react';

class Image extends Component{
 
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='图片';
       let svg=<svg width={50} height={37} viewBox="0 0 50 37" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M47 0H3C1.3 0 0 1.3 0 3v31c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm0 36H3c-.8 0-1.4-.5-1.8-1.1.4.6 1 1.1 1.8 1.1h44zM16 12.5c0 1.4-1.1 2.5-2.5 2.5S11 13.9 11 12.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5zm-3.9 3.2s-.1 0-.1-.1l.1.1zm11.2 8.4l.7-.8 6.9-7.9 9 13.7H12.4l7.5-8.5 2.7 2.7.7.8zM41.8 30l-8.4-12.7L41.8 30zm-18.5-7.4l3.5-4-3.5 4zm-3.4-3.5l-4.4 5 4.4-5 1 1-1-1zM13.5 9c-1.9 0-3.5 1.6-3.5 3.5 0 1.2.6 2.3 1.5 2.9-.9-.6-1.5-1.7-1.5-2.9 0-1.9 1.6-3.5 3.5-3.5.5 0 .9.1 1.4.3-.5-.2-.9-.3-1.4-.3zM49 3v-.4c-.2-.9-1-1.6-2-1.6H3h44c1 0 1.8.7 2 1.6V3z" /><path fill="currentColor" d="M47 1H3c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM13.5 9c1.9 0 3.5 1.6 3.5 3.5S15.4 16 13.5 16 10 14.4 10 12.5 11.6 9 13.5 9zm-3.3 21l9.6-10.9 3.4 3.5 7.7-8.9L41.8 30H10.2z" /></svg>;
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
export default Image;
