import Type from './type';
import $ from 'jquery';
const {TOGGLE_CSSLAYOUT,TOGGLE_LAYOUT_ADVANCED,DISPLAY_SETTING_HOVER,DISPLAY_SETTING_CLICK,UPDATE_DISPLAY,TOGGLE_SAME_TYPE,SELECTOR_STATE,SELECTOR_STATE_OPEN,NEED_CLASS,SET_SUGGESTIONS,SUGGESTIONS_HOVER,TOGGLE_BG,TOGGLE_TYPOGRAPHY,TOGGLE_TYPOGRAPHY_ADV,TOGGLE_BORDER,TOGGLE_EFFECT,TOGGLE_SHADOWS,TOGGLE_TRANSLATE,SHOW_NODE_MARGIN,SHOW_NODE_PADDING,NODE_MARGIN_CLICK,NODE_PADDING_CLICK,LAYOUT_DRAG_START,LAYOUT_DRAGGING,LAYOUT_DRAG_STOP,NODE_BEFORE_DRAG,LAYOUT_MOUSEUP,MARGIN_AUTO,SET_VALUE}=Type;






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
        dispatch({type: TOGGLE_BG});

    }
}
export function borderTitle(e){
    e.stopPropagation();//阻止冒泡
    return function(dispatch){
        dispatch({type: TOGGLE_BORDER});
    }
}
export function effectTitle(e){
    e.stopPropagation();//阻止冒泡
    return function(dispatch){
        dispatch({type: TOGGLE_EFFECT});
    }
}
export function shadowsTitle(e){
    e.stopPropagation();//阻止冒泡
    return function(dispatch){
        dispatch({type: TOGGLE_SHADOWS});
    }
}
export function translateTitle(e){
    e.stopPropagation();//阻止冒泡
    return function(dispatch){
        dispatch({type: TOGGLE_TRANSLATE});
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

//鼠标在外层拖拽工具上
export function showNodeMargin(status){
    return function(dispatch){
        dispatch({type:SHOW_NODE_MARGIN,data:status})
    }
}
//鼠标在内层拖拽工具上
export function showNodePadding(status){
    return {type:SHOW_NODE_PADDING,data:status}
}

/**
 * 点击layout上的可拖动的地方，给当前方位的值+1
 * @param  {[type]} marginOrPadding [点击的是margin还是padding]
 * @param  {[type]} direction       [上右下左四个方位]
 * @return {[type]}                 [description]
 */
export function nodeLayoutMouseDown(marginOrPadding,direction){
    return function(dispatch){
        //margin 点击
        if(marginOrPadding===1){
            dispatch({type:NODE_MARGIN_CLICK,nodeMarginActive:1,nodePosition:direction})
        }

        //padding点击
        if(marginOrPadding===2){
            dispatch({type:NODE_PADDING_CLICK,nodePaddingActive:1,nodePosition:direction})
        }
        dispatch({type:NODE_BEFORE_DRAG,layoutDragType:`${marginOrPadding}${direction}`})
    }
}
/**
 * 鼠标弹起，
 * @return {[type]} [description]
 */
export function nodeLayoutMouseUp(marginOrPadding,direction,hasDragged){
    return function(dispatch){
        //发生了drag行为，就返回
        // if(hasDragged){
        //     return false;
        // }
        //如果没有drag行为，给当前结果+1，需要margin还是padding,点击是哪个方位
        //margin
        if(marginOrPadding===1){
            dispatch({type:NODE_MARGIN_CLICK,nodeMarginActive:0,nodePosition:0})
        }

        //padding
        if(marginOrPadding===2){
            dispatch({type:NODE_PADDING_CLICK,nodePaddingActive:0,nodePosition:0})
        }
        dispatch({type:LAYOUT_MOUSEUP})
    }
}


export function layoutDragStart(event,ui,layoutDragId){
    //记录节点的初始值
    let node=$('#site-iframe-next').contents().find("[data-id="+layoutDragId+"]");
    let data={
        left0:ui.offset.left,
        top0:ui.offset.top,
        mleft:parseFloat(node.css("marginLeft"),10),
        mright:parseFloat(node.css('marginRight'),10),
        mtop:parseFloat(node.css('marginTop'),10),
        mbottom:parseFloat(node.css('marginBottom'),10),
        ptop:parseFloat(node.css('paddingTop'),10),
        pright:parseFloat(node.css('paddingRight'),10),
        pbottom:parseFloat(node.css('paddingBottom'),10),
        pleft:parseFloat(node.css('paddingLeft'),10)
    }
    //给mouseup做判断，dragId和选中的sid一致，说明产生了drag
    return {type:LAYOUT_DRAG_START,data,layoutDragId}
}
/**
 * 记录坐标的实时变动
 * @param  {[type]} event [description]
 * @param  {[type]} ui    [description]
 * @return {[type]}       [description]
 */
export function layoutDragging(event,ui){
    let data={
        left:ui.offset.left,
        top:ui.offset.top
    }
    return {type:LAYOUT_DRAGGING,data}
}

export function layoutDragStop(event,ui){
    //恢复节点选中，清空坐标数据
    return {type:LAYOUT_DRAG_STOP}
}

export function marginAuto(status){
    //恢复节点选中，清空坐标数据
    return {type:MARGIN_AUTO,status}
}

export function setValue(prop,value){
    console.log(prop,value);
    //恢复节点选中，清空坐标数据
    return {type:SET_VALUE,prop,value}
}
