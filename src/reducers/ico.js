import { combineReducers } from 'redux';
import $ from 'jquery';
const stateInit={
    enter:0,//图标的mousenter
    eyeStatus:0,//眼睛状态
    topBarStatus:1,//顶部菜单默认显示
    botBarStatus:1,//底部菜单默认显示
    showEdges:1,//是否显示元素边缘，默认显示
    showEmpty:1,//默认显示空元素
    showGrid:0,//默认不显示网格，0，1,2切换
    showXray:0,//默认不显示
    showLogoMenu:0,//默认不显示logomenu
    addType:0,//添加按钮里面的类型切换
    addSub1Expand:1,//添加按钮下的二级菜单，子模块是否展开
    addSub2Expand:1,
    addSub3Expand:1,
    addSub4Expand:1,
    addSub5Expand:1,
    addSub6Expand:1,
    addSubMouseEnter:0,//添加页面的二级按钮hover是否激活
    dragMode:0,//是否开启drag模式，iframe添加一些额外的类等
    leftBtns:{
        showAdds:0,//添加元素
        showPages:0,//页面列表
        showCMS:0,//模板列表
        showPictures:0,//图标列表
        showSettings:0,//系统设置
        showTutor:0,//默认不打开视频知道
    },
    media:{
        mediaType:1,
        mediaWidth:$(window).width()-296,//默认屏幕尺寸
        mediaMax:$(window).width()-296,//最大尺寸
        mediaMin:992,//最小尺寸
        typeName:'media-main',//显示在workspce类上
    },
    itemEnter:0,//鼠标没有进入元素,否则赋值ID
    itemActive:0,//鼠标是否进入元素，主要给克隆助手使用
    clickEleId:0,//点击了哪个元素的帮助信息，默认为0，不弹窗
    dragId:0,//拖动哪个节点
}


const ico_event=(state=stateInit,action)=>{
    switch(action.type){
        //点击了某个可拖动的元素
        case 'ITEM_DRAG_MOUSEDOWN' :
        return Object.assign({},state,{
            ...action
        });
        //左边工具栏元素拖拽开始
        case 'ITEM_DRAG_START' :
        return Object.assign({},state,{
            leftBtns:{...state.leftBtns,showAdds:action.showAdds},
            dragMode:action.dragMode,dragId:action.dragId,
        });
        case 'ITEM_DRAG_STOP' :
        return Object.assign({},state,{
            ...action
        });
        case 'ITEM_DRAG' :
        return Object.assign({},state,{
            ...action
        });
        //点击了哪个元素的帮助信息
        case 'TOGGLE_QMARK' :
        return Object.assign({},state,{
            ...action
        });
        //添加元素的页面的二级页面元素是否激活hover操作
        case 'ADD_SUB_MOUSEENTER' :
        return Object.assign({},state,{
            ...action
        });
        //点击眼睛图标
        case 'EYE_TOGGLE' :
        return Object.assign({},state,{
            leftBtns:{
                showAdds:0,//添加元素
                showPages:0,//页面列表
                showCMS:0,//模板列表
                showPictures:0,//图标列表
                showSettings:0,//系统设置
                showTutor:0,//默认不打开视频知道
            },
            ...action,
            enter:0,//隐藏提示弹窗
        });
        //是否显示顶部菜单
        case 'TOPBAR_TOGGLE' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示顶部菜单
        case 'SELECT_MEDIA' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示添加页面
        case 'TOGGLE_ADD' :
        return Object.assign({},state,{
            leftBtns:{
                showAdds:action.showAdds,
                showPages:0,
                showCMS:0,
                showTutor:0,
                showPictures:0,
                showSettings:0,
            }
        });
        case 'TOGGLE_ADDTYPE':
        return Object.assign({},state,{
            ...action,
        });
        //是否显示模板页面
        case 'TOGGLE_PAGES' :
        return Object.assign({},state,{
            leftBtns:{
                showAdds:0,
                showPages:action.showPages,
                showCMS:0,
                showTutor:0,
                showPictures:0,
                showSettings:0,
            }
        });
        //是否显示模板
        case 'TOGGLE_CMS' :
        return Object.assign({},state,{
            leftBtns:{
                showAdds:0,
                showPages:0,
                showTutor:0,
                showCMS:action.showCMS,
                showPictures:0,
                showSettings:0,
            }
        });
        //是否显示图片列表
        case 'TOGGLE_PICTURES' :
        return Object.assign({},state,{
            leftBtns:{
                showAdds:0,
                showTutor:0,
                showPages:0,
                showCMS:0,
                showPictures:action.showPictures,
                showSettings:0,
            }
        });
        //是否设置的页面
        case 'TOGGLE_SETTINGS' :
        return Object.assign({},state,{
            leftBtns:{
                showAdds:0,
                showPages:0,
                showCMS:0,
                showTutor:0,
                showPictures:0,
                showSettings:action.showSettings,
            }
        });
        //是否显示元素边缘
        case 'TOGGLE_EDGES' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示空元素
        case 'TOGGLE_EMPTY' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示网格
        case 'TOGGLE_GRID' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示X射线
        case 'TOGGLE_XRAY' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示视频指导
        case 'TOGGLE_TOTUR' :
        return Object.assign({},state,{
            leftBtns:{
                showAdds:0,
                showPages:0,
                showCMS:0,
                showTutor:action.showTutor,
                showPictures:0,
                showSettings:0
            }
        });
        //是否显示logo下的菜单
        case 'TOGGLE_LOGO' :
        return Object.assign({},state,{
            ...action,
        });
        case 'ICO_MOUSE_ENTER' :
        return Object.assign({},state,{
                ...action
        });
        //鼠标离开图标
        case 'ICO_MOUSE_LEAVE' :
        return Object.assign({},state,{
            enter:0
        });
        //是否展开添加按钮二级页面的子元素
        case 'ADD_SUB1_TOGGLE' :
        return Object.assign({},state,{
            addSub1Expand:!state.addSub1Expand
        });
        case 'ADD_SUB2_TOGGLE' :
        return Object.assign({},state,{
            addSub2Expand:!state.addSub2Expand
        });
        case 'ADD_SUB3_TOGGLE' :
        return Object.assign({},state,{
            addSub3Expand:!state.addSub3Expand
        });
        case 'ADD_SUB4_TOGGLE' :
        return Object.assign({},state,{
            addSub4Expand:!state.addSub4Expand
        });
        case 'ADD_SUB5_TOGGLE' :
        return Object.assign({},state,{
            addSub5Expand:!state.addSub5Expand
        });
        case 'ADD_SUB6_TOGGLE' :
        return Object.assign({},state,{
            addSub6Expand:!state.addSub6Expand
        });
        //通过drag重新调整工作区宽度
        case 'SITE_RESIZE_DEACTIVE':
        return Object.assign({},state,{
            media:{
                mediaType:state.media.mediaType,
                mediaWidth:action.mediaWidth,
                mediaMax:state.media.mediaMax,
                mediaMin:state.media.mediaMin,
                typeName:state.media.typeName
            }
        });
        case 'SITE_RESIZE2':
        return Object.assign({},state,{
            media:{
                mediaType:state.media.mediaType,
                mediaWidth:action.mediaWidth,
                mediaMax:state.media.mediaMax,
                mediaMin:state.media.mediaMin,
                typeName:state.media.typeName
            }
        });
        default:
        return state;
    }
}
//--------------------右侧功能---------------------------------

const rightState={
    right_tab_index:1,//右侧默认显示第一个按钮内容,12,3,4,5
}
//右侧工具栏的功能集合
const right=(state=rightState,action)=>{
    switch(action.type){
        case 'TOGGLE_RIGHT_TABS':
        return Object.assign({},state,{
            ...action,
        });
        default:
        return state;
    }
}

//////////--------------------合并---------------------////////////////////////
const reducer=combineReducers({
    ico_event,
    right
});
export default reducer;
