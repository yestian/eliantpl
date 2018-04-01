import React, { Component } from 'react';
import Width from './transition/width';
import Height from './transition/height';
import MinWidth from './transition/minWidth';
import MinHeight from './transition/minHeight';
import MaxWidth from './transition/maxWidth';
import MaxHeight from './transition/maxHeight';
import Float from './transition/float';
import Clear from './transition/clear';
import OverFlow from './transition/overFlow';
import Position from './transition/position';

class Transition extends Component{
     render(){
         return(
            <div className="transition-parent kit-panel">
                <Width/>
                <Height/>
                <MinWidth/>
                <MinHeight/>
                <MaxWidth/>
                <MaxHeight/>
                <div className="transition-child clearfix" />
                <div className="transition-child kit-divider-small" />
                <Float/>
                <Clear/>
                <div className="transition-child kit-divider-small" />
                <OverFlow/>
                <div className="transition-child kit-divider-small" />
                <Position/>
            </div>
        )
    }
}
export default Transition;
