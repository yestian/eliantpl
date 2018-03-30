import React, { Component } from 'react';

class RightTabs extends Component{
    render() {
        let fn=this.props;
        let data=fn.data.right.right_tab_index;
        return (
            <div className="tabs">
                <div className={`tab style-tab ${data===1?'active':''}`}
                    data-automation-id="right-sidebar-style" onClick={(e)=>fn.onClick(e,1)}
                    onMouseEnter={(e)=>fn.onMouseEnter(e)}
                    onMouseLeave={(e)=>fn.onMouseLeave(e)}>
                    <span className="sprite-mid"><i></i></span>
                </div>
                <div className={`tab settings-tab ${data===2?'active':''}`}
                    data-automation-id="right-sidebar-settings-tab-link"
                    onClick={(e)=>fn.onClick(e,2)}
                    onMouseEnter={(e)=>fn.onMouseEnter(e)}
                    onMouseLeave={(e)=>fn.onMouseLeave(e)}>
                    <span className="sprite-mid"><i></i></span>
                </div>
                <div className={`tab navigator-tab ${data===3?'active':''}`}
                    data-automation-id="right-sidebar-navigator-tab-link"
                    onClick={(e)=>fn.onClick(e,3)}
                    onMouseEnter={(e)=>fn.onMouseEnter(e)}
                    onMouseLeave={(e)=>fn.onMouseLeave(e)}>
                    <span className="sprite-mid"><i></i></span>
                </div>
                <div className={`tab all-styles-tab ${data===4?'active':''}`}
                    data-automation-id="right-sidebar-allstyles"
                    onClick={(e)=>fn.onClick(e,4)}
                    onMouseEnter={(e)=>fn.onMouseEnter(e)}
                    onMouseLeave={(e)=>fn.onMouseLeave(e)}>
                    <span className="sprite-mid"><i></i></span>
                </div>
                <div className={`tab interactions-tab ${data===5?'active':''}`}
                    data-automation-id="right-sidebar-interactions-tab-link"
                    onClick={(e)=>fn.onClick(e,5)}
                    onMouseEnter={(e)=>fn.onMouseEnter(e)}
                    onMouseLeave={(e)=>fn.onMouseLeave(e)}>
                    <span className="sprite-mid"><i></i></span>
                </div>
            </div>
        )
    }
}
export default RightTabs;
