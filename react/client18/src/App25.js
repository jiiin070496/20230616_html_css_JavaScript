import React from "react";
import './App.css';
import SetState from './R025_SetState' 

function Myfunction(props){
  // let {title} = props;
  // let {content} = props;
  return(
    <div>
      <h2>함수형태 Component</h2>
      <div>{props.title}</div>
      <div>{props.content}</div>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>CSS 적용하기</p>
      <SetState />
      <Myfunction title="몽총이." content="똥몽총이."/>
    </div>
  );
}

export default App;
