import React,{Component} from 'react';
import $ from 'jquery';

class ItemDragStatus extends Component{
     render(){
        let data=this.props.data.ico.ico_event;
        let index=this.props.data.index;
        if(data.dragMode){
            let suit=this.props.suit;//数组
            let typeid=index.dropPtypeid;//类型
            if(index.dropPid){
                if($.inArray(data.dragId, suit[typeid].accept)!==-1){
                    // 蓝色状态条
                    return (<div style={{pointerEvents: 'none', width: index.pwidth, height: index.pheight, position: 'relative'}}><div style={{backgroundColor: 'rgb(52, 144, 235)', position: 'absolute', width: index.pwidth, height: 2, top: 0, left: 0}}></div></div>)
                }else{
                    //错误的红色提示
                    return (<div style={{pointerEvents: 'none', width: index.pwidth, height: index.pheight, position: 'relative'}}><div style={{backgroundColor: 'rgb(234, 56, 76)', position: 'absolute', width: '568px', height: 2, top: 75, left: 0}}></div><div style={{maxWidth: 300, minWidth: 150, color: 'rgba(255, 255, 255, 0.9)', fontFamily: '-apple-system, BlinkMacSystemFont, proxima-nova, Roboto, Arial, sans-serif, Georgia, serif', fontSize: 11, padding: 4, borderRadius: 2, backgroundColor: 'rgb(234, 56, 76)', position: 'absolute', transform: 'translateY(-100%)', left: 0, top: index.ptop+30, width: index.pwidth}}>{suit[typeid].errMsg}</div></div>);

                }
            }
            return <div style={{pointerEvents: 'none', width: index.pwidth, height: index.pheight, position: 'relative'}}></div>
       }else{
           return null;
       }

    }
}
export default ItemDragStatus;
