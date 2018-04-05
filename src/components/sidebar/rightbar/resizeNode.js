import React,{Component} from "react";
import $ from 'jquery';

class ResizeNode extends Component{
    render(){
        let index=this.props.data.index;
        let layout=this.props.data.right.layout;
        //节点信息
        let node=$('#site-iframe-next').contents().find("[data-id="+index.sid+"]");
        let s={
            width:node.outerWidth(),
            height:node.outerHeight(),
            left:node.offset().left,
            top:node.offset().top,
            marginTop:parseInt(node.css('marginTop'),10)
        }
        let ico=this.props.data.ico.ico_event;
        let media=ico.media.mediaWidth;
        //获取当前类的样式
        // let node=index.siteData.data[index.sid];
        // node.classes.map((evti,i)=>{
        //     //把所有类的属性打散，后面的覆盖前面的，最终的结果就是当前节点的信息
        // })
        let pos='';
        let style='';
        let controlStyle={};
        let posId=layout.nodePosition;
        let ghostStyle={}
        switch(posId){
            case 1:
            pos='top';
            // controlStyle={
            //     top:,
            //     left:,
            //     width:,
            //     height:
            // };
            // dimStyle={
            //     height:,
            //     bottom:,
            //     marginLeft:,
            //     width:
            // };
            // ghostStyle={
            //     top: 0,
            //     left: 342,
            //     width: 940,
            //     height: 75
            // };
            style={height:200,bottom: 0, top: 11};
            break;
            case 2:
            pos='right';
            style={width:200,bottom: 0, top: 11};
            break;
            case 3:
            pos='bottom';
            style={height:200,bottom: 0, top: 11};
            break;
            case 4:
            pos='left';
            style={width:200,bottom: 0, top: 11};
            break;
            default:
            pos=0;
        }

        if(layout.nodeMarginActive){
            return(
                <div className="hud wf-control" style={{top: s.top-s.marginTop, left: -media-11, width: media, height: s.height+s.marginTop}}>
                    <div className="dim margin top" style={{height: s.marginTop, top: 0, marginLeft: s.left, width: s.width}}>
                        <span className="line" style={{left: s.left}}>
                            <span className="label">
                                <span className="box">
                                    <span className="value">{s.marginTop}</span>
                                    <span className="unit">px</span>
                                </span>
                            </span>
                        </span>
                    </div>
                    <div className="ghost-box" style={{top: s.marginTop, left: s.left, width: s.width, height: s.height, display: 'none'}} />
                    <div className="padding-box" style={{top: s.marginTop, left: s.left, width: s.width, height: s.height, transform: 'none'}}>
                        <div className="size-box" />
                    </div>
                </div>

            )
        }else if(layout.nodePaddingActive){
            return(
                <div className="hud wf-control" style={{top: 110, left: '-1635px', width: 1624, height: 67}}>
                    <div className="ghost-box" style={{top: 15, left: 342, width: 940, height: 33, display: 'none'}} />
                    <div className="padding-box" style={{top: 15, left: 342, width: 940, height: 33, transform: 'none'}}>
                        <div className={`dim inside padding ${pos}`} style={style}>
                            <span className="line" style={{left: 463}}>
                                <span className="label">
                                    <span className="box">
                                        <span className="value">22</span>
                                        <span className="unit">px</span>
                                    </span>
                                </span>
                            </span>
                        </div>
                        <div className="size-box" />
                    </div>
                </div>
            )
        }else{
            return <div className="hud-preload" style={{top: 76, left: '-1635px', width: 1624, height: 122}}>预加载</div>
        }
    }
}
export default ResizeNode;
