import React,{Component} from "react";

class Clear extends Component{
    render(){
        return(
            <div className="transition-child">
                <div className="guidance-panel-wrapper">
                    <div className="guidance-panel-child">
                        <div className="kit-field kit-field clear">
                            <div className="label kit-label " title="Clear"><div className="link"><i /><span>清除<span className="colon">:</span></span></div></div>
                            <div className="kit-radio-buttons kit-input-control clearfix">
                                <div className="kit-button kit-radio-button active none" label="None"><svg width={11} height={11} viewBox="0 0 11 11" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="none" stroke="currentColor" strokeMiterlimit={10} d="M2 9l7-7M2 2l7 7" /></svg><span>无</span></div>
                                <div className="kit-button kit-radio-button left" label="Left"><svg width={19} height={15} viewBox="0 0 19 15" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M12 2h5v3h-5z" opacity=".4" /><path fill="currentColor" d="M7.998 14V9L5 11.5 7.998 14zM11 1v5h3v2.003a3.83 3.83 0 0 1-.394 1.564c-.19.37-.464.72-.868.983-.405.262-.95.45-1.738.45H8v1h3c.948 0 1.707-.235 2.283-.61.868-.565 1.294-1.402 1.502-2.08.2-.652.213-1.167.214-1.28V6h3V1h-7zm6 4h-5V2h5v3zm-9 .2V1.8c0-.44-.36-.8-.8-.8H1.8c-.44 0-.8.36-.8.8v3.4c0 .44.36.8.8.8h5.4c.44 0 .8-.36.8-.8z" /></svg><span>左</span></div>
                                <div className="kit-button kit-radio-button right" label="Right"><svg width={19} height={15} viewBox="0 0 19 15" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M2 2h5v3H2z" opacity=".4" /><path fill="currentColor" d="M6.26 10.55c-.603-.39-.922-.992-1.09-1.536A3.827 3.827 0 0 1 5 8.007V6h3V1H1v5h3v2.003c.003.1.004 1.04.504 2.02.25.49.636.992 1.213 1.367.576.375 1.335.61 2.283.61h3v-1H8c-.787 0-1.333-.188-1.74-.45zM2 5V2h5v3H2zm9.002 9L14 11.5 11.002 9v5zM17.2 1h-5.4c-.44 0-.8.36-.8.8v3.4c0 .44.36.8.8.8h5.4c.44 0 .8-.36.8-.8V1.8c0-.44-.36-.8-.8-.8z" /></svg><span>右</span></div>
                                <div className="kit-button kit-radio-button both" label="Both"><svg width={21} height={15} viewBox="0 0 21 15" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M4.998 14V9L2 11.5 4.998 14zm11.004 0L19 11.5 16.002 9v5zm-2.55-3.034c-.395-.05-.71-.16-.976-.298-.073-.038-.15-.074-.215-.117a2.25 2.25 0 0 1-.34-.28 2.468 2.468 0 0 1-.3-.35 2.074 2.074 0 0 1-.093-.133 3.065 3.065 0 0 1-.144-.262c-.02-.04-.043-.08-.06-.12a3.63 3.63 0 0 1-.143-.376v-.01a4.042 4.042 0 0 1-.095-.374c-.01-.045-.015-.083-.023-.13-.01-.06-.025-.126-.03-.18l-.01-.116a.962.962 0 0 1-.01-.108 1.263 1.263 0 0 1-.01-.08V3h-1v5.06L10 8.11c0 .02-.004.04-.006.063a.78.78 0 0 1-.003.08 1.365 1.365 0 0 1-.01.082l-.014.105-.016.098-.028.13-.02.104-.04.15-.03.106c-.017.056-.04.114-.06.172-.012.032-.022.064-.035.097a3.17 3.17 0 0 1-.12.26 2.788 2.788 0 0 1-.32.486c-.036.045-.08.087-.12.13-.128.135-.26.268-.43.377-.305.196-.688.35-1.193.415A4.01 4.01 0 0 1 7 11H5v1h2.007c.22 0 .426-.015.625-.04.064-.007.122-.02.183-.03a4.39 4.39 0 0 0 .386-.078c.07-.017.14-.038.2-.058a3.697 3.697 0 0 0 .5-.192l.107-.046c.1-.052.194-.107.284-.166a3.252 3.252 0 0 0 .624-.535 3.84 3.84 0 0 0 .367-.455l.01-.012a3.75 3.75 0 0 0 .215-.373c0 .003.005.005.006.008.126.245.285.492.485.726a3.386 3.386 0 0 0 .73.64 3.8 3.8 0 0 0 .28.16l.106.042c.058.03.12.054.18.08.1.04.207.08.316.113l.198.06c.123.03.253.055.386.077.06.01.12.025.18.033a5 5 0 0 0 .624.04H16v-1h-2c-.197 0-.38-.01-.547-.032zM8 5.2V1.8c0-.44-.36-.8-.8-.8H1.8c-.44 0-.8.36-.8.8v3.4c0 .44.36.8.8.8h5.4c.44 0 .8-.36.8-.8zM19.2 1h-5.4c-.44 0-.8.36-.8.8v3.4c0 .44.36.8.8.8h5.4c.44 0 .8-.36.8-.8V1.8c0-.44-.36-.8-.8-.8z" /></svg><span>两者</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Clear;
