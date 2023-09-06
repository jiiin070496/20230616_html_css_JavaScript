import React, {Component, PureComponent} from "react";
import datatype from 'prop-types';

class R028_PureComponentClass extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            StateString: 'react',
            StateArrayObj:['react', {react:'200'}]
        }
    }

    buttonClick = (type) =>{
        if(type == 'String'){
            this.setState({StateString:'헝'});
        }else{
            this.setState({StateArrayObj:['react', {헝:'100'}] });
        }
    }

    render(){
        console.log('render() 실행')
        return(
            <div style={{padding:"0px"}}>       
                <button onClick={e => this.buttonClick('String')}> 문자열 변경{this.state.StateString}</button><br/>
                <button onClick={e => this.buttonClick('ArrayObject')}> 객체 배열 변경{this.state.StateArrayObj}</button><br/>
            </div>
        )
    }      
}
export default R028_PureComponentClass;