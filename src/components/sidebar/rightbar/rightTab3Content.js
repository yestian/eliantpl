import React, {Component} from 'react';
import Tab3Items from './tab3Items';

class RightTab3Content extends Component {
    render() {
        return (
            <div className="tab-pane">
                <div id="react-navigator" className="allow-drag-cursor" style={{position: 'relative', backgroundColor: 'rgb(43, 43, 43)', pointerEvents: 'auto'}}><div>
                    <div style={{height: '36px', display: 'flex', alignItems: 'center', padding: '6px 10px', background: 'rgb(64, 64, 64)', borderBottom: '1px solid rgb(33, 33, 33)'}}>
                        <h5 style={{flex: '1 1 0%', margin: 0, fontFamily: '-apple-system, BlinkMacSystemFont, proxima-nova, Roboto, Arial, sans-serif, Georgia, serif', fontSize: '12px', fontWeight: 600}}>导航栏</h5>
                        <div tabIndex={0} style={{color: 'rgb(166, 166, 166)', paddingLeft: '12px', borderRadius: '2px', lineHeight: '24px', outline: 0, cursor: 'default', userSelect: 'none'}}>展开所有</div>
                        <div tabIndex={0} style={{color: 'rgb(166, 166, 166)', paddingLeft: '12px', borderRadius: '2px', lineHeight: '24px', outline: 0, cursor: 'default', userSelect: 'none'}}>收起所有</div>
                    </div>
                    <div><div style={{position: 'relative', overflow: 'hidden', width: '240px', height: '494px'}}><div style={{transform: 'translate3d(0px, 0px, 0px)'}}>
                        <Tab3Items/>
                    </div><span>滚动条代码</span></div></div></div></div>
                <div className="hud-preload">preload</div>
            </div>

        )
    }
}
export default RightTab3Content;
