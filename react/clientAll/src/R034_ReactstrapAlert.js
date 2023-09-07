import React, {Component} from "react";
import { Alert, UncontrollAlert, UncontrolledAlert } from 'reactstrap';

class R034_ReactstrapAlert extends Component{
    render(){
        return(
            <div>
                <alert color="light">
                    simple Alert [color:light]
                </alert>
                <UncontrolledAlert>
                    Uncontrolled Alert [color:warning]
                </UncontrolledAlert>
            </div>
        )
    }
}

export default R034_ReactstrapAlert;