import React, { Component } from 'react';

class HelperB extends Component{
    render(){
        let ico=this.props.icoprops;
        let btn=ico.leftBtns;
        if(ico.eyeStatus || btn.showAdds || btn.showPages || btn.showPictures || btn.showSettings || btn.showTutor || btn.showCMS){
            return null;
        }else{
            let b={
                position: 'absolute',
                pointerEvents: 'none',
                overflow: 'hidden',
                left: '35px',
                top: '35px',
                width: '1645px',
                height: '490px'
            }
            return(
                <div><div style={b}></div></div>
            )
        }
    }
}

export default HelperB;
