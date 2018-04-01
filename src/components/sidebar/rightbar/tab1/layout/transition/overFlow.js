import React,{Component} from "react";

class OverFlow extends Component{
    render(){
        return(
            <div className="transition-child">
                <div className="kit-field kit-field overflow">
                    <div className="label kit-label " title="Overflow"><div className="link"><i /><span>溢出<span className="colon">:</span></span></div></div>
                    <div className="kit-radio-buttons kit-input-control clearfix">
                        <div className="kit-button kit-radio-button active visible" label="Visible"><svg width={15} height={15} viewBox="0 0 15 15" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M7.502 3C3.91 3 1 7.44 1 7.44S3.91 12 7.502 12C11.09 12 14 7.44 14 7.44S11.09 3 7.502 3zm0 8a3.5 3.5 0 0 1 0-7A3.5 3.5 0 0 1 11 7.5C11 9.434 9.434 11 7.502 11zm0-5.156a1.656 1.656 0 1 0-.003 3.31 1.656 1.656 0 0 0 .002-3.31z" /></svg><span>显示</span></div>
                        <div className="kit-button kit-radio-button hidden" label="Hidden"><svg width={15} height={15} viewBox="0 0 15 15" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M12.146 5.27l-1.29 1.29c.084.3.144.612.144.94C11 9.434 9.434 11 7.502 11c-.33 0-.64-.06-.943-.145l-.797.795c.554.214 1.135.35 1.738.35 3.59 0 6.5-4.56 6.5-4.56s-.71-1.078-1.854-2.17zm.5-3.624l-2.26 2.26C9.516 3.38 8.54 3 7.5 3 3.91 3 1 7.44 1 7.44s1.112 1.724 2.8 3.053l-2.153 2.153.707.707 11-11-.708-.707zM8.25 6.044a1.62 1.62 0 0 0-.748-.2c-.918 0-1.658.74-1.658 1.654 0 .274.083.523.2.75l-1.328 1.33A3.433 3.433 0 0 1 4 7.5 3.5 3.5 0 0 1 7.502 4a3.43 3.43 0 0 1 2.075.716L8.25 6.044z" /></svg><span>隐藏</span></div>
                        <div className="kit-button kit-radio-button scroll" label="Scroll"><svg width={22} height={14} viewBox="0 0 22 14" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M20 1h-2v12h2c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 11h-1v-2h1v2zm0-8h-1V2h1v2z" /><path opacity=".15" fill="currentColor" d="M18 11H3V3h15V2H2v10h16z" /><path opacity=".6" fill="currentColor" d="M2 12V2h16V1H2.2A1.2 1.2 0 0 0 1 2.2v9.6A1.2 1.2 0 0 0 2.2 13H18v-1H2z" /><path opacity=".15" fill="currentColor" d="M9.427 6.586L8.202 5.36l-.707-.707-.707.707-.99.99-.707.707.71.708 3.027 3.024.21.21h1.02l.224-.257 4.99-5.615.666-.75-.747-.663L14.38 3h-1.766z" /><path opacity=".3" fill="currentColor" d="M6.788 5.36l.707-.707.707.707 1.225 1.225L12.614 3H3v8h6.033l-.21-.21-3.025-3.025-.707-.708.71-.707.99-.99zM14.38 3l.807.718.747.664-.664.747-4.993 5.612-.225.254H18V3h-3.62z" /><path fill="currentColor" d="M13.477 3.535L9.47 8.043 7.495 6.068l-.99.99 3.025 3.025 4.993-5.617-1.046-.93z" /></svg><span>滚动</span></div>
                        <div className="kit-button kit-radio-button auto" label="Auto"><svg width={22} height={14} viewBox="0 0 22 14" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M20 1h-2v12h2c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 11h-1v-2h1v2zm0-8h-1V2h1v2z" /><path opacity=".15" fill="currentColor" d="M18 11H3V3h15V2H2v10h16z" /><path opacity=".6" fill="currentColor" d="M2 12V2h16V1H2.2A1.2 1.2 0 0 0 1 2.2v9.6A1.2 1.2 0 0 0 2.2 13H18v-1H2z" /><path opacity=".15" fill="currentColor" d="M8.913 3.05l-2.85 7.6-.13.35H9.35l.375-1h2.082l.375 1H15.6l-.132-.35-2.85-7.6L12.6 3H8.932z" /><path fill="currentColor" d="M8.282 11l.75-2H12.5l.75 2h1.282l-2.85-7.6H9.85L7 11h1.282zm2.4-6.4h.168L12.125 8H9.407l1.275-3.4z" /><path opacity=".3" fill="currentColor" d="M9.725 10l-.375 1h2.832l-.375-1H9.725zM12.6 3l.018.05 2.85 7.6.132.35H18V3h-5.4zM3 11h2.932l.132-.35 2.85-7.6.018-.05H3v8z" /></svg><span>自动</span></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default OverFlow;
