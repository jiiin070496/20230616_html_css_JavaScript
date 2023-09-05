import { Component } from "react";

class R005_LifecycleEx extends Component{
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps Call :'+props.prop_value);
        return{};
    }
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. Constructor Call');
    }
    componentDidMount(){
        console.log(4.);
    }
    render(){
        console.log("3. render call")
        return (
            <h2> [This is Constructor Function] </h2>
        );
    }
}
export default R005_LifecycleEx;