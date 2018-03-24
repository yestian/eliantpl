import React, { Component } from 'react';

class DesignLogo extends Component{
    render(){
        let ico=this.props.icoprops;
        if(!!ico.eyeStatus!==true){
            let open='';
            if(!!ico.showLogoMenu===true){
                open='bem-DesignerLogo-isOpen';
            }
            return(
                <div className={`bem-DesignerLogo ${open}`} onClick={()=>this.props.onClick(true)}>
                    <div className="bem-DesignerLogo_Button">
                        <div className="bem-DesignerLogo_Icon bem-DesignerLogo_Icon-logo">
                            <svg width="46" height="32" viewBox="0 0 46 32" className="bem-Svg " style={{display: 'block',transform: 'translate(0px, 0px)'}}><path d="M34 9l-4 13-3-22c-6 0-10 5-11 9l-5 13V9C10 4 4 0 0 0l5 32c7 0 10-5 12-9l4-11 3 20c7 0 10-4 12-9L46 0c-7 0-10 5-12 9z" fill="currentColor"></path></svg>
                        </div>
                        <div className="bem-DesignerLogo_Icon bem-DesignerLogo_Icon-menu">
                            <svg width="30" height="24" viewBox="0 0 30 24" className="bem-Svg" style={{display: 'block', transform: 'translate(0px, 0px)'}}>
                                <rect width="30" height="4" rx="1" ry="1" fill="currentColor"></rect><rect y="10" width="30" height="4" rx="1" ry="1" fill="currentColor"></rect>
                                <rect y="20" width="30" height="4" rx="1" ry="1" fill="currentColor"></rect></svg>
                        </div>
                    </div>
                    <span></span>
                </div>
            )
        }else{
            return '';
        }

    }
}

export default DesignLogo;
