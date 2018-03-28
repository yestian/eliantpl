import { combineReducers } from 'redux';
import ico from './ico';

const indexInit={
    noded:0,//是否已经选择了节点判断，加载完页面，默认不选中任何节点
    siteResizeActive:0,//激活网站拖拽功能
    siteNowX:0,//鼠标偏移的值
    siteDragWidth:0,//因drag，重新设置的宽度，此处有值，媒体使用此处的宽度
    siteDragX:0,
    dropPid:0,//drop的父级节点id
    dropPtypeid:0,//drop的父级节点类型，0为body
    pleft:0,ptop:0,pheight:0,pwidth:0,//父节点尺寸
    nodeHelperExpand:0,//是否展开节点
}

//和框架内的页面相关的内容在此处设置
const index=(state=indexInit,action)=>{
    switch(action.type){

        //辅助工具上的鼠标在哪个位置
        case 'NODE_HELPER_HOVER':
        return Object.assign({},state,{
            ...action
        });
        //点击展开节点上的辅助工具
        case 'NODE_HELPER_EXPAND':
        return Object.assign({},state,{
            nodeHelperExpand:!state.nodeHelperExpand
        });
        //点击选中节点
        case 'NODE_CLICK':
        return Object.assign({},state,{
            selectedId:action.data,
            nodeHelperExpand:0,
            hoveredId:{}
        });
        //hover选中节点
        case 'NODE_MOUSEENTER':
        return Object.assign({},state,{
            hoveredId:action.hoveredId
        });
        //获取网站数据
        case 'LOAD_SITE_DATA':
        return Object.assign({},state,{
            ...action,
        });
        //拖拽开始
        case 'SITE_RESIZE_ACTIVE':
        return Object.assign({},state,{
            ...action,
        });
        //拖拽结束
        case 'SITE_RESIZE_DEACTIVE':
        return Object.assign({},state,{
            siteResizeActive:0,
            siteDragX:0
        });

        case 'SITE_RESIZE':
        return Object.assign({},state,{
            ...action,
        });
        //draggalbe放在什么节点上面
        case 'ITEM_DROP_OVER':
        return Object.assign({},state,{
            ...action,
        });
        //droppable结束
        case 'ITEM_DROP_STOP':
        return Object.assign({},state,{
            ...action,
        });
        default:
        return state;
    }
}

const todoApp = combineReducers({
  ico,index
})

export default todoApp;
