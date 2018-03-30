import React, { Component } from 'react';
import Layout from './layout/layout';

class StyleSetBox extends Component{
     render(){
         return(
            <div className="kit-scrollable-nano has-scrollbar scroll-shadow">
                <div className="kit-scroll-pane kit-section-group">
                    <div className="top-shadow"></div>
                    <Layout/>
                    {/* <CssTypography/>
                    <CssBackground/>
                    <CssBorder/>
                    <CssShadows/>
                    <CssTranslate/>
                    <CssEffect/> */}
                </div>
            </div>
        )
    }
}
export default StyleSetBox;
