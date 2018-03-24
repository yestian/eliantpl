import React,{Component} from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

class BottomRuler extends Component{
    constructor(props){
        super(props);
        this.ruler=$(`<div class="bem-View Ruler_Container_Offset_Markers"></div>`);
        let b=1920;
        for (let a=0;a<Math.ceil(b/50);a++){
            let value=a*50;
            let sm=$(`<div class="bem-Ruler_Container_Offset_MarkerGroup_Marker small"></div>`);
            let lg=$(`<div class="bem-Ruler_Container_Offset_MarkerGroup_Marker large"></div>`);
            let group=$(`<div class="bem-Ruler_Container_Offset_MarkerGroup" style="left: ${value}px"><div class="bem-Ruler_Container_Offset_MarkerGroup_Label">${value}px</div></div>`);
            group.append(sm.clone(),lg.clone(),sm.clone(),lg.clone(),sm.clone(),lg.clone(),sm.clone(),lg.clone(),sm.clone());
            this.ruler.append(group);
        }
    }
    componentDidMount(){
        $('.bem-Ruler_Container_Offset').append(this.ruler);
    }

     render(){
         let prop=this.props.ico.ico_event;
         let index=this.props.index;
         let rulerX=0;
         if(!prop.eyeStatus){
            rulerX=index.siteNowX-35;
        }else{
            rulerX=index.siteNowX;
        }
        //------------media----------------
        let md=prop.media;
        let width=md.mediaWidth-index.siteDragX*2;
        if(width>md.mediaMax){
            width=md.mediaMax;
        }
        if(width<md.mediaMin){
            width=md.mediaMin;
        }
        //--------------适配点----------------------------------------------------
        //--------------不同媒体下，适配点数量，适配手机型号列表不一样-----------------
        let suit=[];
        suit[1]=[];
        suit[2]=[
            {
                left:768,
                suitable:['Apple iPad mini 2, 3','Apple iPad 1, 2','Apple iPad 3, 4, Air','Microsoft Surface','Apple iPad mini','HTC Nexus 9']
            },
            {
                left:800,
                suitable:['Apple iPad mini 2, 3','Apple iPad 1, 2']
            }
        ];
        suit[3]=[
            {
                left:480,
                suitable:['Apple iPad mini 2, 3','Apple iPad 1, 2','Apple iPad 3, 4, Air','Microsoft Surface','Apple iPad mini','HTC Nexus 9']
            },
            {
                left:504,
                suitable:['1111111111','2222222222222']
            },
            {
                left:600,
                suitable:['1111111111','2222222222222']
            },
            {
                left:720,
                suitable:['1111111111','2222222222222']
            }
        ];
        suit[4]=[
            {
                left:240,
                suitable:['Apple iPad mini 2, 3','Apple iPad 1, 2','Apple iPad 3, 4, Air','Microsoft Surface','Apple iPad mini','HTC Nexus 9']
            },
            {
                left:320,
                suitable:['1111111111','2222222222222']
            },
            {
                left:346,
                suitable:['1111111111','2222222222222']
            },
            {
                left:360,
                suitable:['1111111111','2222222222222']
            },
            {
                left:375,
                suitable:['1111111111','2222222222222']
            },
            {
                left:384,
                suitable:['1111111111','2222222222222']
            },
            {
                left:390,
                suitable:['1111111111','2222222222222']
            },
            {
                left:400,
                suitable:['1111111111','2222222222222']
            },
            {
                left:412,
                suitable:['1111111111','2222222222222']
            }
        ];
        let points=suit[md.mediaType].map((elt,i)=>{
            let left=elt.left;
            return (
                <div key={i} className="bem-Ruler_Container_Offset_DeviceWidths_Device" style={{left: left}}></div>
            )
        });
        //------------媒体列表------------
        /* eslint-disable */
        let medias=suit[md.mediaType].map((elt,i)=>{
            let point=elt.left;
            let list=elt.suitable.map((elt2,i2)=>{
                let mediaPointList=elt2;
                return (
                    <div key={i2} className="bem-Ruler_DeviceList_Device">{mediaPointList}</div>
                )
            });
            //等于这个point，产生这个point的时候，只有一个i的值对应
            if(width===point){
                return list;
            }
        });
        /* eslint-enable */
         return(
            <div className="bem-BottomBar ruler-bar-visible">
                <div className="bem-Ruler">
                    <div className="bem-Ruler_Devices">
                        <div className="bem-Ruler_Devices_Container showing-devices" style={{left: rulerX+width}}>
                            <div className="bem-Ruler_DeviceList">
                                {medias}
                            </div>
                        </div>
                    </div>
                    <div className="bem-Ruler_TooltipOffset" style={{left: rulerX+width}}>
                        <div className="bem-Ruler_TooltipOffset_WidthTooltip wf-tip dark top">
                            <div className="bem-Ruler_TooltipOffset_WidthTooltip_Label">{`${width}px`}</div>
                            <div className="arrow"></div>
                        </div>
                    </div>
                    <div className="bem-Ruler_Container">
                        <div className="bem-Ruler_Container_Offset" style={{width: md.mediaMax,left: rulerX}}>
                            <div className="bem-Ruler_Container_Offset_QueryRange" style={{width: md.mediaMax-md.mediaMin,left:md.mediaMin}}></div>
                            <div className="bem-Ruler_Container_Offset_DeviceWidths">
                                {points}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state=>state)(BottomRuler);
