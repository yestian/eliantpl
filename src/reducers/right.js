import { combineReducers } from 'redux';

const layoutInit={
    layoutOpen:!0,
    layoutAdv:!1,
    typographyOpen:!0,
    typographyAdv:!1,
    bgOpen:!0,
    bgAdv:!1,
    borderOpen:!0,
    borderAdv:!1,
    effectOpen:!0,
    effectAdv:!1,
    shadowsOpen:!0,
    shadowsAdv:!1,
    translateOpen:!0,
    translateAdv:!1,
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
        //是否显示layout高级选项
        case 'TOGGLE_BG_ADV' :
        return Object.assign({},state,{
            bgAdv:!state.bgAdv
        });

        //css layout展开收缩
        case 'TOGGLE_BORDER' :
        return Object.assign({},state,{
            borderOpen:!state.borderOpen
        });
        //是否显示layout高级选项
        case 'TOGGLE_BORDER_ADV' :
        return Object.assign({},state,{
            borderAdv:!state.borderAdv
        });

        //css layout展开收缩
        case 'TOGGLE_EFFECT' :
        return Object.assign({},state,{
            effectOpen:!state.effectOpen
        });
        //是否显示layout高级选项
        case 'TOGGLE_EFFECT_ADV' :
        return Object.assign({},state,{
            effectAdv:!state.effectAdv
        });

        //css layout展开收缩
        case 'TOGGLE_SHADOWS' :
        return Object.assign({},state,{
            shadowsOpen:!state.shadowsOpen
        });
        //是否显示layout高级选项
        case 'TOGGLE_SHADOWS_ADV' :
        return Object.assign({},state,{
            shadowsAdv:!state.shadowsAdv
        });

        //css layout展开收缩
        case 'TOGGLE_TRANSLATE' :
        return Object.assign({},state,{
            translateOpen:!state.translateOpen
        });
        //是否显示layout高级选项
        case 'TOGGLE_TRANSLATE_ADV' :
        return Object.assign({},state,{
            translateAdv:!state.translateAdv
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
