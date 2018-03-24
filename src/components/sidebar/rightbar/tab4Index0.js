import React, { Component } from 'react';

class Tab4Index0 extends Component {
    render() {
        let A1={
                transform: 'translateY(0px)',
                position: 'absolute',
                left: 0,
                right: 0,
                zIndex: 6
            }
        let A2={
                borderTop: 0,
                minHeight: '31px',
                padding: '1px 30px 0px 0px',
                backgroundColor: 'rgb(64, 64, 64)'
            }
        let S1 = {
            cursor: 'inherit',
            userSelect: 'none',
            WebkitFontSmoothing: 'antialiased',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            minWidth: 0,
            maxWidth: '100%',
            paddingLeft: '6px',
            paddingRight: '6px',
            borderRadius: '2px',
            height: '24px',
            background: 'rgb(181, 81, 140)',
            color: 'rgba(255, 255, 255, 0.9)',
            position: 'relative',
            fontSize: '11px',
            textShadow: 'none',
            boxShadow: 'rgba(0,0, 0, 0.15) 0px 0px 0px 1px',
            overflow: 'hidden'
        }
        let S2 = {
            display: 'inline-block',
            maxWidth: '208px',
            marginTop: '2px',
            marginLeft: '4px'
        }
        let S3 = {
            overflow:'hidden',
            textOverflow:'ellipsis',
            whiteSpace:'nowrap',
            opacity:'1',
            fontFamily:'inherit',
            fontSize:'inherit',
            fontWeight:'inherit',
            outline:'none'
        }
        return (
            <div index="0" total="5" style={A1}>
                <div depth="0" style={A2}><div style={S2}><div color="#b5518c" style={S1}><span style={S3}>Body (所有页面)</span></div></div></div>
            </div>
        )
    }
}
export default Tab4Index0;
