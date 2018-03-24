import React, { Component } from 'react';

class LeftPictures extends Component{
    render() {
        let ico=this.props.props;
        let active='';
        if(!!ico.leftBtns.showPictures===true){
            active='active';
        }
        return (
            <div data-automation-id="left-pictures" className={`button top ${active}`} onClick={()=>this.props.onClick(!ico.leftBtns.showPictures)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><svg width="20" height="18" viewBox="0 0 20 18" className="bem-Svg " style={{display: 'block',transform: 'translate(0px, 0px)'}}><path d="M13.557.736a1 1 0 0 0-1.23-.701L.749 3.137A1 1 0 0 0 .034 4.36l2.332 8.701a1 1 0 0 0 1.23.701L4 13.654V6.003A2 2 0 0 1 5.994 4h8.437L13.557.736zM7.007 6h11.986A1 1 0 0 1 20 6.996v10.008a1 1 0 0 1-1.007.996H7.007A1 1 0 0 1 6 17.004V6.996A1 1 0 0 1 7.007 6zM18 9.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM8 12l3.5-3 7 7H8v-4z" fill="currentColor" fillRule="evenodd"></path></svg></div>
        )
    }
}
export default LeftPictures;
