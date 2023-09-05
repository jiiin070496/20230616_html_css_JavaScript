import React, {Component} from "react";
import datatype from 'prop-types';
import { data } from "jquery";

class R020_PropsObjVal extends Component{
    render(){
        let{
            ObjectJson
        }=this.props
        return(
            <div style={{padding:"0px"}}>       
            Object JsonProps:{JSON.stringify(ObjectJson)}
            </div>
        )
    }      
}

R020_PropsObjVal.propTypes = {
    ObjectJson:datatype.shape({
        react: datatype.string,
        twoHundred: datatype.number
    })
}
export default R020_PropsObjVal;