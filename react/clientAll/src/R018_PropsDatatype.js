import React, {Component} from "react";
import datatype from 'prop-types';

class R018_PropsDatatype extends Component{
    //
    render(){
        let obj = {padding:"0px", color:"red"}

        // let에 이름과 return한곳,  import한 파일(App.js)의 이름이 같은것을 찾아감
        let{
            String, Number, Boolean, Array, ObjectJson, Function
        }=this.props
        return(
            // 스타일은 오브잭트 모양 <div style={obj}>
            <div style={{padding:"0px", color:"red"}}>   
                <p>StringProps:{String}</p>
                <p>NumberProps:{Number}</p>
                <span>BooleanProps:{Boolean.toString()}</span>
                <p>ArrayProps:{Array.toString()}</p>
                <p>Object JsonProps:{JSON.stringify(ObjectJson)}</p>
                <p>FunctionProps:{Function}</p>
            </div>
        )
    }      
}

R018_PropsDatatype.propTypes = {
    String:datatype.number,
    Number:datatype.number,
    Boolean:datatype.bool,
    Array: datatype.array,
    ObjectJson:datatype.object,
    Function:datatype.func, 
}
export default R018_PropsDatatype;