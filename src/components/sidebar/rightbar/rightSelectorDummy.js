import React, { Component } from 'react';

class RightSelectorDummy extends Component{
    render() {
        return (
            <div className="kit-blocker dummy">
                <div className="notice dummy">
                    <div className="icon sprite-main"></div>
                    <div className="message">
                        <div className="bem-Paragraph " style={{fontSize: '11px',padding: '0px 20px 8px',lineHeight: '14px'}}>在画布上选择一个元素来激活这个面板.</div>
                    </div>
                </div>
                <div className="notice too-small">
                    <div className="icon sprite-main"></div>
                    <div className="message">
                        <div className="bem-Paragraph " style={{fontSize: '11px',padding: '0px 20px 8px',lineHeight: '14px'}}>哦，看起来你的屏幕太小了，无法编辑这个设备的样式.</div>
                        <div className="kit-divider"></div>
                        <div className="bem-Paragraph " style={{fontSize: '11px',padding: '0px 20px 8px',lineHeight: '14px'}}>调整你的屏幕大小，使画布更适合.</div>
                    </div>
                </div>
                <div className="notice zoom">
                    <div className="icon sprite-main"></div>
                    <div className="message">
                        <div className="bem-Paragraph " style={{fontSize: '11px',padding: '0px 20px 8px',lineHeight: '14px'}}>哦，看起来你的缩放级别已经改变了.</div>
                        <div className="kit-divider"></div>
                        <div className="bem-Paragraph " style={{fontSize: '11px',padding: '0px 20px 8px',lineHeight: '14px'}}>选择 <strong>浏览 › 实际尺寸</strong> 获取标准焦距.</div>
                    </div>
                </div>
                <div className="notice not-allowed">
                    <svg width="40" height="32" viewBox="0 0 40 32" className="bem-Svg " style={{display: 'block',transform: 'translate(0px, 0px)'}}><path d="M22.28 26.86zM5.11 29.59zM38.66 6.52a3.22 3.22 0 0 0 .12-4.21 3.2 3.2 0 0 0-4.43-.43L21.71 12.23 10.37.88 9 2.3 37.7 31l1.41-1.41-11.16-11.13zm-15.53 7.13L35.49 3.4a1.22 1.22 0 0 1 1.72.18 1.22 1.22 0 0 1 0 1.59L26.53 17zm-2.3 4l-.06-.06h-.07a6.67 6.67 0 0 0-3.89-1.24 6.88 6.88 0 0 0-1.4.14 6.38 6.38 0 0 0-3.12 1.78c-.8.77-1.44 1.61-2.1 2.27a10.12 10.12 0 0 1-4.95 2.56 10 10 0 0 1-2.14.21h-1l-1.74-.17.71 1.54a12.46 12.46 0 0 0 11.28 7.24 12.16 12.16 0 0 0 9.92-5.07A6.54 6.54 0 0 0 23.52 23a6.7 6.7 0 0 0-2.69-5.33zm-.18 8a10.16 10.16 0 0 1-8.3 4.24 10.37 10.37 0 0 1-6.07-2 10.36 10.36 0 0 1-2.57-2.68 11.4 11.4 0 0 0 2-.23 12.08 12.08 0 0 0 5.94-3.13c.77-.79 1.4-1.61 2.06-2.24a4.38 4.38 0 0 1 2.15-1.26 4.89 4.89 0 0 1 1-.1 4.67 4.67 0 0 1 2.68.84h.06a4.7 4.7 0 0 1 2 3.81 4.53 4.53 0 0 1-.95 2.79z" fill="currentColor"></path></svg>
                    <h3>没有样式</h3>
                    <div className="message">
                        <div className="bem-Paragraph " style={{fontSize: '11px',padding: '0px 20px 8px',lineHeight: '14px'}}>样式和一些设置对于这种类型的元素是不可用的.</div>
                    </div>
                </div>
                <div className="notice no-class">
                    <svg width="51" height="32" viewBox="0 0 51 32" className="bem-Svg" style={{display: 'block',transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M9 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm16 11V3c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2zM3 17V3h20v10.586l-5-5L9.586 17H3zm15-5.586l5 5V17H12.414L18 11.414zM28 5v2h22V5H28zm0 8h22v-2H28v2zm0 6h22v-2H28v2zM4 25h46v-2H4v2zm0 6h31v-2H4v2z"></path></svg>
                    <h3>富文本样式</h3>
                    <div className="message"><span>要在富文本块中设置文本元素，请遵循以下步骤:</span><ol><li><span>确保富文本块有一个类.</span></li><li><span>选择一个文本元素，在选择器菜单中选择标签.</span></li><li><span>启用“Nest选择器”选项和样式!</span></li></ol></div>
                </div>
            </div>
        )
    }
}
export default RightSelectorDummy;
