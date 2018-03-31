import {Component} from 'react';
import ReactDOM from 'react-dom';

class BodyStyle extends Component{
    render(){
        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById('site-iframe-next').contentDocument.getElementsByTagName('head')[0]
        );
   }
}
export default BodyStyle;
