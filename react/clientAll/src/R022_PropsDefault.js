import React, {Component} from "react";
import datatype from 'prop-types';

class R022_PropsDefault extends Component{
    render(){
        let{
            ReactString,
            ReactNumber
        }=this.props
        return(
            <div style={{padding:"0px"}}>       
                {ReactString}{ReactNumber}
            </div>
        )
    }      
}

R022_PropsDefault.defaultprops = {
    ReactString: "리액트",
    ReactNumber: 400
}

export default R022_PropsDefault;