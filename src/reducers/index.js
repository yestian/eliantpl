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
    layoutDragXY:0,//拖拽坐标记录
    layoutDragType:0,
}


//和框架内的页面相关的内容在此处设置
const index=(state=indexInit,action)=>{
    switch(action.type){
        //修改类的margin属性
        case 'LAYOUT_DRAG_START':
        return Object.assign({},state,{
            layoutDragXY:action.data
        });
        case 'REMOVE_PROP':
        let removeProp=Object.assign({},state,{
            siteData:state.siteData//整个网站数据
        });
        //找到这个属性，然后删除
        (function(){
            //当前节点数据
            let node=removeProp.siteData.data[state.sid];
            //找到最后一个使用中的类
            let index=getClsList(node.classes);
            let style=node.classes[index].style;
            delete style[action.prop];
        })()
        return removeProp;
        case 'NODE_BEFORE_DRAG':
        return Object.assign({},state,{
            layoutDragType:action.layoutDragType,
            hoveredId:{}
        });

        case 'SET_VALUE':
        let setValue=Object.assign({},state,{
            siteData:state.siteData,//整个网站数据
            hoveredId:{}
        });
        (function(){
            let obj={};
            obj[action.prop]=action.value;
            setProp({
                allData:setValue.siteData.data,
                sid:state.sid,
                propObj:obj
            });
        })()

        return setValue;

        case 'MARGIN_AUTO':
        let marginAuto=Object.assign({},state,{
            siteData:state.siteData,//整个网站数据
            hoveredId:{}
        });
        if(!action.status){
            setProp({
                allData:marginAuto.siteData.data,
                sid:state.sid,
                propObj:{"margin-left":"auto","margin-right":"auto"}
            });
        }else{
            setProp({
                allData:marginAuto.siteData.data,
                sid:state.sid,
                propObj:{"margin-left":0,"margin-right":0}
            });
        }

        return marginAuto;
        case 'LAYOUT_DRAGGING' :
        //复制站点数据
        let layoutDragging=Object.assign({},state,{
            siteData:state.siteData,//整个网站数据
            hoveredId:{}
        });
        (function(){
            let XY=state.layoutDragXY;
            let DXY=action.data;
            let mTop=XY.top0-DXY.top+XY.mtop;
            let mLeft=-(XY.left0-DXY.left)+XY.mleft;
            let mRight=-(XY.left0-DXY.left)+XY.mright;
            let mBottom=-(XY.top0-DXY.top)+XY.mbottom;

            let pTop=XY.top0-DXY.top+XY.ptop;
            let pLeft=XY.left0-DXY.left+XY.pleft;
            let pRight=-(XY.left0-DXY.left)+XY.pright;
            let pBottom=-(XY.top0-DXY.top)+XY.pbottom;
            let propObj={};
            let T=parseInt(state.layoutDragType,10);
            if(T===11){
                propObj={'margin-top':mTop+'px'};
            }
            if(T===12){
                propObj={'margin-right':mRight+'px'};
            }
            if(T===13){
                propObj={'margin-bottom':mBottom+'px'};
            }
            if(T===14){
                propObj={'margin-left':mLeft+'px'};
            }
            if(T===21){
                if(pTop<0){pTop=0}
                propObj={'padding-top':pTop+'px'};
            }
            if(T===22){
                if(pRight<0){pRight=0}
                propObj={'padding-right':pRight+'px'};
            }
            if(T===23){
                if(pBottom<0){pBottom=0}
                propObj={'padding-bottom':pBottom+'px'};
            }
            if(T===24){
                if(pLeft<0){pLeft=0}
                propObj={'padding-left':pLeft+'px'};
            }
            setProp({
                allData:layoutDragging.siteData.data,
                sid:state.sid,
                propObj:propObj
            });
        })()
        return layoutDragging;


        case 'LAYOUT_DRAG_STOP' :
        return Object.assign({},state,{
            layoutDragXY:0,
            layoutDragType:0
        });
        case 'LAYOUT_MOUSEUP' :
        return Object.assign({},state,{
            layoutDragXY:0,
            layoutDragType:0
        });

        //更新显示方式
        case 'UPDATE_DISPLAY':
        //复制站点数据
        let updateDisplay=Object.assign({},state,{
            siteData:state.siteData,//整个网站数据
        });
        updateDisplay.siteData.data[state.sid].display=action.displayIndex;//classes外面的数据
        //classes里面的数据
        setProp({
            allData:updateDisplay.siteData.data,
            sid:state.sid,
            propObj:{display:getDisplay(action.displayIndex)}
        });
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
//需要修改哪一个类的style
let getClsListIndex=-1;
function getClsList(classes,related=0){
    //获取classes中类的索引
    classes.map((evt,i)=>{
        //有且只有一个是used=1而且related=0
        //最后一个used=1,而且realted是上级的类名
        if(evt.related===related && evt.used){//顶级
            getClsListIndex=i;
            getClsList(classes,evt.className);
        }
    });
    return getClsListIndex;
}
//1.整站的节点data
//2.当前节点ID
//3.需要设置的属性及值
function setProp(datas){
    let {allData,sid,propObj}=datas;
    let data=allData[sid];
    if(data.classes instanceof Array){
        let classes=data.classes;
        let clsIndex=getClsList(classes);//需要修改哪一个class的display属性
        if(clsIndex===-1){
            //如果没有绑定的类，需要创建新的类，并设置display属性
            classes.push({
                className:createClass(allData,data.tid).className,
                used:1,
                nodeName:createClass(allData,data.tid).nodeName,
                related:0,
                style:{propObj}
            });
        }else{
            //有类，也已经绑定，只需修改属性
            for(let name in propObj){
                (classes)[clsIndex].style[name]=propObj[name];
            }
        }
    }else{
        //不存在数组，即这个类完全没有属性
        data.classes=[{
            className:createClass(allData,data.tid).className,
            used:1,
            nodeName:createClass(allData,data.tid).nodeName,
            related:0,
            style:propObj
        }]
    }
}


const todoApp = combineReducers({
  ico,index,right
})

export default todoApp;
