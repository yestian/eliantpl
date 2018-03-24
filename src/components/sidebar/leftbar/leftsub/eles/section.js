import React, { Component } from 'react';

class Section extends Component{
     render(){
         let data=this.props.data;
        let id=data.id;
        let hover=this.props.showHover;    
        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
        //-------------------------------------------
        let title='区块';
         let svg=<svg width={62} height={50} viewBox="0 0 62 50" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".25" fill="currentColor" d="M59 1H3c-1.1 0-2 .9-2 2v44c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM14.5 3c.8 0 1.5.7 1.5 1.5S15.3 6 14.5 6 13 5.3 13 4.5 13.7 3 14.5 3zm-5 0c.8 0 1.5.7 1.5 1.5S10.3 6 9.5 6 8 5.3 8 4.5 8.7 3 9.5 3zm-5 0C5.3 3 6 3.7 6 4.5S5.3 6 4.5 6 3 5.3 3 4.5 3.7 3 4.5 3zM59 47H3V8h56v39z" /><path opacity=".2" fill="currentColor" d="M5 10h52v16H5z" /><g fill="currentColor"><path d="M5 10h2v4H5zm50 0h2v4h-2zM7 10h2v2H7zm16 0h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zM23 24h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm6-14h4v2h-4zm0 14h4v2h-4z" /><path d="M53 10h4v2h-4zm2 12h2v4h-2zM5 22h2v4H5zm0-6h2v4H5zm50 0h2v4h-2zm-2 8h2v2h-2z" /><path d="M5 24h4v2H5z" /></g><g opacity=".3" fill="currentColor"><path d="M5 29h2v4H5zm50 0h2v4h-2zM7 29h2v2H7zm16 0h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zM23 43h4v2h-4zm-6 0h4v2h-4zm-6 0h4v2h-4zm18 0h4v2h-4zm6 0h4v2h-4zm6 0h4v2h-4zm6-14h4v2h-4zm0 14h4v2h-4z" /><path d="M53 29h4v2h-4zm2 12h2v4h-2zM5 41h2v4H5zm0-6h2v4H5zm50 0h2v4h-2zm-2 8h2v2h-2z" /><path d="M5 43h4v2H5z" /></g><path opacity=".4" d="M57 10v16H5V10h52m1-1H4v18h54V9z" /></svg>;
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
export default Section;
