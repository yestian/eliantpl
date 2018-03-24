import React, {Component} from 'react';

class Tab3Items extends Component{
     render(){
         let S1={
             position: 'absolute',top: 0,left: 0,width: '240px',opacity: 1,background: 'rgb(64, 64, 64)',
              outline: 0,cursor: 'default',userSelect: 'none',display: 'flex',alignItems: 'center',boxSizing: 'border-box',paddingRight: '10px',paddingLeft: '10px',lineHeight: '24px'
         }
         let S2={flex: '1 1 0%',overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap'}
         let S3={display: 'flex',alignItems: 'center'}
         let S4={color: 'rgb(217, 217, 217)',paddingRight: '6px'}
         let S5={display: 'block',transform: 'translate(0px, 0px)'}
         let S6={display: 'flex',alignItems: 'center',flex: '0 1 auto'}
         let S7={overflow: 'hidden',textOverflow: 'ellipsis',whiteSpace: 'nowrap'}
         let S8={boxSizing: 'border-box',flexShrink: 0,width: '18px',height: '24px',paddingRight: '6px',display: 'flex',alignItems: 'center',justifyContent: 'center'}
         return(
            <div>
                <div depth="0" tabIndex="0" style={{...S1,transform: 'translate3d(0px, 0px, 0px)'}}>
                    <div style={S2}>
                        <div style={S3}>
                            <div type="regular" style={S4}><svg width="12" height="12" viewBox="0 0 12 12" className="bem-Svg " style={S5}><path fill="currentColor" d="M10.2 1H1.8c-.44 0-.8.36-.8.8v8.4c0 .44.36.8.8.8h8.4c.44 0 .8-.36.8-.8V1.8c0-.44-.36-.8-.8-.8zM6 2h1v1H6V2zM4 2h1v1H4V2zM2 2h1v1H2V2zm8 2.554V10H2V4h8v.554z"></path></svg></div>
                            <div style={S2}>
                                <div style={S6}>
                                    <div style={S7}>右对齐</div>
                                    <svg width="12" height="12" viewBox="0 0 12 12" className="bem-Svg " style={{display: 'block',transform: 'translate(0px, 0px)',color: 'rgb(42, 217, 134)',marginLeft: '6px',flexShrink: 0}}><title>interactions-mini-circle</title><path d="M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM6,10V7H3L6,2V5H9Z" fill="currentColor"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div depth="1" tabIndex="0" style={{...S1,transform: 'translate3d(0px, 25px, 0px)'}}>
                    <div style={S8}></div>
                    <div style={S2}>
                        <div style={S3}>
                            <div type="regular" style={S4}>
                                <svg width="12" height="12" viewBox="0 0 12 12" className="bem-Svg " style={S5}><path fill="currentColor" d="M9 1H1v10h10V1H9zm1 1v8H9V2h1zm-8 8V2h1v8H2zm2-8h4v8H4V2z"></path></svg>
                            </div>
                            <div style={S2}>
                                <div style={S6}><div style={S7}>右对齐</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div depth="1" tabIndex="0" style={{...S1,transform: 'translate3d(0px, 50px, 0px)'}}>
                    <div style={S8}><svg width="7" height="9" viewBox="0 0 7 9" className="bem-Svg " style={S5}><path fill="currentColor" d="M6 4.5L1 8V1z"></path></svg></div>
                    <div style={S2}><div style={S3}><div type="regular" style={S4}><svg width="13" height="12" viewBox="0 0 13 12" className="bem-Svg " style={S5}><path fill="currentColor" d="M11 1H1v10h11V1h-1zm0 9H2V2h9v8zM5 9h1V3H3v6h2zM4 4h1v4H4V4zm5 5h1V3H7v6h2zM8 4h1v4H8V4z"></path></svg></div><div style={S2}><div style={S6}><div style={S7}>行</div></div></div></div></div>
                </div>
                <div depth="1" tabIndex="0" style={{...S1,transform: 'translate3d(0px, 75px, 0px)'}}>
                    <div style={S8}></div>
                    <div style={S2}><div style={S3}><div type="regular" style={S4}><svg width="12" height="12" viewBox="0 0 12 12" className="bem-Svg " style={S5}><path fill="currentColor" d="M10 2v8H2V2h8m1-1H1v10h10V1z"></path></svg></div><div style={S2}><div style={S6}><div style={S7}>区段</div></div></div></div></div>
                </div>
                <div depth="1" tabIndex="0" style={{...S1,transform: 'translate3d(0px, 100px, 0px)'}}>
                    <div style={S8}></div>
                    <div style={S2}>
                        <div style={S3}><div type="regular" style={S4}><svg width="12" height="12" viewBox="0 0 12 12" className="bem-Svg " style={S5}><path fill="currentColor" d="M10 2v8H2V2h8m1-1H1v10h10V1z"></path></svg></div><div style={S2}><div style={S6}><div style={S7}>区段</div></div></div></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tab3Items;
