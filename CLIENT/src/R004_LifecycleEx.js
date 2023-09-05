import { Component } from "react";

class R004_LifecycleEx extends Component{
    render(){
        console.log("3 render R004 call")
        return (
            <h2> [This is Re-render Function] </h2>
        );
    }
}
export default R004_LifecycleEx;