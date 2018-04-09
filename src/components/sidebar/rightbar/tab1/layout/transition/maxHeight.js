import React,{Component} from "react";
import ABC from "../../../../../../common/func.js";
import { Form,Input } from 'antd';
import $ from 'jquery';
import Unit from './unit';
require ("./style.css");

class MaxHeight extends Component{
    constructor(props){
        super(props);
        this.state={};
        this.formSubmit=this.formSubmit.bind(this);
        this.formTranslate=this.formTranslate.bind(this);
        this.openProp=this.openProp.bind(this);
    }
    componentWillReceiveProps(){
        let index=this.props.data.index;
        if(index.sid!==this.state.sid){
            //点击的节点变了,就重置属性
            this.setState({sid:index.sid});
            this.props.form.resetFields();
        }
        // 如果不存在宽度属性,清空结果
        let node=index.siteData.data[index.sid];
        let obj=this.props.form.getFieldsValue();
        let right=this.props.data.right.layout.openPropWindow;
        if(right===1){
            this.props.form.resetFields();
            this.props.data.openPropWindow(0);
        }
    }

    componentDidMount(){
        let index=this.props.data.index;
        let node=index.siteData.data[index.sid];
        let res=ABC.thisCls(node,'max-height');
        this.setState({sid:index.sid})
    }
    componentDidUpdate(){
        let that=this;
        $('.drag-ghost').click(function(){
            that.props.data.closeDropDown();
        })
    }
    formSubmit(){
        let obj=this.props.form.getFieldsValue();
        if(!obj['max-height']){return false;}
        this.props.data.setValue('max-height',obj);
    }
    //打开弹窗判断
    openProp(e,states){
        if(!states){
            return false;
        }
        this.props.data.openPropWindow(e,'max-height')
    }
    //第一个参数是否要转换，直接输入不需要转换
    //第二个参数，转换的类型
    formTranslate(index){
        if(index===0){//仅仅需要关闭菜单
            this.props.data.openUnit(0);
            return false;
        }
        let obj=this.props.form.getFieldsValue();
        let M=this.props.data.ico.ico_event.media.mediaWidth;
        //值的相互转换
        let res=ABC.transLateValue('max-height',obj,index,M);
        this.props.data.setValue2('max-height',res);
        //清除输入框的数据
        this.props.form.resetFields();
    }
    render(){
        let data=this.props.data;
        let node=data.index.siteData.data[data.index.sid];
        let res=ABC.thisCls(node,'max-height');
        let value='';
        let unit='-';
        if(res.hasOwnProperty('b') && res.b!=='none'){//是否存在b属性
            //max-height的值如果不是auto，把单位后缀和数字拆开
            value=parseInt(res.b,10);
            unit=res.b.replace(/\d+/gi,'');
        }

        let {getFieldProps}=this.props.form;
        return(
            <div className="transition-child">
                <div className="left guidance-panel-wrapper">
                    <div className="guidance-panel-child">
                        <div className="kit-field pull-right">
                            <div className="label kit-label " title="最大高度" onClick={(e)=>{this.openProp(e,res.a)}}>
                                <div className={`link${res.hasOwnProperty('a')?(res.a===1?' local':' upstream'):''}`}><i /><span>最大<span className="colon">:</span></span></div>
                            </div>
                            <div className="kit-unit-box kit-text-input">
                                <Form id="form">
                                    <Input type="text"
                                        placeholder="none"
                                        className="input"
                                        {...getFieldProps('max-height', { initialValue: value })}
                                        autoComplete="off"
                                        onBlur={this.formSubmit}
                                    />
                                    <Input type="hidden" {...getFieldProps('unit', { initialValue: unit })}/>
                                </Form>
                                <span className="unit" onClick={()=>{data.openUnit(6)}}>{unit}</span>

                                {data.right.layout.openUnit===6?<Unit onClick={this.formTranslate} unit={unit}/>:''}

                                <div className="right-control ticks">
                                    <div className="tick sprite-mid up"><i /></div>
                                    <span className="sep" />
                                    <div className="tick sprite-mid down"><i /></div>
                                </div>
                                {data.right.layout.openUnit?
                                    <div className="drag-ghost"></div>
                                :''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
MaxHeight = Form.create()(MaxHeight);
export default MaxHeight;
