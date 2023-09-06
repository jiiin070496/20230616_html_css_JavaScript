import React from "react";
import { Route } from "react-router-dom";
import reactRouter from './components/R089_reactRouter'
import reactRouter2 from './R089_reactRouter2' 

function App() {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <p>CSS 적용하기</p>
      {/* <PropsDatatype 
        String="냄궁"
        Number={960704}
        Boolean={true}
        Array={[0, 1, 0]}
        ObjectJson = {{firstName:"남궁", lastName:"하진", birth:"960704"}}
        function={console.log("functionpProps: 냄궁!")}
      /> */}
      {/* <FetchGet/> import FetchGet from './R059_FetchGet'  */}
      {/* <FetchPost/> */}
      <Route exact path='/' Component={reactRouter} />
      <Route exact path='/reactRouter2' Component={reactRouter2} />
    </div>
  );
}

export default App;
