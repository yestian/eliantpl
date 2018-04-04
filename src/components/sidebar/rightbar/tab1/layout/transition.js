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
         let adv=this.props.data.layout.layoutAdv;
         return(
            <div className="transition-parent kit-panel">
                <Width/>
                <Height/>
                {adv?<MinWidth/>:''}
                {adv?<MinHeight/>:''}
                {adv?<MaxWidth/>:''}
                {adv?<MaxHeight/>:''}
                {adv?<div className="transition-child clearfix" />:''}
                {adv?<div className="transition-child kit-divider-small" />:''}
                <Float/>
                {adv?<Clear/>:''}
                {adv?<div className="transition-child kit-divider-small" />:''}
                {adv?<OverFlow/>:''}
                {adv?<div className="transition-child kit-divider-small" />:''}
                {adv?<Position/>:''}
            </div>
        )
    }
}
export default Transition;
