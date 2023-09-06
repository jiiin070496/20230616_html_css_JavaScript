import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker'



class R060_FetchPost extends Component{
    
    componentDidMount = async() => {
        const reponse = await fetch('http://date.jsontest.com/');
        const body = await reponse.json();
        alert(body.date)
    }
    
    render(){
        return(
            <h1>fetch post</h1>
        )
    }
}

export default R060_FetchPost;