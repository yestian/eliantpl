import React, { Component } from 'react';

class Radio extends Component{
  
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='单选框';
       let svg=<svg width={26} height={26} viewBox="0 0 26 26" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><circle opacity=".2" fill="currentColor" cx={13} cy={13} r="10.6" /><path d="M13 0c7.2 0 13 5.8 13 13s-5.8 13-13 13S0 20.2 0 13 5.8 0 13 0m0 1C6.4 1 1 6.4 1 13s5.4 12 12 12 12-5.4 12-12S19.6 1 13 1z" opacity=".4" /><path fill="currentColor" d="M13 3.5c5.2 0 9.5 4.3 9.5 9.5s-4.3 9.5-9.5 9.5-9.5-4.3-9.5-9.5S7.8 3.5 13 3.5M13 1C6.4 1 1 6.4 1 13s5.4 12 12 12 12-5.4 12-12S19.6 1 13 1z" /><circle fill="currentColor" cx={13} cy={13} r={5} /></svg>;
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
export default Radio;
