import React,{Component} from "react";
import ABC from "../../../../../../common/func.js";
import { Form,Input } from 'antd';
import $ from 'jquery';
import Unit from './unit';
require ("./style.css");

class Width extends Component{
    constructor(props){
        super(props);
        this.state={};
        this.formSubmit=this.formSubmit.bind(this);
        this.formTranslate=this.formTranslate.bind(this);
    }
    componentWillReceiveProps(){
        if(this.props.data.index.sid!==this.state.sid){
            //点击的节点变了,就重置属性
            this.setState({
                sid:this.props.data.index.sid,
                value:this.state.value
            });
            this.props.form.resetFields();
        }
    }
    componentDidMount(){
        let index=this.props.data.index;
        let node=index.siteData.data[index.sid];
        let res=ABC.thisCls(node,'width');
        this.setState({
            sid:this.props.data.index.sid,
            value:res.b
        })
    }
    componentDidUpdate(){
        let that=this;
        $('.drag-ghost').click(function(){
            that.props.data.closeDropDown();
        })
    }
    formSubmit(){
        let obj=this.props.form.getFieldsValue();
        this.props.data.setValue('width',obj);
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
        let res=ABC.transLateValue('width',obj,index,M);
        this.props.data.setValue2('width',res);
        
        this.setState({
            sid:this.state.sid,
            value:obj.width
        });
        this.props.form.resetFields();
    }
    render(){
        let layout=this.props.data.right.layout;
        let index=this.props.data.index;
        let node=index.siteData.data[index.sid];
        let res=ABC.thisCls(node,'width');
        let value='';
        let unit='-';
        if(res.hasOwnProperty('b') && res.b!=='auto'){//是否存在b属性
                //width的值如果不是auto，把单位后缀和数字拆开
                value=parseInt(res.b,10);
                unit=res.b.replace(/\d+/gi,'');

        }

        let {getFieldProps}=this.props.form;
        return(
            <div className="pull-left">
                <div className="guidance-panel-wrapper">
                    <div className="guidance-panel-child">
                        <div className="kit-field">
                            <div className="label kit-label " title="Width">
                                <div className={`link${res.hasOwnProperty('a')?(res.a===1?' local':' upstream'):''}`}><i /><span>宽<span className="colon">:</span></span></div>
                            </div>
                            <div className="kit-unit-box kit-text-input">
                                <Form id="form">
                                    <Input type="text"
                                        placeholder="auto"
                                        className="input"
                                        {...getFieldProps('width', { initialValue: value })}
                                        autoComplete="off"
                                        onBlur={this.formSubmit}
                                    />
                                    <Input type="hidden" {...getFieldProps('unit', { initialValue: unit })}/>
                                </Form>
                                <span className="unit" onClick={()=>{this.props.data.openUnit(1)}}>{unit}</span>
                                {layout.openUnit?<Unit onClick={this.formTranslate} unit={unit}/>:''}
                                <div className="right-control ticks">
                                    <div className="tick sprite-mid up"><i /></div>
                                    <span className="sep" />
                                    <div className="tick sprite-mid down"><i /></div>
                                </div>
                                {layout.openUnit?
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
Width = Form.create()(Width);
export default Width;
