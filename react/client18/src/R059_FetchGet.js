import React, {Component} from "react";

class R059_FetchGet extends Component{
    
    componentDidMount = async() => {
        const reponse = await fetch('http://date.jsontest.com/');
        const body = await reponse.json();
        alert(body.date)
    }
    
    render(){
        return(
            <h1>fetch get</h1>
        )
    }
}

export default R059_FetchGet;