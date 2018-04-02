import Type from './type';
import $ from 'jquery';
const {TOGGLE_CSSLAYOUT,TOGGLE_LAYOUT_ADVANCED,DISPLAY_SETTING_HOVER,DISPLAY_SETTING_CLICK,UPDATE_DISPLAY,TOGGLE_SAME_TYPE,SELECTOR_STATE,SELECTOR_STATE_OPEN,NEED_CLASS,SET_SUGGESTIONS,SUGGESTIONS_HOVER,TOGGLE_BG,TOGGLE_BG_ADV,TOGGLE_TYPOGRAPHY,TOGGLE_TYPOGRAPHY_ADV,TOGGLE_BORDER,TOGGLE_BORDER_ADV,TOGGLE_EFFECT,TOGGLE_EFFECT_ADV,TOGGLE_SHADOWS,TOGGLE_SHADOWS_ADV,TOGGLE_TRANSLATE,TOGGLE_TRANSLATE_ADV}=Type;






let timer=null;
/**
 * 切换是否打开css lyaout布局样式
 * @return {[type]} [description]
 */
export function layoutTitle(e){
    e.stopPropagation();//阻止冒泡
    return function(dispatch){
        if($(e.currentTarget).is('.advanced')){
            dispatch({type: TOGGLE_LAYOUT_ADVANCED});
        }else{
            dispatch({type: TOGGLE_CSSLAYOUT});
        }
    }
}
export function tPTitle(e){
    e.stopPropagation();//阻止冒泡
    return function(dispatch){
        if($(e.currentTarget).is('.advanced')){
            dispatch({type: TOGGLE_TYPOGRAPHY_ADV});
        }else{
            dispatch({type: TOGGLE_TYPOGRAPHY});
        }
    }
}
export function bgTitle(e){
    e.stopPropagation();//阻止冒泡
    return function(dispatch){
        if($(e.currentTarget).is('.advanced')){
            dispatch({type: TOGGLE_BG_ADV});
        }else{
            dispatch({type: TOGGLE_BG});
        }
    }
}
export function borderTitle(e){
    e.stopPropagation();//阻止冒泡
    return function(dispatch){
        if($(e.currentTarget).is('.advanced')){
            dispatch({type: TOGGLE_BORDER_ADV});
        }else{
            dispatch({type: TOGGLE_BORDER});
        }
    }
}
export function effectTitle(e){
    e.stopPropagation();//阻止冒泡
    return function(dispatch){
        if($(e.currentTarget).is('.advanced')){
            dispatch({type: TOGGLE_EFFECT_ADV});
        }else{
            dispatch({type: TOGGLE_EFFECT});
        }
    }
}
export function shadowsTitle(e){
    e.stopPropagation();//阻止冒泡
    return function(dispatch){
        if($(e.currentTarget).is('.advanced')){
            dispatch({type: TOGGLE_SHADOWS_ADV});
        }else{
            dispatch({type: TOGGLE_SHADOWS});
        }
    }
}
export function translateTitle(e){
    e.stopPropagation();//阻止冒泡
    return function(dispatch){
        if($(e.currentTarget).is('.advanced')){
            dispatch({type: TOGGLE_TRANSLATE_ADV});
        }else{
            dispatch({type: TOGGLE_TRANSLATE});
        }
    }
}
export function layoutIcoMouseEnter(e,index){
    let tiptext='',
    //大的
    width=73,
    path="M0 2a 2 -2 0 0 1 2 -2h69a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2l-28.5 0 -6 6 -6 -6 -28.5 0a -2 -2 0 0 1 -2 -2z",
    clipPath="url(#balloon-clip-14950)",
    //小的
    path2="M0 2a 2 -2 0 0 1 2 -2h36a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2l-12 0 -6 6 -6 -6 -12 0a -2 -2 0 0 1 -2 -2z",
    clipPath2="url(#balloon-clip-49828)",width2=40;
    let left=$(e.target).offset().left+$(e.currentTarget).width()/2-37;
    switch(index){
        case 1:
        tiptext='块状结构';
        break;
        case 2:
        tiptext='内联块结构';
        break;
        case 3:
        tiptext='内联结构';
        break;
        case 4:
        tiptext='弹性布局';
        break;
        case 5:
        tiptext='隐藏';
        width=width2;
        path=path2;
        clipPath=clipPath2;
        left=left+18;
        break;
        default:
        tiptext='';
    }
    let data={
        clipPath:clipPath,
        path:path,
        top:$(e.target).offset().top-35,
        left:left,
        width:width,
        tiptext:tiptext
    }
    return function(dispatch){
        timer=setTimeout(()=>{
            dispatch({type: DISPLAY_SETTING_HOVER,displaySettingTip:data});
        },600);
    }
}

/**
 * 鼠标离开图标，销毁提示框
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
export function layoutIcoMouseLeave() {
    clearTimeout(timer);
    return {type:DISPLAY_SETTING_HOVER,displaySettingTip:{}}
}

//点击了布局的哪个视图模式
export function displaySettingClick(newIndex,oldIndex){
    clearTimeout(timer);
    return function(dispatch){
        //如果已经是选中状态，则返回
        if(newIndex===oldIndex){return false;}
        //创建类名
        dispatch({type:UPDATE_DISPLAY,displayIndex:newIndex});
        dispatch({type:DISPLAY_SETTING_CLICK});
    }
}
//同类型的节点提示线是否显示
export function toggleSameTypeNodesLine(){
    return {type:TOGGLE_SAME_TYPE}
}

//类输入框的状态设置
export function selectorState(e,state){
    e.preventDefault();
    return {type:SELECTOR_STATE,state}
}

export function selectorStateOpen(){
    return {type:SELECTOR_STATE_OPEN}
}

//点击输入框
export function needClass(){
    return {type:NEED_CLASS}
}

export function suggestionClick(e){
    e.stopPropagation();
    return {type:SET_SUGGESTIONS}
}
export function suggestionHover(index){
    return {type:SUGGESTIONS_HOVER,suggestionIndex:index}
}
