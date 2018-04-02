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
        return(
            <div className="kit-section-body">
                <div className="transition-parent kit-panel">
                    <FontFamily/>
                    <FontWeight/>
                    <FontStyle/>
                    <FontColor/>
                    <FontSize/>
                    <LineHeight/>
                    <div className="transition-child line clearfix">
                        <LetterSpacing/>
                        <TextIndent/>
                    </div>
                    <div className="transition-child kit-divider"></div>
                    <div className="line clearfix">
                        <TextAlign/>
                        <TextDecoration/>
                    </div>
                    <div className="transition-child line clearfix">
                        <TextTransform/>
                        <TextDirection/>
                    </div>
                    <div className="transition-child kit-divider"></div>
                    <ColumnCount/>
                </div>
            </div>
        )
    }
}
export default Body;
