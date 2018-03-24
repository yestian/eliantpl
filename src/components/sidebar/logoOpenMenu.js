import React,{Component} from 'react';

class LogoOpenMenu extends Component{
     render(){
         if(!!this.props.icoprops.showLogoMenu===true){
             return(
                <div>
                    <div className="bem-PopoverMenu" onMouseLeave={()=>{this.props.onMouseLeave(false)}}>
                        <div className="bem-PopoverMenu_Button" style={{minWidth: '155px'}}>
                            <div className="bem-PopoverMenu_ButtonIcon"><svg width="12" height="12" viewBox="0 0 12 12" className="bem-Svg " style={{display: 'block',transform: 'translate(0px, 0px)'}}><path d="M0 0h5v5H0V0zm0 7h5v5H0V7zm7-7h5v5H7V0zm0 7h5v5H7V7z" fill="currentColor" fillRule="evenodd"></path></svg></div>
                            <span className="bem-Text ">控制面板</span>
                        </div>
                        <div className="bem-PopoverMenu_Button" style={{minWidth: '155px'}}>
                            <div className="bem-PopoverMenu_ButtonIcon"><svg width="17.1" height="17.1" viewBox="0 0 19 19" className="bem-Svg " style={{display: 'block',transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M18 10.563V8.438l-2.84-.548a5.8 5.8 0 0 0-.52-1.256l1.622-2.395-1.502-1.504-2.395 1.62a5.904 5.904 0 0 0-1.254-.517L10.564 1H8.437L7.89 3.84a5.81 5.81 0 0 0-1.255.518L4.24 2.738l-1.502 1.5 1.62 2.396A5.78 5.78 0 0 0 3.84 7.89L1 8.438v2.125l2.84.548c.125.444.3.864.518 1.258l-1.62 2.393 1.503 1.503 2.395-1.62c.392.22.814.393 1.256.52L8.438 18h2.125l.548-2.84a5.83 5.83 0 0 0 1.257-.52l2.393 1.62 1.502-1.502-1.62-2.393c.22-.393.392-.813.518-1.254l2.84-.546zm-8.5 1.86a2.925 2.925 0 1 1 .002-5.85 2.925 2.925 0 0 1-.002 5.85z"></path></svg></div>
                            <span className="bem-Text ">项目设置</span>
                        </div>
                        <div className="bem-PopoverMenu_Button" style={{minWidth: '155px'}}>
                            <div className="bem-PopoverMenu_ButtonIcon"><svg width="15" height="15" viewBox="0 0 15 15" className="bem-Svg " style={{display: 'block',transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M13.65 2.19l-.84-.84a1.203 1.203 0 0 0-1.697 0L9.836 2.628l2.537 2.537 1.277-1.277a1.204 1.204 0 0 0 0-1.698zM2.56 9.903L1 14l4.097-1.56 5.657-5.657-2.536-2.536L2.56 9.903z"></path></svg></div>
                            <span className="bem-Text ">编辑器</span></div>
                    </div>
                </div>
            )
        }else{
            return '';
        }

    }
}
export default LogoOpenMenu;
