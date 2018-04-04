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
    sid:0,//选中的节点ID
    inside:0,//图标显示在节点内部
    hangdown:0,//图标显示在节点下面
}


//和框架内的页面相关的内容在此处设置
const index=(state=indexInit,action)=>{
    switch(action.type){
        case 'UPDATE_DISPLAY':
        //复制站点数据
        let updateDisplay=Object.assign({},state,{
            siteData:state.siteData,//整个网站数据
        });
        //更新数据
        (function(){
            let allData=updateDisplay.siteData.data;
            let data=allData[state.sid];
            data.display=action.displayIndex;//设置display属性

            if(data.classes instanceof Array){
                //----------------
                let clsIndex='';//需要修改哪一个class的display属性
                function getClsList(classes,related=0){
                    classes.map((evt2,i2)=>{
                        //有且只有一个是used=1而且related=0
                        if(evt2.related===related && evt2.used){//顶级
                            clsIndex=i2;
                            getClsList(classes,evt2.className);
                        }
                    });
                    return clsIndex;
                }
                getClsList(data.classes);
                //------------------
                //如果有绑定的类，修改绑定的类，修改最后一个关联类的display属性
                if(clsIndex===''){
                    //如果没有绑定的类，需要创建新的类，并设置display属性
                    (data.classes).push({
                        className:createClass(allData,data.tid).className,
                        used:1,
                        nodeName:createClass(allData,data.tid).nodeName,
                        related:0,
                        style:{display:getDisplay(action.displayIndex)}
                    });

                }else{
                    //有类，也已经绑定，只需修改属性
                    (data.classes)[clsIndex].style.display=getDisplay(action.displayIndex);
                }
            }else{
                //不存在任何类
                data.classes=[{
                    className:createClass(allData,data.tid).className,
                    used:1,
                    nodeName:createClass(allData,data.tid).nodeName,
                    related:0,
                    style:{display:getDisplay(action.displayIndex)}
                }]
            }
        })();
        return updateDisplay;
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
        let nodeClick=Object.assign({},state,{
            ...action.data,
            nodeHelperExpand:0,//关闭助手弹出的菜单
            hoveredId:{},
            siteData:state.siteData
        });
        return nodeClick;

        //点击辅助工具上的菜单，选中节点
        case 'NODE_HELPER_CLICK':
        let nodeHelperClick=Object.assign({},state,{
            ...action.data,
            hoveredId:{},
            siteData:state.siteData
        });
        return nodeHelperClick;
        //点击底部导航上的节点
        case 'BOTTOM_NAV_CLICK':
        let bottomNavClick=Object.assign({},state,{
            ...action.data,
            hoveredId:{},
            siteData:state.siteData
        });
        // let bottomNavClickData=bottomNavClick.siteData.data;
        // bottomNavClickData.map((evt,i)=>{
        //     if(action.data.thisid.id===evt.id){
        //         evt.selected=1;
        //     }else{
        //         evt.selected=0;
        //     }
        // });
        return bottomNavClick;
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
function createClass(data,typeId){
    let num=1;
    let cls=Nodes[typeId].en;//英文名放在类名中
    let node=Nodes[typeId].name;//中文名放在输入框中
    //如果有同名的类名，给数字加1
    // 把对象转为数组
    let data2=[];
    for(let j in data){
        data2.push(data[j]);
    }
    data2.map((evt,i)=>{
        if(evt.classes instanceof Array && evt.classes.length){
            (evt.classes).map((evt2,i2)=>{
                //有几个同类节点绑定了class,遇到相同的+1
                if(cls===evt2.className){num+=1}
                if(cls+'-'+num===evt2.className){num+=1;}
            })
        }
    });
    if(num===1){
        return {className:cls,nodeName:node};
    }else{
        return {className:cls+'-'+num,nodeName:node+' '+num}
    }
}

const todoApp = combineReducers({
  ico,index,right
})

export default todoApp;
