import React, { Component } from 'react';

class LeftHelp extends Component{
    render() {
        return (
            <div className="help-section">
                <div className="button trigger sprite-mid">
                    <i className="icon-main chrome-help"></i>
                </div><div className="popup-menu">
                    <div className="tick"></div>
                    <div className="link kbase">
                        <i className="sprite-main"></i>
                        <span>帮助 &amp; 反馈</span>
                    </div>
                    <div className="link keys">
                        <i className="sprite-main"></i><span>键盘快捷键</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default LeftHelp;
