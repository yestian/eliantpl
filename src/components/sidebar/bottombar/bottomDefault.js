import React, { Component } from 'react';

class BottomDefault extends Component{
     render(){
         return(
             <div className="bem-BottomBar">
                 <div className="bem-BottomBar_Main">
                     <div className="bem-BottomBar_Placeholder">没有选择元素</div>
                     <div className="bem-Breadcrumbs">
                         <div className="bem-Breadcrumbs_Container"></div>
                     </div>
                     <div className="bem-BottomBar_RealtimeSiteViewers">
                         <div className="bem-ProfilePictures" style={{display: 'flex',paddingLeft: '6.6px'}}></div>
                     </div>
                 </div>
             </div>
        )
    }
}
export default BottomDefault;
