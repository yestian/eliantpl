import React, { Component } from 'react';

/* eslint-disable */
import Section from './eles/section';
import Container from './eles/container';
import Columns from './eles/columns';
import Div from './eles/div';
import Link from './eles/link';
import Button from './eles/button';
import List from './eles/list';
import ListItem from './eles/listItem';
import Heading from './eles/heading';
import Paragraph from './eles/paragraph';
import TextLink from './eles/textLink';
import TextBlock from './eles/textBlock';
import BlockQuote from './eles/blockQuote';
import RichText from './eles/richText';
import Image from './eles/image';
import Video from './eles/video';
import FormBlock from './eles/formBlock';
import Label from './eles/label';
import Input from './eles/input';
import TextArea from './eles/textArea';
import Checkbox from './eles/checkbox';
import Radio from './eles/radio';
import Select from './eles/select';
import FormButton from './eles/formButton';
import Search from './eles/search';
import Tabs from './eles/tabs';
import NavBar from './eles/navBar';
import DropDown from './eles/dropDown';
import Slider from './eles/slider';
import LightingBox from './eles/lightingBox';
import Map from './eles/map';
import BgVideo from './eles/bgVideo';
import Embed from './eles/embed';
/* eslint-disable */

class Ele extends Component{
     render(){
         //question mark，问号的代码
        let qMark=(<div onClick={(e)=>{this.props.data.addSubMark(e)}} className="qmark" style={{position: 'absolute',top: '3px',right: '3px',opacity: 0.6,transition: 'opacity 150ms',width: '16px',height: '16px',backgroundColor: 'rgb(43, 43, 43)',borderRadius: '3px',display: 'flex',alignItems: 'center',justifyContent: 'center',cursor: 'default'}}>
            <svg width="7" height="10" viewBox="0 0 7 10" className="bem-Svg " style={{display: 'block',transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M3.63 8.652a.856.856 0 0 1-.32-.062.78.78 0 0 1-.43-.43.833.833 0 0 1-.062-.32.784.784 0 0 1 .49-.75.825.825 0 0 1 .32-.06.816.816 0 0 1 .58.233.828.828 0 0 1 .232.577.833.833 0 0 1-.233.58.776.776 0 0 1-.258.17.836.836 0 0 1-.32.062zm-.75-2.64V5.73c0-.195.024-.36.073-.49.05-.125.13-.244.248-.356.426-.406.91-.828 1.217-1.334.09-.145.135-.3.135-.46 0-.3-.1-.54-.293-.716a1.003 1.003 0 0 0-.7-.256c-.4 0-.715.118-.93.35a1.274 1.274 0 0 0-.33.618L1 3.002c.1-.62.355-1.104.76-1.438C2.21 1.19 2.805 1 3.523 1c.314 0 .615.043.893.13.27.082.514.21.72.376.204.164.366.37.485.613.12.24.18.525.18.844 0 .193-.02.372-.06.53a1.54 1.54 0 0 1-.2.45 5.49 5.49 0 0 1-.76.906c-.322.315-.65.543-.65 1.04v.12H2.88z"></path></svg>
        </div>);
         //元素最外层的样式

//----------------------------------------------------------------------------------
//----------------------------------------------------------------------------------
        let id=this.props.id;
        let data=this.props.data;
        let newdata={
            id:id,//节点id
            itemEnter:data.ico.ico_event.itemEnter,//鼠标是否进入节点
            qMark:qMark,//鼠标哦进入节点后的问号
            itemActive:data.ico.ico_event.itemActive,
        }


         if(id===1){
             return (
                 <Section data={newdata} showHover={this.props.showHover}/>
             )
         }
         if(id===2){
             return (
             <Container data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===3){
             return (
             <Columns data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===4){
             return (
             <Div data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===5){
             return (
             <Link data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===6){
             return (
             <Button data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===7){
             return (
             <List data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===8){
             return (
             <ListItem data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===9){
             return (
             <Heading data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===10){
             return (
             <Paragraph data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===11){
             return (
             <TextLink data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===12){
             return (
             <TextBlock data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===13){
             return (
             <BlockQuote data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===14){
             return (
             <RichText data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===15){
             return (
             <Image data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===16){
             return (
             <Video data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===17){
             return (
             <FormBlock data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===18){
             return (
             <Label data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===19){
             return (
             <Input data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===20){
             return (
             <TextArea data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===21){
             return (
             <Checkbox data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===22){
             return (
             <Radio data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===23){
             return (
             <Select data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===24){
             return (
             <FormButton data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===25){
             return (
             <Search data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===26){
             return (
             <Tabs data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===27){
             return (
             <NavBar data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===28){
             return (
             <DropDown data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===29){
             return (
             <Slider data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===30){
             return (
             <LightingBox data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===31){
             return (
             <Map data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===32){
             return (
             <BgVideo data={newdata} showHover={this.props.showHover}/>)
         }
         if(id===33){
             return (
             <Embed data={newdata} showHover={this.props.showHover}/>)
         }
    }
}

export default Ele;
