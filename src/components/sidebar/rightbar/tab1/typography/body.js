import React,{Component} from "react";
import FontFamily from './fontFamily';
import FontWeight from './fontWeight';
import FontStyle from './fontStyle';
import FontColor from './fontColor';
import FontSize from './fontSize';
import LineHeight from './lineHeight';
import LetterSpacing from './letterSpacing';
import TextIndent from './textIndent';
import TextAlign from './textAlign';
import TextDecoration from './textDecoration';
import TextTransform from './textTransform';
import TextDirection from './textDirection';
import ColumnCount from './columnCount';

class Body extends Component{
    render(){
        let adv=this.props.data.typographyAdv;
        return(
            <div className="kit-section-body">
                <div className="transition-parent kit-panel">
                    <FontFamily/>
                    <FontWeight/>
                    <FontStyle/>
                    <FontColor/>
                    <FontSize/>
                    <LineHeight/>
                    {adv?<div className="transition-child line clearfix">
                        <LetterSpacing/>
                        <TextIndent/>
                    </div>:''}
                    {adv?<div className="transition-child kit-divider"></div>:''}
                    <div className="line clearfix">
                        <TextAlign/>
                        <TextDecoration/>
                    </div>
                    {adv?<div className="transition-child line clearfix">
                        <TextTransform/>
                        <TextDirection/>
                    </div>:''}
                    {adv?<div className="transition-child kit-divider"></div>:''}
                    {adv?<ColumnCount/>:''}
                </div>
            </div>
        )
    }
}
export default Body;
