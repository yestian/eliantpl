import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from '../../../../actions/right';

class Affecting extends Component{
     render(){
         //同一个类名在这个页面上的个数
         let index=this.props.index;
         let site=index.siteData;
         let data=[];
         if(typeof site !=='undefined'){
             data=site.data;
         }
         let sum=0;
         let thisCls='';
         if(typeof index.selectedId!=='undefined'){
             // let id=index.selectedId.thisid.id;
             //获取当前类名
             if(data instanceof Array){
                for(let i=0;i<data.length;i++){
                    if(data[i].selected){
                        if(data[i].classes instanceof Array){
                            let cls=data[i].classes;
                            cls.map((evt,i)=>{
                                if(evt.used){
                                    thisCls=evt.className
                                }
                            })
                        }
                    }
                }
            }
            //获取相同类名的个数
             if(data instanceof Array){
                for(let i=0;i<data.length;i++){
                    if(data[i].classes instanceof Array){
                        let cls=data[i].classes;
                        for(let j=0;j<cls.length;j++){
                            if(cls[j].className===thisCls){
                                sum++;
                            }
                        }
                    }
                }

             }
         }
         return(
            <a className={`target-toggle affecting${this.props.right.layout.showSameTypeNodesLine?' visible':''}`} onClick={this.props.toggleSameTypeNodesLine}><i className="icon-main common-target"></i><span>{sum?sum+' 个在这个页面':'无'}</span></a>
        )
    }
}

export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(Affecting);
