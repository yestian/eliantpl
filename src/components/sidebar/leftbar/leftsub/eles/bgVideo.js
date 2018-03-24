import React, { Component } from 'react';

class BgVideo extends Component{
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover; 
       let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='背景视频';
       let svg=<svg width={54} height={42} viewBox="0 0 54 42" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".2" fill="currentColor" d="M1 1h52v40H1z" /><g fill="currentColor"><path d="M1 1h2v4H1zm50 0h2v4h-2zM3 1h2v2H3zm16 0h4v2h-4zm-6 0h4v2h-4zm12 0h4v2h-4zm-6 38h4v2h-4zm-6 0h4v2h-4zM7 1h4v2H7zm0 38h4v2H7zm18 0h4v2h-4zm6-38h4v2h-4zm0 38h4v2h-4zm6-38h4v2h-4zm0 38h4v2h-4zm6-38h4v2h-4zm0 38h4v2h-4z" /><path d="M49 1h4v2h-4zm2 36h2v4h-2zM1 37h2v4H1zm0-18h2v4H1zm0-6h2v4H1zm50 6h2v4h-2zM1 25h2v4H1zm50 0h2v4h-2zM1 31h2v4H1zm50 0h2v4h-2zm0-18h2v4h-2zM1 7h2v4H1zm50 0h2v4h-2zm-2 32h2v2h-2z" /><path d="M1 39h4v2H1z" /></g><path opacity=".4" d="M53 1v40H1V1h52m1-1H0v42h54V0z" /><path opacity=".5" fill="currentColor" d="M34 19v4l8 4V15l-8 4zm-4-5H16c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V16c0-1.1-.9-2-2-2z" /></svg>;
        //--------------------------------------------
        let s1={color: 'rgb(217, 217, 217)', fontFamily: 'Arial, sans-serif', fontSize: '11px', lineHeight: '16px', WebkitFontSmoothing: 'antialiased', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '92px', cursor: '-webkit-grab'}
        let s2={display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: '40px'};
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
export default BgVideo;
