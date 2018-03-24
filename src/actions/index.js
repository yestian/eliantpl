import $ from 'jquery';
let SITE_RESIZE_ACTIVE='SITE_RESIZE_ACTIVE';
let SITE_RESIZE_DEACTIVE='SITE_RESIZE_DEACTIVE';
let SITE_RESIZE='SITE_RESIZE';

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
export function siteStop(event,ui){
    let nowwidth=$('.site-canvas').width();
    //mediaWidth从ico_event方法中调用
    return { type: SITE_RESIZE_DEACTIVE,mediaWidth:nowwidth}
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
