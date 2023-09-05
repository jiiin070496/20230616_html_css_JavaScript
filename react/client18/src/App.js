import React, {Component} from "react";
import './App.css';
import PropsDatatype from './R018_PropsDatatype' 

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>CSS 적용하기</p>
      <PropsDatatype 
        String="냄궁"
        Number={960704}
        Boolean={true}
        Array={[0, 1, 0]}
        ObjectJson = {{firstName:"남궁", lastName:"하진", birth:"960704"}}
        function={console.log("functionpProps: 냄궁!")}
      />
    </div>
  );
}

export default App;
