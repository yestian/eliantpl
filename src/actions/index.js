import $ from 'jquery';
import cfg from '../common/config/config.json';
import Type from './type';
const {SITE_RESIZE_ACTIVE,SITE_RESIZE_DEACTIVE,SITE_RESIZE,LOAD_SITE_DATA,NODE_CLICK,NODE_MOUSEENTER,NODE_HELPER_EXPAND,NODE_HELPER_HOVER,NODE_HELPER_CLICK,BOTTOM_NAV_HOVER,BOTTOM_NAV_CLICK}=Type;


export function siteStart(e,ui){
    let siteX=$('.site-canvas').offset().left;
    //发送初始位置的坐标
    return { type: SITE_RESIZE_ACTIVE,siteResizeActive:1,siteNowX:siteX}
}

export function siteDrag(e,ui,media){
    let siteX=$('.site-canvas').offset().left;
    let siteDragX='';
    if(ui.helper.is('.left-handle')){
        siteDragX=ui.position.left;
    }else{
        siteDragX=(ui.originalPosition.left-ui.position.left)/2;
    }


        //保存偏移值,在使用的时候再判断
    return { type: SITE_RESIZE,siteNowX:siteX,siteDragX}
}

// export function siteResizeStop(e,ui){
//     return { type: SITE_RESIZE2,mediaWidth:ui.size.width}
// }
export function siteStop(event,ui,selectedId){
    return function(dispatch){
        let mediaWidth=$('.site-canvas').width();
        //重新设置选择的节点的尺寸
        // if(typeof selectedId!=='undefined'){
        //     let ifm=$('#site-iframe-next').contents();
        //     let node=ifm.find("[data-id="+selectedId.id+"]");
        //     let left=node.offset().left;
        //     let width=node.outerWidth();
        //     dispatch({ type: MODIFY_SELECTED_ID,left,width});
        // }
        dispatch({ type: SITE_RESIZE_DEACTIVE,mediaWidth});
    }
}

//如果不发生拖拽操作，就执行down,up事件
//鼠标按下的时候，siteStart还无法检测到。需要设置标尺的位置
export function siteMouseDown(e,media){
    let siteX=$('.site-canvas').offset().left;
    return { type: SITE_RESIZE_ACTIVE,siteResizeActive:1,siteNowX:siteX}
}

//mouseup由wf-reszing-overlay发起
export function siteMouseUp(){
    return { type: SITE_RESIZE_ACTIVE,siteResizeActive:0}
}

/**
 * 初始化的时候，获取网站数据
 * @return {[type]} [description]
 */
export function loadSiteData(){
    return function(dispatch){
        $.ajax({
            dataType:'jsonp',
            jsonp: 'callback',
            url:cfg.url,
            type:'post',
            async:false,
            success:(data)=>{
                data=eval('('+data+')');
                dispatch({type:LOAD_SITE_DATA,siteData:data});
            }
        })
    }
}


//点击节点
export function nodeClick(e,selectedId){
    e.stopPropagation();
    e.preventDefault();
    return function(dispatch){
        let $e=$(e.currentTarget);
        let id=parseInt($e.attr('data-id'),10);
        if(typeof selectedId!=='undefined'){
            if(id===selectedId.thisid.id){
                return false;
            }
        }
        //当前节点
        let data={
            thisid:{
                id:id,
                typeId:parseInt($e.attr('data-type'),10)
            }
        }
        if($e.offset().top<50){
            if(parseInt($e.attr('data-type'),10)===0){
                data.inside=1;
            }else{
                data.hangdown=1;
            }
        }
        //父节点
        let parentId=$e.parent();
        if(typeof parentId.attr('data-id')!=='undefined'){
            data.pid={
                id:parentId.attr('data-id'),
                typeId:parseInt(parentId.attr('data-type'),10)
            }
        }
        //爹爹节点
        if(typeof parentId.parent().attr('data-id')!=='undefined'){
            data.ppid={
                id:parentId.parent().attr('data-id'),
                typeId:parseInt(parentId.parent().attr('data-type'),10)
            }
        }
        dispatch({type: NODE_CLICK,data});
    }
}
/**
 * 点击节点上的辅助工具
 * @param  {[type]} length [description]
 * @param  {[type]} index  [description]
 * @param  {[type]} id     [description]
 * @param  {[type]} typeid [description]
 * @return {[type]}        [description]
 */
export function nodeHelperClick(length,index,id){
    /* nodeHelperClick(),第一个参数数组长度，第二个参数当前索引，第三个参数当前节点的ID，第四个参数当前节点typeid */
    return function(dispatch){
        if(index!==length-1){
            //如果不是最后一个节点，点击重新选中节点
            //否则只更新展开状态
            //当前节点
            if(length>=2){
                let ifm=$('#site-iframe-next').contents();
                let $e=ifm.find("[data-id="+id+"]");
                let data={
                    thisid:{
                        id:id,
                        typeId:parseInt($e.attr('data-type'),10)
                    }
                }
                if($e.offset().top<50){
                    if(parseInt($e.attr('data-type'),10)===0){
                        data.inside=1;
                    }else{
                        data.hangdown=1;
                    }
                }
                //父节点
                let parentId=$e.parent();
                if(typeof parentId.attr('data-id')!=='undefined'){
                    data.pid={
                        id:parentId.attr('data-id'),
                        typeId:parseInt(parentId.attr('data-type'),10)
                    }
                }
                //爹爹节点
                if(typeof parentId.parent().attr('data-id')!=='undefined'){
                    data.ppid={
                        id:parentId.parent().attr('data-id'),
                        typeId:parseInt(parentId.parent().attr('data-type'),10)
                    }
                }
                dispatch({type: NODE_HELPER_CLICK,data});
            }

        }
        dispatch({ type: NODE_HELPER_EXPAND});//切换展开状态
    }
}
//鼠标进入一个元素
export function nodeMouseEnter(e,selectedId){
    return function(dispatch){
        let $e=$(e.currentTarget);
        let id=parseInt($e.attr('data-id'),10);
        let _left=$('#site-iframe-next').offset().left;
        let _top=$('#site-iframe-next').offset().top;
        let data={
            id:id,
            left:$e.offset().left+_left,
            top:$e.offset().top+_top,
            width:$e.outerWidth(),
            height:$e.outerHeight(),
            typeId:(typeof $e.attr('data-type')==='undefined')?0:parseInt($e.attr('data-type'),10)
        }
        if($e.offset().top<20){
            data.inside=1;
        }
        if(typeof selectedId!=='undefined'){
            if(id===selectedId.thisid.id){
                data={};
            }
        }
        dispatch({ type: NODE_MOUSEENTER,hoveredId:data});
    }
}

//鼠标离开一个元素，进入父元素
export function nodeMouseLeave(e,selectedId){
    return function(dispatch){
        let $e=$(e.currentTarget).parent();
        let data={};
        let id=parseInt($e.attr('data-id'),10);

        let _left=$('#site-iframe-next').offset().left;
        let _top=$('#site-iframe-next').offset().top;
        data={
            id:id,
            left:$e.offset().left+_left,
            top:$e.offset().top+_top,
            width:$e.outerWidth(),
            height:$e.outerHeight(),
            typeId:(typeof $e.attr('data-type')==='undefined')?0:parseInt($e.attr('data-type'),10)
        }
        //节点距离顶部小于20，提示内嵌在节点中
        if($e.offset().top<20){
            data.inside=1;
        }
        if(typeof selectedId!=='undefined'){
            if(id===selectedId.thisid.id){
                data={};
            }
        }
        dispatch({type: NODE_MOUSEENTER,hoveredId:data});
    }
}
//鼠标进入辅助工具
export function nodeHelperMouseEnter(length,index,id){
    return function(dispatch){
        if(index!==length-1){
            //如果不是最后一个节点才发送
            //当前节点
            if(length>=2){
                let $e=$('#site-iframe-next').contents().find("[data-id="+id+"]");
                let data={
                    id:id,
                    left:$e.offset().left,
                    top:$e.offset().top,
                    width:$e.outerWidth(),
                    height:$e.outerHeight()
                }
                dispatch({type:NODE_HELPER_HOVER,nodeHelperHoverId:data});
            }
        }
    }
}
//鼠标离开节点辅助菜单
export function nodeHelperMouseLeave(){
    return {type:NODE_HELPER_HOVER,nodeHelperHoverId:{}};
}

//底部导航栏的鼠标悬浮效果，颜色为半白色
export function bottomNodesNavMouseEnter(indexId){
    return {type:BOTTOM_NAV_HOVER,bottomNodeHoveredIndex:indexId};
}
export function bottomNodesNavMouseLeave(){
    return {type:BOTTOM_NAV_HOVER,bottomNodeHoveredIndex:0};
}
export function bottomNodesNavClick(e,id,index){
    e.stopPropagation();
    e.preventDefault();
    return function(dispatch){
        if(index===0){return false;}

        let ifm=$('#site-iframe-next').contents();
        let $e=ifm.find("[data-id="+id+"]");
        let data={
            thisid:{
                id:id,
                typeId:parseInt($e.attr('data-type'),10)
            }
        }
        if($e.offset().top<50){
            if(parseInt($e.attr('data-type'),10)===0){
                data.inside=1;
            }else{
                data.hangdown=1;
            }
        }
        //父节点
        let parentId=$e.parent();
        if(typeof parentId.attr('data-id')!=='undefined'){
            data.pid={
                id:parentId.attr('data-id'),
                typeId:parseInt(parentId.attr('data-type'),10)
            }
        }
        //爹爹节点
        if(typeof parentId.parent().attr('data-id')!=='undefined'){
            data.ppid={
                id:parentId.parent().attr('data-id'),
                typeId:parseInt(parentId.parent().attr('data-type'),10)
            }
        }
        dispatch({type:BOTTOM_NAV_CLICK,data});
    }
}
