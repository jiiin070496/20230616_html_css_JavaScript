import React, {Component} from "react";

class R033_ReturnMap extends Component{
    render(){
        const element_Array = [
            <li key="1">react</li>,
            <li key="2">200</li>,
            <li key="3">Array Map</li>,
        ]

        return(
            <ul>
                {element_Array.map((array_val)=>array_val)}
            </ul>
        )
    }
}

export default R033_ReturnMap;