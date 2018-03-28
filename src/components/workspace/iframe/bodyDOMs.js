import {Component} from 'react';
import ReactDOM from 'react-dom';

class BodyDOMs extends Component{
    render(){
        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById('site-iframe-next').contentDocument.getElementsByTagName('body')[0]
        );
   }
}
export default BodyDOMs;
