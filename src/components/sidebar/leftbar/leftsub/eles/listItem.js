import React, { Component } from 'react';

class ListItem extends Component{
 
    render(){
        let data=this.props.data;
       let id=data.id;
       let hover=this.props.showHover;        let isEnter=(id===parseInt(data.itemEnter,0)&&hover && data.itemActive);
       //-------------------------------------------
       let title='列表项';
       let svg=<svg width={48} height={36} viewBox="0 0 48 36" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><g opacity=".3" fill="currentColor"><path d="M1 1h2v4H1zm44 0h2v4h-2zM3 1h2v2H3zm10 0h4v2h-4zM7 1h4v2H7zm12 0h4v2h-4zm-6 32h4v2h-4zm-6 0h4v2H7zm12 0h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4zm6-32h4v2h-4zm0 32h4v2h-4z" /><path d="M43 1h4v2h-4zm2 30h2v4h-2zM1 31h2v4H1zm0-18h2v4H1zm0-6h2v4H1zm44 6h2v4h-2zM1 19h2v4H1zm44 0h2v4h-2zM1 25h2v4H1zm44 0h2v4h-2zm0-18h2v4h-2zm-2 26h2v2h-2z" /><path d="M1 33h4v2H1z" /></g><circle cx={9} cy={12} r={3} opacity=".4" /><circle fill="currentColor" cx={9} cy={12} r={2} /><circle cx={9} cy={24} r={3} opacity=".4" /><circle fill="currentColor" cx={9} cy={24} r={2} /><path fill="currentColor" d="M38 10v4H18v-4h20m2-2H16v8h24V8z" /><path opacity=".2" fill="currentColor" d="M18 10h20v4H18z" /><path opacity=".4" d="M40 8v8H16V8h24m1-1H15v10h26V7z" /><path fill="currentColor" d="M38 22v4H18v-4h20m2-2H16v8h24v-8z" /><path opacity=".2" fill="currentColor" d="M18 22h20v4H18z" /><path opacity=".4" d="M40 20v8H16v-8h24m1-1H15v10h26V19z" /></svg>;
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
export default ListItem;
