import React, { Component } from 'react';
import Adds from './leftbar/leftsub/adds';
import Pages from './leftbar/leftsub/pages';
import Pictures from './leftbar/leftsub/pictures';
import Settings from './leftbar/leftsub/settings';

class LeftbarPanel extends Component{
    render(){
        let ico=this.props.icoprops;
        if(ico.leftBtns.showAdds){
            return <Adds/>
        }
        if(ico.leftBtns.showPages){
            return <Pages/>
        }
        if(ico.leftBtns.showPictures){
            return <Pictures/>
        }
        if(ico.leftBtns.showSettings){
            return <Settings/>
        }
        //默认显示这个空的div
        return '';
    }
}

export default LeftbarPanel;

//此页面用来判断，显示加载不同的组件
