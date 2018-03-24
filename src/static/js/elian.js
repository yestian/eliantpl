import $ from 'jquery';

/**
 * 设置网页展区区域的高度
 * @type {[type]}
 */
function setIframe(){
    let operHeight=$(window).height();
    let topbarH=0,botBarH=0;
    if($('html').is('.avoid-top-bar')){
        topbarH=35;
    }
    if($('html').is('.avoid-bottom-bar')){
        botBarH=29;
    }
    $('#site-iframe-next').height(operHeight-topbarH-botBarH);
}
/**
 * 添加元素的二级页面，元素组件区域的高度
 */
function addElementSubpageHeight(){
    let H=$(window).height()-119;
    $('#addElementsBox').height(H);
}
/**
 * 图片列表的高度
 * @return {[type]} [description]
 */
function pictureBoxHeight(){
    let H=$(window).height()-147;
    $('#assets-tab').height(H);
}
/**
 * CMS二级页面高度
 * @return {[type]} [description]
 */
function cmsHeight(){
    let H=$(window).height()-35;
    $('#cmsbox').height(H);
}


$(function(){
     setIframe();
     $(window).resize(function(){
        setIframe();
        addElementSubpageHeight();
        pictureBoxHeight();
        cmsHeight();
     });
});
