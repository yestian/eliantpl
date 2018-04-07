/**
 * 判断属性是否是本类的，还是继承类的
 * @param  {[type]}  data [当前节点data]
 * @param  {[type]}  prop [需要判断的属性]
 * @return {Boolean}      [description]
 */
function thisCls(data,prop){
    let obj={}
    //获取class数组
    //1.判断本节点是否有类，如果有则循环
    if(data.classes instanceof Array){
        let cls=data.classes;
        let index=getClsList(cls);//找到最后一个使用中的关联类名的索引
        let lastCls=cls[index];//最后一个使用中的类
        if(typeof lastCls.style!=='undefined' && lastCls.style.hasOwnProperty(prop)){
            obj.a=1;
            obj.b=lastCls.style[prop];
        }else{
            //把当前节点的所有类展开
            function getIndex(cls,related=0){
                //获取cls中类的索引
                cls.map((evt,i)=>{
                    //有且只有一个是used=1而且related=0
                    //最后一个used=1,而且realted是上级的类名
                    if(evt.related===related && evt.used){//顶级
                        let style=evt.style;
                        for(let name in style){
                            if(name===prop){
                                obj.b=style[name];
                                obj.a=2;
                            }
                        }
                        getIndex(cls,evt.className);
                    }
                });
            }
            getIndex(cls);
        }
    }
    return obj;
}

//获取正在使用中的类的索引值
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





/**
 * 使用indexOf判断元素是否存在于数组中
 * @param {Object} arr 数组
 * @param {Object} value 元素值
 */
function isInArray(arr,value){
    if(arr.indexOf&&typeof(arr.indexOf)==='function'){
        var index = arr.indexOf(value);
        if(index >= 0){
            return true;
        }
    }
    return false;
}

















export default {
    "thisCls":thisCls
}
