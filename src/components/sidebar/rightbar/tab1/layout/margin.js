import React,{Component} from "react";
import Padding from './padding';
import MarginSize from './marginSize';

class Margin extends Component{
    render(){
        return(
            <div className="margin">
                <div className="handle sprite-mid top guidance-panel-wrapper" style={{opacity: 0}}><div className="guidance-panel-child" /></div>
                <div className="handle sprite-mid top" title="Adjust Top Margin" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><svg width={16} height={9} viewBox="0 0 16 9" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M3 5h10v1H3zM1 7h14v1H1zm4-4h6v1H5zm2-2h2v1H7z" fill="currentColor" /></svg></div>

                <div className="handle sprite-mid right vert guidance-panel-wrapper" style={{opacity: 0}}><div className="guidance-panel-child" /></div>
                <div className="handle sprite-mid right vert" title="Adjust Right Margin" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><svg width={9} height={16} viewBox="0 0 9 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M3 3h1v10H3zM1 1h1v14H1zm4 4h1v6H5zm2 2h1v2H7z" fill="currentColor" /></svg></div>

                <div className="handle sprite-mid bottom guidance-panel-wrapper" style={{opacity: 0}}><div className="guidance-panel-child" /></div>
                <div className="handle sprite-mid bottom" title="Adjust Bottom Margin" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><svg width={16} height={9} viewBox="0 0 16 9" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M3 3h10v1H3zM1 1h14v1H1zm4 4h6v1H5zm2 2h2v1H7z" fill="currentColor" /></svg><svg width={31} height={7} viewBox="0 0 31 7" className="bem-Svg text" style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M3 2v1H2v3H1V1h1v1h1zm0 1h1v1H3V3zm2-2h1v5H5V3H4V2h1V1zm3 1V1h2v1h1v4h-1V5H8v1H7V2h1zm2 2V2H8v2h2zm6 2h-1V5h-2v1h-1V1h3v1h-2v2h2V2h1v2h-1v1h1v1zm2-1h-1V2h1v3zm0-3V1h3v1h-3zm3 1h-2v1h1v1h-2v1h3V3zm3 2h1v1h-3V5h1V2h-1V1h3v1h-1v3zm3 1h-1V1h1v1h1v1h-1v3zm1-2V3h1V1h1v5h-1V4h-1z" fill="currentColor" /></svg></div>

                <div className="handle sprite-mid left vert guidance-panel-wrapper" style={{opacity: 0}}><div className="guidance-panel-child" /></div>
                <div className="handle sprite-mid left vert" title="Adjust Left Margin" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><svg width={9} height={16} viewBox="0 0 9 16" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path d="M5 3h1v10H5zm2-2h1v14H7zM3 5h1v6H3zM1 7h1v2H1z" fill="currentColor" /></svg></div>
                <MarginSize/>
                <Padding/>
            </div>

        )
    }
}
export default Margin;
