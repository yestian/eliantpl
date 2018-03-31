import { combineReducers } from 'redux';
import ico from './ico';
import right from './right';
import Nodes from '../common/config/getNodeRelated.json';

const indexInit={
    // noded:0,//是否已经选择了节点判断，加载完页面，默认不选中任何节点
    siteResizeActive:0,//激活网站拖拽功能
    siteNowX:0,//鼠标偏移的值
    siteDragWidth:0,//因drag，重新设置的宽度，此处有值，媒体使用此处的宽度
    siteDragX:0,
    dropPid:0,//drop的父级节点id
    dropPtypeid:0,//drop的父级节点类型，0为body
    pleft:0,ptop:0,pheight:0,pwidth:0,//父节点尺寸
    nodeHelperExpand:0,//是否展开节点
    bottomNodeHoveredIndex:0,//底部导航，鼠标放在哪个节点上面
}


//和框架内的页面相关的内容在此处设置
const index=(state=indexInit,action)=>{
    switch(action.type){
        //更新网站数据
        case 'UPDATE_DISPLAY':
        let data=state.siteData.data;//站点节点数据
        for(let i=0;i<data.length;i++){
            if(data[i].id===state.selectedId.thisid.id){
                //复制站点数据
                let newObj=Object.assign({},state,{
                    siteData:state.siteData
                });

                let tid=data[i].tid;//节点类型
                let NodeType=Nodes[tid].en;
                let TypeCount=typeClassCount(data,state.selectedId.thisid.typeId);
                //更新属性
                let obj=newObj.siteData.data[i];
                //创建类名,根据类型创建类名，该类型自动生成的class共有多少个，包含未引用的，取最大值+1
                obj.classes=[{
                    className:`${NodeType}${TypeCount!==1?'-'+TypeCount:''}`,
                    createBy:0,//自动创建，1主动创建
                    related:0,//关联类名
                    used:1,//使用状态
                    style:{
                        display:getDisplay(action.displayIndex)
                    }
                }]
                obj.display=action.displayIndex;//显示类型索引
                return newObj;
            }
        }
        break;
        //底部导航栏，鼠标在哪个节点上面
        case 'BOTTOM_NAV_HOVER':
        return Object.assign({},state,{
            bottomNodeHoveredIndex:action.bottomNodeHoveredIndex
        });
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
        //点击辅助工具上的菜单，选中节点
        case 'NODE_HELPER_CLICK':
        return Object.assign({},state,{
            selectedId:action.data,
            hoveredId:{}
        });
        //点击底部导航上的节点
        case 'BOTTOM_NAV_CLICK':
        return Object.assign({},state,{
            selectedId:action.data,
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

function getDisplay(index){
    let display='';
    switch(index){
        case 1: display='block';break;
        case 2: display='inline-block';break;
        case 3: display='inline';break;
        case 4: display='flex';break;
        case 5: display='none';break;
        default: display='';
    }
    return display;
}
function typeClassCount(data,selectedTid){
    let cssCount=1;
    if(data instanceof Array){
        data.map((evt,i)=>{
            if(evt.tid===selectedTid){
                if(evt.classes instanceof Array){
                    evt.classes.map((evt2,i2)=>{
                        if(evt2.createBy===0){
                            cssCount+=1;
                        }
                    })
                }
            }
        })
    }
    return cssCount;
}
const todoApp = combineReducers({
  ico,index,right
})

export default todoApp;
