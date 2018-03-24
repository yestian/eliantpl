import React,{Component} from 'react';

class AddElementHelper extends Component{
     render(){
         let id=this.props.id;
         //此data数据由后台富媒体编辑器创建
         let data=[];
         data['1']={id:1,title:'区块',desc:'section是一个布局元素(一个“div块”)，宽度为100%，因此它扩展到浏览器窗口的整个宽度。它是完美的全屏背景图片，视频和其他内容。',tip:'提示:如果您想要在一个区域中集中内容，请在您的区域内放置一个容器，并将您的内容添加到容器中。',linkTitle:'查看关于区块的深入指南',linkUrl:'#'};
         data['2']={id:2,title:'容器',desc:'描述',tip:'',linkTitle:'查看关于容器的深入指南',linkUrl:'#'};
         if(id!==0){
             return(
                <div className="panel help-panel">
                    <div className="kit-button close-panel"  onClick={this.props.onClick}><i className="icon-main panel-close"></i></div>
                    <div className="article">
                        <div className="tag"><span>&lt;</span><span className="name">div</span><span>&gt;</span></div>
                        <div className="title">{data[id].title}</div>
                        <p style={{margin:'10px 0'}}>{data[id].desc}</p>
                        <div className="tip"><span className="lead">{data[id].tip}</span></div>
                        <div className="more"><a className="kbase">{data[id].linkTitle}</a></div>
                    </div>
                    <div className="kit-button has-text ok" onClick={this.props.onClick}>确定</div>
                </div>
             )
         }else{
             return '';
         }

    }
}
export default AddElementHelper;
