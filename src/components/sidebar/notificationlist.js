import React, { Component } from 'react';

class NotificationList extends Component{
    render(){
        let eyeActive=this.props.icoprops.eyeStatus;
        let a='';
        if(!!eyeActive===false){
            a='bem-NotificationList-inWorkspace';
        }
        return(
            <div className={`bem-NotificationList ${a} bem-NotificationList-scrollBarEnabled`}></div>
        )
    }
}

export default NotificationList;
