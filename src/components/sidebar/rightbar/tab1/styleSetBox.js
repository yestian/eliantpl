import React, { Component } from 'react';
import Layout from './layout/layout';
import Typography from './typography/index';
import Background from './background/index';
import Border from './border/index';
import Shadows from './shadows/index';
import Translate from './translate/index';
import Effect from './effect/index';

class StyleSetBox extends Component{
     render(){
         return(
            <div className="kit-scrollable-nano has-scrollbar scroll-shadow">
                <div className="kit-scroll-pane kit-section-group">
                    <div className="top-shadow"></div>
                    <Layout/>
                    <Typography/>
                    <Background/>
                    <Border/>
                    <Shadows/>
                    <Translate/>
                    <Effect/>
                </div>
            </div>
        )
    }
}
export default StyleSetBox;
