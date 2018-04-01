import { combineReducers } from 'redux';

const layoutInit={
    openCssLayout:!0,//布局模块是否展开
    layoutAdvanced:!1,//布局高级选项是否显示
    showSameTypeNodesLine:!1,//同类节点的提示线边框是否显示
    selectorState:!1,//类输入框的状态，默认无
    slectorStateOpen:!1,//展开state下拉菜单
    needClass:!1,//输入框点击，弹出下拉页面
    suggestionIndex:0,//建议的类列表，是否激活
}
//布局模块
const layout=(state=layoutInit,action)=>{
    switch(action.type){
        //css layout显示设置，鼠标click提示文字
        case 'DISPLAY_SETTING_CLICK' :
        return Object.assign({},state,{
            displaySettingTip:{}
        });
        //css layout显示设置，鼠标hover提示文字
        case 'DISPLAY_SETTING_HOVER' :
        return Object.assign({},state,{
            displaySettingTip:action.displaySettingTip
        });
        //css layout展开收缩
        case 'TOGGLE_CSSLAYOUT' :
        return Object.assign({},state,{
            openCssLayout:!state.openCssLayout
        });
        //是否显示layout高级选项
        case 'TOGGLE_LAYOUT_ADVANCED' :
        return Object.assign({},state,{
            layoutAdvanced:!state.layoutAdvanced
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
