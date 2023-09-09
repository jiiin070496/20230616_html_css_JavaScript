import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [ newFruit, setNewFruit ] = useState(
    {
      name=""
    }
  );

  const [friutList, setFruitList] = useState(
    [
      {name : "사과"}
    ]
  )


  const Home = () => {
    return(
      <>
      <h1>홈이다 이 쫘시가</h1>
      <nav>
        <ul>
          <li><Link to="/insert">추가할거다 짜시가</Link></li>
          <li><Link to="/list">목록볼거다 짜시가</Link></li>
        </ul>
      </nav>
      </>
    )
  }

  const Insert = () => {
    return(
      <>
      <h1>인썰트다이쫘시가</h1>
      <nav>
        <ul>
          <li><Link to="/list">목록볼거다짜시가</Link></li>
          <li><Link to="/">홈으로갈거다짜시가</Link></li>
        </ul>
      </nav>
      </>
    );
  }
  const List = () => {
    return(
      <>
      <h1>리스트다이쫘시가</h1>
      <nav>
        <ul>
          <li><Link to="/insert">추가할거다짜시가</Link></li>
          <li><Link to="/">홈으로갈거다짜시가</Link></li>
        </ul>
      </nav>
      </>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home /> } />  
          <Route path="/insert" element={ <Insert></Insert> } />  
          <Route path="/list" element={ <List></List> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
