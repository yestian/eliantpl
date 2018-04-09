import $ from 'jquery';
import Type from './type';
const {EYE_TOGGLE,ICO_MOUSE_ENTER,ICO_MOUSE_LEAVE,TOPBAR_TOGGLE,SELECT_MEDIA,TOGGLE_EDGES,TOGGLE_EMPTY,TOGGLE_GRID,TOGGLE_XRAY,TOGGLE_TOTUR,TOGGLE_LOGO,TOGGLE_ADD,TOGGLE_PAGES,TOGGLE_CMS,TOGGLE_PICTURES,TOGGLE_SETTINGS,TOGGLE_ADDTYPE,TOGGLE_RIGHT_TABS,ADD_SUB_MOUSEENTER,TOGGLE_QMARK,ITEM_DRAG_START,ITEM_DRAG_STOP,ITEM_DRAG_MOUSEDOWN,ITEM_DROP_OVER,ITEM_DROP_STOP,OPEN_PROP_WINDOW,REMOVE_PROP}=Type;

var timer=null;
/**
 * 根据点击的节点ID设置对应的文字提示信息
 * @param  {[string]} id [data-automation-id]
 * @return {[string]}    [文字信息]
 */
function icoTipMsg(e){
    //-------------公共设置---------------
    let enter=1,
        width=59;
    //------------顶部图标-----------------------
    let topx=$(e.target).offset().left+e.target.clientWidth/2-width/2,//减去弹窗的一半宽度
        topy=42,
        topPath='M0 2a 2 -2 0 0 1 2 -2l20.0078125 0 6 -6 6 6 20.9921875 0a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2h-53a -2 -2 0 0 1 -2 -2z',
        topClipPath='url(#balloon-clip-31260)';
    //------------左侧图标-----------------
    let leftx=42,
        lefty=$(e.target).offset().top+$(e.target).height()/2,
        leftPath='M0 2a 2 -2 0 0 1 2 -2h60a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2h-60a -2 -2 0 0 1 -2 -2l0 -5 -6 -6 6 -6 z',
        leftClipPath='url(#balloon-clip-78953)';
    //顶部模式
    let topmode={
        clipPath:topClipPath,
        top:topy,
        left:topx,
        enter:enter,
        width:width,
        path:topPath,
    }
    //左侧模式
    let leftmode={
        top:lefty,
        left:leftx,
        enter:enter,
        width:width,
        path:leftPath,
        clipPath:leftClipPath,
    }
    let id=e.currentTarget.getAttribute('data-automation-id');
    if(id==='preview-mode-button'){
        return {tiptext:'切换视图',...topmode}
    }
    if(id==='media-pc'){
        return {tiptext:'台式电脑',...topmode}
    }
    if(id==='media-tablet'){
        return {tiptext:'平板电脑',...topmode}
    }
    if(id==='media-landscape'){
        return {tiptext:'手机宽屏',...topmode}
    }
    if(id==='media-portrait'){
        return {tiptext:'手机竖屏',...topmode}
    }
    if(id==='publish-menu-button'){
        return {tiptext:'发布项目',...topmode}
    }
    if(id==='export-code'){
        return {tiptext:'导出代码',...topmode}
    }
    //---------------左侧图标-----------------------
    if(id==='left-sidebar-add-button'){
        return {tiptext:'添加元素',...leftmode}
    }
    if(id==='show-pages'){
        return {tiptext:'所有页面',...leftmode}
    }
    if(id==='left-sidebar-cms-button'){
        return {tiptext:'模板选择',...leftmode}
    }
    if(id==='left-pictures'){
        return {tiptext:'图片素材',...leftmode}
    }
    if(id==='left-settings'){
        return {tiptext:'搜索设置',...leftmode}
    }
    if(id==='left-edges'){
        return {tiptext:'元素边缘',...leftmode}
    }
    if(id==='left-show-empty'){
        return {tiptext:'非空元素',...leftmode}
    }
    if(id==='left-show-grid'){
        return {tiptext:'网格覆盖',...leftmode}
    }
    if(id==='left-xray'){
        return {tiptext:'射线模式',...leftmode}
    }
    if(id==='left-video'){
        return {tiptext:'视频教程',...leftmode}
    }
    if(id==='right-sidebar-style'){
        return {tiptext:'当前样式',...topmode}
    }
    if(id==='right-sidebar-settings-tab-link'){
        return {tiptext:'元素设置',...topmode}
    }
    if(id==='right-sidebar-navigator-tab-link'){
        return {tiptext:'元素导航',...topmode}
    }
    if(id==='right-sidebar-allstyles'){
        return {tiptext:'样式管理',...topmode}
    }
    if(id==='right-sidebar-interactions-tab-link'){
        return {
                tiptext:'交互效果管理',
                clipPath:'url(#balloon-clip-63391)',
                top:topy,
                left:$(e.target).offset().left+e.target.clientWidth-93,
                enter:enter,
                width:93,
                path:'M0 2a 2 -2 0 0 1 2 -2l68.03125 0 6 -6 6 6 8.96875 0a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2h-89a -2 -2 0 0 1 -2 -2z'
            }
    }
    if(id==='topbar-undo'){
        return {
                tiptext:'没有可撤消事件',
                clipPath:'url(#balloon-clip-10822)',
                top:topy,
                left:$(e.target).offset().left+e.target.clientWidth/2-107/2,
                enter:enter,
                width:107,
                path:'M0 2a 2 -2 0 0 1 2 -2l45.3671875 0 6 -6 6 6 45.6328125 0a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2h-103a -2 -2 0 0 1 -2 -2z'
            }
    }
    if(id==='topbar-redo'){
        return {
                tiptext:'没有可重做事件',
                clipPath:'url(#balloon-clip-10822)',
                top:topy,
                left:$(e.target).offset().left+e.target.clientWidth/2-107/2,
                enter:enter,
                width:107,
                path:'M0 2a 2 -2 0 0 1 2 -2l45.3671875 0 6 -6 6 6 45.6328125 0a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2h-103a -2 -2 0 0 1 -2 -2z'
            }
    }
    if(id==='change-saved'){
        return {
                tiptext:'变动已经保存',
                clipPath:'url(#balloon-clip-87790)',
                top:topy,
                left:$(e.target).offset().left+e.target.clientWidth/2-96/2,
                enter:enter,
                width:96,
                path:'M0 2a 2 -2 0 0 1 2 -2l39.703125 0 6 -6 6 6 40.296875 0a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2h-92a -2 -2 0 0 1 -2 -2z'
            }
    }
}


/**
 * 点击工具栏图标，切换响应的功能
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
export function eyeToggle(e,eyeStatus,botBarStatus){
    clearTimeout(timer);
    return { type: EYE_TOGGLE,eyeStatus,botBarStatus}
}
/**
 * 是否显示顶部菜单
 * @param  {boolean} topBarStatus [对topbar状态取反]
 * @return {[type]}              [description]
 */
export function toggleTopBar(topBarStatus){
    return {type:TOPBAR_TOGGLE,topBarStatus}
}
/**
 * 是否显示元素边缘
 * @param  {boolean} showEdges 对元素边缘的值取反0，1得到false,true
 * @return {[type]}           [description]
 */
export function toggleEdges(showEdges){
    clearTimeout(timer);
    return {type:TOGGLE_EDGES,showEdges}
}
/**
 * 是否显示空元素
 * @param  {boolean} showEmpty 对元素的值取反0，1得到false,true
 * @return {[type]}           [description]
 */
export function toggleEmpty(showEmpty){
    clearTimeout(timer);
    return {type:TOGGLE_EMPTY,showEmpty}
}
export function toggleGrid(showGrid){
    clearTimeout(timer);
    return {type:TOGGLE_GRID,showGrid}
}
export function toggleXray(showXray){
    clearTimeout(timer);
    return {type:TOGGLE_XRAY,showXray}
}
export function toggleTutor(showTutor){
    clearTimeout(timer);
    return {type:TOGGLE_TOTUR,showTutor}
}
export function toggleLogo(showLogoMenu){
    return {type:TOGGLE_LOGO,showLogoMenu}
}
export function toggleAdd(showAdds){
    clearTimeout(timer);
    return {type:TOGGLE_ADD,showAdds}
}
export function toggleAddType(e,addType){
    return function(dispatch){
        if($(e.currentTarget).is('.active')){
            return false;
        }
        dispatch({type:TOGGLE_ADDTYPE,addType});
    }
}
export function togglePages(showPages){
    clearTimeout(timer);
    return {type:TOGGLE_PAGES,showPages}
}
export function toggleCMS(showCMS){
    clearTimeout(timer);
    return {type:TOGGLE_CMS,showCMS}
}
export function togglePictures(showPictures){
    clearTimeout(timer);
    return {type:TOGGLE_PICTURES,showPictures}
}
export function toggleSettings(showSettings){
    clearTimeout(timer);
    return {type:TOGGLE_SETTINGS,showSettings}
}

export function toggleRightTabs(e,right_tab_index){
    return function(dispatch){
        if($(e.currentTarget).is('.active')){
            return false;
        }
        clearTimeout(timer);
        dispatch({type:TOGGLE_RIGHT_TABS,right_tab_index});
    }
}
export function selectMedia(e,mediaType,selectedId){
    //如果按钮已经激活，再次点击阻断提交
    return function(dispatch){
        if($(e.target).is('.bem-TopBar_Body_MediaQueryButton-active')){
            return false;
        }
        clearTimeout(timer);
        //返回媒体尺寸范围
        let mediaSize={};
        let size=$(window).width()-296;//左侧，右侧，以及margin的尺寸
        switch(mediaType){
            case 1:
            mediaSize={
                mediaWidth:size,
                mediaMax:size,
                mediaMin:992,
                typeName:'media-main'
            };
            break;
            case 2:
            mediaSize={
                mediaWidth:768,
                mediaMax:991,
                mediaMin:768,
                typeName:'media-medium'
            };
            break;
            case 3:
            mediaSize={
                mediaWidth:568,
                mediaMax:767,
                mediaMin:480,
                typeName:'media-small'
            };
            break;
            case 4:
            mediaSize={
                mediaWidth:320,
                mediaMax:479,
                mediaMin:240,
                typeName:'media-tiny'
            };
            break;
            default:
            mediaSize={};
        }
        dispatch({type:SELECT_MEDIA,media:{mediaType,...mediaSize}});
        // if(typeof selectedId!=='undefined'){
        //     let ifm=$('#site-iframe-next').contents();
        //     let node=ifm.find("[data-id="+selectedId.id+"]");
        //     let left=node.offset().left+100;
        //     let width=node.outerWidth();
        //     dispatch({type:MODIFY_SELECTED_ID,left,width});
        // }
    }
}
/**
 * 鼠标悬停在图标上，显示文字解释框
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
export function icoMouseEnter(e){
    // e.preventDefault();
    e.stopPropagation();
    let id=e.currentTarget.getAttribute('data-automation-id');
    return function(dispatch){
        let tipmsg=icoTipMsg(e);
        timer=setTimeout(()=>{
            dispatch({type: ICO_MOUSE_ENTER,dataId:id, ...tipmsg});
        },600);
    }
}

/**
 * 鼠标离开图标，销毁提示框
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
export function icoMouseLeave(e) {
    clearTimeout(timer);
    return {type:ICO_MOUSE_LEAVE}
}
/**
 * 左侧添加按钮的二级页面，每个模块是否展开
 * @param  {[type]} e [description]
 * @return {[type]}   [参数直接从前端传入]
 */
export function addSubpageToggle(type) {
    return {type:type}
}

/**
 * 添加事件的二级页面，单个元素的Hover事件
 */
export function itemMouseEnter(e){
    let id=$(e.currentTarget).attr('data-item-id');
        id=parseInt(id,0);
    return {type:ADD_SUB_MOUSEENTER,itemEnter:id,itemActive:1}
}
export function itemMouseLeave(){
    return {type:ADD_SUB_MOUSEENTER,itemEnter:0,itemActive:0}
}
export function addSubMark(e){
    let id=$(e.currentTarget).parent().parent().attr('data-item-id');
    id=parseInt(id,0);
    return {type:TOGGLE_QMARK,clickEleId:id}
}
export function closeSubMark(){
    return {type:TOGGLE_QMARK,clickEleId:0}
}

/**
 * 拖动元素节点
 */
export function itemDragStart(e,ui){
    //开始drag,关闭添加的二级页面,showAdds=0
    //drag模式激活 dragMode=1,此模式，iframe添加wf-drag-mode
    let dragId=parseInt($(e.target).attr('data-item-id'),0);
    return {type:ITEM_DRAG_START,showAdds:0,dragMode:1,dragId}
}


/**
 * 要拖动的元素，的初始坐标
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
export function dragItemDown(e){
    let id=$(e.currentTarget).attr('data-item-id');
    id=parseInt(id,0);
    // let svg=$(e.currentTarget).find('svg').prop('outerHTML');
    // let title=$(e.currentTarget).find('svg').parent().next().text();
    // return {type:ITEM_DRAG_MOUSEDOWN,itemDragId:id,itemSVG:svg,itemTitle:title}
    return {type:ITEM_DRAG_MOUSEDOWN,itemDragId:id}
}
/**
 * 在dragStop失效的情况下的不久，或者，只点击，不拖拽情况
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
export function itemMouseUp(e){
    return {type:ITEM_DRAG_STOP}
}

/**
 * 拖动的元素在iframe框里面移动的时候
 */
export function itemDropOver(event,ui){
    console.log(event,ui)
    let $e=$(event.target);
    let dropPid=parseInt($e.attr('data-w-id'),0);
    let dropPtypeid=parseInt($e.attr('data-type'),0);
    let pleft=$('#site-iframe-next').offset().left+$e.offset().left;//父节点的左边距
    let ptop=$e.offset().top+35;//父节点的上边距
    let pheight=$e.height();//父节点的高度
    let pwidth=$e.width();//父节点宽度
    return {type:ITEM_DROP_OVER,dropPid,dropPtypeid,pleft,ptop,pheight,pwidth}
}

/**
 * 拖动结束
 */
export function itemDragStop(e,ui){
    return {type:ITEM_DRAG_STOP,dragMode:0,itemActive:0}
}
/**
 * 放置结束
 */
export function itemDropStop(e,ui){
    return {type:ITEM_DROP_STOP,pleft:0,ptop:0,pheight:0,pwidth:0}
}

//右侧弹出窗口-------------------------------------------------------
//点击OK按钮的时候
export function openPropWindow(){
    return {type:OPEN_PROP_WINDOW,openPropWindow:0}
}
//移除属性，点击移除属性的时候
export function removeThisProp(prop){
    return function(dispatch){
        dispatch({type:REMOVE_PROP,prop});
        dispatch({type:OPEN_PROP_WINDOW,openPropWindow:1});
    }
}
//右侧弹出窗口-------------------------------------------------------
