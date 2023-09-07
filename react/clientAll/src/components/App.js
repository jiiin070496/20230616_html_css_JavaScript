import'../App.css';
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import reactRouter from './R089_reactRouter'
import reactRouter2 from './R089_reactRouter2' 

function App() {
  return (
    <Routes>
      <div className="App">
        <h1>React라우터DOM</h1>
        <Route path='/' element={<Home></Home>} />
        <Route path='/insert' element={<insert></insert>} />
      </div>
    </Routes>
  );
}

function Home (){
  return(
    <h1>홈페이지</h1>
  );
}
function insert (){
  return(
    <h1>추가</h1>
  );
}



export default App;
