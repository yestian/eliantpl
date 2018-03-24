import React, { Component } from 'react';
import Tab4Index0 from './tab4Index0';
import Tab4Index1 from './tab4Index1';

class RightTab4Content extends Component{
     render(){
         return (
            <div className="tab-pane">
                <div style={{pointerEvents: 'all',height: '100%'}}>
                    <div height="35" style={{display: 'flex',alignItems: 'center',padding: '6px 10px',background: 'rgb(64, 64, 64)',borderBottom: '1px solid rgb(33, 33, 33)'}}>
                        <h5 style={{flex: '1 1 0%',margin: '0px',fontFamily: '-apple-system, BlinkMacSystemFont, proxima-nova, Roboto, Arial, sans-serif, Georgia, serif',fontSize: '12px',fontWeight: 600}}>样式管理</h5>
                        <div tabIndex="0" style={{color: 'rgb(166, 166, 166)',paddingLeft: '12px',borderRadius: '2px',lineHeight: '24px',outline: 0,cursor: 'default',userSelect: 'none'}}>清除 <i>(0)</i></div>
                    </div>
                    <div className="kit-scrollable-native" style={{height: 'calc(100% - 35px)'}}>
                        <div className="kit-scroll-pane kit-scrollbar kit-section-group">
                            <div style={{position: 'relative',height: '4216px',cursor: 'default',userSelect: 'none'}}>
                                <Tab4Index0/>
                                <Tab4Index1/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hud-preload">preload</div>
            </div>
         )
    }
}
export default RightTab4Content;
