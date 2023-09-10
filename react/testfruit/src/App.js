
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [fruitList, setFruitList] = useState(
    [
      {
        name:"스"
      },
      {
        name:"각"
      }
    ]
  );
  const [newFruit, setNewFruit] = useState(
    {
      name:""
    }
  );

  const Home = () => {
    return(
      <>
        <h1>홈임니돵</h1>
        <nav>
          <ul>
            <li><Link to="/insert">추가</Link></li>
            <li><Link to="/list">목록</Link></li>
          </ul>
        </nav>
      </>
    );
  }
  const Insert = () => {
    return(
      <>
        <h1>추가임니돵</h1>
        <nav>
          <ul>
            <li><Link to="/">메인</Link></li>
            <li><Link to="/list">목록</Link></li>
          </ul>
        </nav>
        <div>
          <div>
            <span>이름</span>
            <input onChange={onChangeHandler} name="name" value={newFruit.name}></input>
          </div>
          <div><button onClick={onClickHandler}>등록</button></div>
        </div>
      </>
    );
  }
  const List = () => { 
    return(
      <>
        <h1>목록임니돵</h1>
        <nav>
          <ul>
            <li><Link to="/">메인</Link></li>
            <li><Link to="/insert">추가</Link></li>
          </ul>
        </nav>
        <table>
          <thead>
            <tr>
              <th>이름</th>
            </tr>
          </thead>
          <tbody>
            {
              fruitList.map(
                (fruit) => {
                  return(
                    <tr>
                      <td>{fruit.name}</td>
                      <td><button onClick={ () => {onClickDeletHandler(fruit.name);} }>삭제</button></td>
                    </tr>
                  );
                }
              )
            }
          </tbody>
        </table>
      </>
    );
  }

  const onClickDeletHandler = (name) => {
    const filteredFruitList = fruitList.filter( (fruit) => fruit.name !== name );
    setFruitList(filteredFruitList);
  }
  const onClickHandler = (event) => {
    setFruitList([...fruitList, newFruit]);
    setNewFruit({name : ""});
  }
  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setNewFruit({ ...newFruit, [name]:value });
  }


  return(
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/insert" element={<Insert></Insert>}></Route>
          <Route path="/list" element={<List></List>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
