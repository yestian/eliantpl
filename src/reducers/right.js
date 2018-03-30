import { combineReducers } from 'redux';

const layoutInit={
    openCssLayout:1,//布局模块是否展开
    layoutAdvanced:0,//布局高级选项是否显示
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
        default:
        return state;
    }
}
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
