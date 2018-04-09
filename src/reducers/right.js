import { combineReducers } from 'redux';

const layoutInit={
    layoutOpen:!0,
    layoutAdv:!1,
    typographyOpen:!0,
    typographyAdv:!1,
    bgOpen:!0,
    borderOpen:!0,
    effectOpen:!0,
    shadowsOpen:!0,
    translateOpen:!0,
    showSameTypeNodesLine:!1,//同类节点的提示线边框是否显示
    selectorState:0,//类输入框的状态，默认无0,1,2,3
    slectorStateOpen:!1,//展开state下拉菜单
    needClass:!1,//输入框点击，弹出下拉页面
    suggestionIndex:0,//建议的类列表，是否激活

    showNodeMargin:0,//hover事件是否显示节点margin的辅助网格
    showNodePadding:0,//hover事件是否显示节点margin的辅助网格
    nodeMarginActive:0,//点击事件激活
    nodePaddingActive:0,//点击事件激活
    nodePosition:0,//右侧layout工具栏，点击的方位，
    layoutDragId:0,
    marginAuto:0,
    openUnit:0,//layout后面的单位
    openPropWindow:0,//是否打开属性值的弹窗,===1的时候清空输入框的值
}
//布局模块
const layout=(state=layoutInit,action)=>{
    switch(action.type){
        //css layout显示设置，鼠标click提示文字
        case 'OPEN_PROP_WINDOW' :
        return Object.assign({},state,{
            ...action
        });
        case 'OPEN_UNIT' :
        return Object.assign({},state,{
            openUnit:action.openUnit
        });
        case 'DISPLAY_SETTING_CLICK' :
        return Object.assign({},state,{
            displaySettingTip:{}
        });
        case 'MARGIN_AUTO' :
        return Object.assign({},state,{
            marginAuto:!state.marginAuto
        });
        case 'NODE_CLICK' :
        return Object.assign({},state,{
            selectorState:0,
            marginAuto:0
        });
        case 'NODE_HELPER_CLICK' :
        return Object.assign({},state,{
            selectorState:0
        });
        case 'BOTTOM_NAV_CLICK' :
        return Object.assign({},state,{
            selectorState:0
        });
        //css layout显示设置，鼠标hover提示文字
        case 'DISPLAY_SETTING_HOVER' :
        return Object.assign({},state,{
            displaySettingTip:action.displaySettingTip
        });
        //css layout展开收缩
        case 'TOGGLE_CSSLAYOUT' :
        return Object.assign({},state,{
            layoutOpen:!state.layoutOpen
        });
        //是否显示layout高级选项
        case 'TOGGLE_LAYOUT_ADVANCED' :
        return Object.assign({},state,{
            layoutAdv:!state.layoutAdv
        });
        //css layout展开收缩
        case 'TOGGLE_TYPOGRAPHY' :
        return Object.assign({},state,{
            typographyOpen:!state.typographyOpen
        });
        //是否显示layout高级选项
        case 'TOGGLE_TYPOGRAPHY_ADV' :
        return Object.assign({},state,{
            typographyAdv:!state.typographyAdv
        });

        //css layout展开收缩
        case 'TOGGLE_BG' :
        return Object.assign({},state,{
            bgOpen:!state.bgOpen
        });

        //css layout展开收缩
        case 'TOGGLE_BORDER' :
        return Object.assign({},state,{
            borderOpen:!state.borderOpen
        });


        //css layout展开收缩
        case 'TOGGLE_EFFECT' :
        return Object.assign({},state,{
            effectOpen:!state.effectOpen
        });


        //css layout展开收缩
        case 'TOGGLE_SHADOWS' :
        return Object.assign({},state,{
            shadowsOpen:!state.shadowsOpen
        });


        //css layout展开收缩
        case 'TOGGLE_TRANSLATE' :
        return Object.assign({},state,{
            translateOpen:!state.translateOpen
        });




        //是否显示同类元素
        case 'TOGGLE_SAME_TYPE' :
        return Object.assign({},state,{
            showSameTypeNodesLine:!state.showSameTypeNodesLine
        });
        //改变类选择输入框的状态
        case 'SELECTOR_STATE_OPEN' :
        return Object.assign({},state,{
            slectorStateOpen:!state.slectorStateOpen
        });
        //改变类选择输入框的状态
        case 'SELECTOR_STATE' :
        return Object.assign({},state,{
            selectorState:action.state,
            slectorStateOpen:0
        });
        //输入框的点击操作
        case 'NEED_CLASS' :
        return Object.assign({},state,{
            needClass:!state.needClass
        });
        //hover建议的类
        case 'SUGGESTIONS_HOVER' :
        return Object.assign({},state,{
            suggestionIndex:action.suggestionIndex
        });
        //点击建议的类
        case 'SET_SUGGESTIONS' :
        return Object.assign({},state,{
            needClass:!state.needClass
        });
        //mouseenter,leave----------------------------
        case 'SHOW_NODE_MARGIN' :
        return Object.assign({},state,{
            showNodeMargin:action.data
        });
        case 'SHOW_NODE_PADDING' :
        return Object.assign({},state,{
            showNodePadding:action.data
        });
        //click--------------------------------------
        case 'NODE_MARGIN_CLICK' :
        return Object.assign({},state,{
            nodeMarginActive:action.nodeMarginActive,
            nodePosition:action.nodePosition,
            showNodeMargin:0
        });
        case 'NODE_PADDING_CLICK' :
        return Object.assign({},state,{
            nodePaddingActive:action.nodePaddingActive,
            nodePosition:action.nodePosition,
            showNodePadding:0
        });
        //draggable--------------------------------------
        case 'LAYOUT_DRAG_START' :
        return Object.assign({},state,{
            layoutDragId:action.layoutDragId
        });
        case 'LAYOUT_DRAG_STOP' :
        return Object.assign({},state,{
            nodeMarginActive:0,
            nodePaddingActive:0,
            nodePosition:0
        });
        default:
        return state;
    }
}

//布局模块
// const layoutCSS =(state,action){
//
// }
//排版模块
// const typography=(state,action)=>{
//     switch(action.type){
//         case 'TOGGLE_LAYOUT_ADVANCED1' :
//         return Object.assign({},state,{
//             ...action
//         });
//         default:
//         return state;
//     }
// }







//合并
const reducer=combineReducers({
    layout
});
export default reducer;
