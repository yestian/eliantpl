import React,{Component} from "react";

class ModifyRightValue extends Component{
    render(){
        let obj=this.props.data.right.layout.openPropWindow;
        if(obj && obj!==1){
            return(
                <React.Fragment>
                    <div><svg className="bem-Mask" style={{position: 'absolute', top: 0, left: obj.left, width: 240, height: 525, fill: 'rgba(35, 35, 35, 0.8)'}}><path fillRule="evenodd" d="M0 0h240v525h-240zM8 437h48v18h-48z" className="bem-Mask_Path" /></svg></div>
                    <div>
                        <div style={{position: 'absolute', pointerEvents: 'none', zIndex: 23, top: obj.top, left: obj.left+8, transform: 'translate3d(0px, 0px, 0px)'}}>
                            <svg viewBox="0 0 224 79" style={{display: 'block', overflow: 'visible', position: 'absolute', width: 224, height: 79, borderRadius: 0, color: 'rgb(64, 64, 64)', borderColor: 'rgb(33, 33, 33)'}}>
                                <defs>
                                    <filter id="balloon-dropshadow" x="-100%" width="300%" y="-100%" height="300%"><feconvolvematrix in="SourceAlpha" result="s" order="3 3" kernelMatrix="1 2 1 2 4 2 1 2 1" /><fegaussianblur in="SourceAlpha" stdDeviation={3} /><feoffset dy={3} /><fecomponenttransfer><fefunca type="linear" slope=".25" /></fecomponenttransfer><femerge><femergenode /><femergenode in="s" /><femergenode in="SourceGraphic" /></femerge></filter>
                                    <clippath id="balloon-clip-94518"><path d="M0 2a 2 -2 0 0 1 2 -2h220a 2 2 0 0 1 2 2v75a -2 2 0 0 1 -2 2h-220a -2 -2 0 0 1 -2 -2z" /></clippath>
                                </defs>
                                <path d="M0 2a 2 -2 0 0 1 2 -2h220a 2 2 0 0 1 2 2v75a -2 2 0 0 1 -2 2h-220a -2 -2 0 0 1 -2 -2z" filter="url(#balloon-dropshadow)" />
                                <path d="M0 2a 2 -2 0 0 1 2 -2h220a 2 2 0 0 1 2 2v75a -2 2 0 0 1 -2 2h-220a -2 -2 0 0 1 -2 -2z" clipPath="url(#balloon-clip-94518)" fill="#404040" style={{strokeWidth: 0, stroke: 'black'}} />
                            </svg>
                            <div style={{opacity: 1, borderRadius: 3, color: 'rgb(217, 217, 217)', pointerEvents: 'all', padding: 0, boxSizing: 'border-box', position: 'relative', maxWidth: 254, fontSize: 11, lineHeight: '16px'}}>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch'}}>
                                    <div className="reset-panel wf-control">
                                        <div className="inner">
                                            <div className="kit-button has-text reset" onClick={()=>{this.props.data.removeThisProp(obj.prop)}}><i /><span>移除这个样式</span></div>
                                            <div className="kit-divider" />
                                            <div className="kit-button has-text close-panel large-hitzone" onClick={this.props.data.openPropWindow}>OK</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }else{
            return null;
        }

    }
}
export default ModifyRightValue;
