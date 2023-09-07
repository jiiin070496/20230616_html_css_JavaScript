import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState }from 'react';

/* 
url mapping 페이지 구성
나타낼 속성들을 모아서 entity(과일) 별로 묶기 Vo
속성: 이름, 가격, 단위 == 과일
TODO delete - 목록화면에서 버튼 만들어서 1개 삭제
TODO info - id 활용해서 보기
*/

function App() {
  
  const [fruitList, setFruitList] = useState( // fruitList - array모양의 오브젝트
    [
      {
        id:'1',
        name : '기본이름1',
        price : '기본값1',
        count : '기본수량1'
      }
      ,
      {
        id:'2',
        name : '기본이름2',
        price : '기본값2',
        count : '기본수량2'
      }
    ] 
  );
  //useState
  const [newFruit, setNewFruit] = useState( //newFruit라는 이름의 저장공간 생성 선언
    {
      id : '',
      name : '기본이름',
      price : '기본값',
      count : '기본수량'
    }
  ); 
  //insertHandler
  const insertHandler = () =>{
    console.log("insertHandler 함수실행");
    console.log(newFruit); 
    // TODO id중복값 없게
    // TODO 빈칸 없게
    // 기존 값과 동일한 것이 없다면 추가
    setFruitList([...fruitList, newFruit]); //const newFruit 추가적으로 넣고싶은 부분
    //...fruitList - 원래있던 공간을 깊음복사 형태로
    console.log(fruitList);
  }
  //onChangeInput
  const onChangeInput = (event) => {
    console.log(event.target);
    const {name, value} = event.target;
    console.log(name);
    console.log(value);
    setNewFruit({...newFruit,[name]:value}); //...newFruit - 원래있던 공간을 깊음복사 형태로
    //input태그의 name
  }
  //과일추가
  const InsertFruit = () =>{
    //과일추가
    //과일 목록보기
    //홈으로
    return (
      <>
        <h1>과일 추가</h1>
        <nav>
          <ul>        
            <li><Link to="/info">과일 목록 보기</Link></li>
            <li><Link to="/Home">메인으로</Link></li>
          </ul>
        </nav>
        <div>
          <form>
              <div>
                <span>이름: </span>
                <input type="text" onChange={onChangeInput} value={newFruit.name} name="name"></input>
              </div>
              <div>
                <span>가격: </span>
                <input type="text" onChange={onChangeInput} value={newFruit.price} name="price"></input>
              </div>
              <div>
                <span>단위: </span>
                <input type="text" onChange={onChangeInput} value={newFruit.count} name="count"></input>
              </div>
          </form>  
          <button onClick={insertHandler}><Link to="/list">추가</Link></button>
        </div>
      </>
    );
  }
  //과일목록
  const List = (props) =>{
    // const n1 = props.n1; 이것을 줄여서
    // const {n1} = props;
    // const {n2} = props; 를 줄여서
    const {n1, n2} = props;
    console.log(n1);
    console.log(n2);
   
    //리스트
    //과일추가
    //홈으로
    return (
      <>
      <h1>과일 리스트</h1>
      <nav>
        <ul>   
        <li><Link to="/info">과일 상세정보</Link></li>     
          <li><Link to="/insert">과일 추가</Link></li>
          <li><Link to="/Home">메인으로</Link></li>
        </ul>
      </nav>
      <table>
        <thead>
          <tr>
            <td>이름</td>
            <td>가격</td>
            <td>수량</td>
          </tr>
        </thead>
        <tbody>
          {  // 자바 스크립트 작성하고 싶을때
            /* fruit - 내가 짓는 이름 */
            fruitList.map( (fruit)=>{ //fruitList가 반복해서 돎. each문과 비슷
              console.log(fruit);
            return( // 실제로 화면에 뿌림
              <tr>
                <td>{fruit.name}</td>
                <td>{fruit.price}</td>
                <td>{fruit.count}</td>
              </tr>
            )
            } ) // map
          } 
        </tbody>
      </table>
      </>
    );
  }
  //return(<BrowserRouter>)
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>       
            <Route path="/Home" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/insert" element={<InsertFruit />} />
            <Route path="/delete" element={<DeleteFruit />} />
            <Route path="/update" element={<UpdateFruit />} />
            <Route path="/info" element={<InfoFruit />} />      
        </Routes>
      </div>
    </BrowserRouter>
  );
}
//MainHome
const Home = () =>{ //arrow 함수
  //홈
  //과일목록보기
  //과일추가
  return (
    <>
    <h1>사과마트</h1>
    <nav>
      <ul>
        <li><Link to="/list">과일 목록 보기</Link></li>
        <li><Link to="/insert">과일추가</Link></li>
      </ul>
    </nav>
    </>
  );
}
// const f0 = function(){ console.log(); }
// const f1 = function(data, a){ console.log(); }
// const f2 = (data, a) => { console.log(); console.log(); }
// const f3 = (data) => { console.log(); }
// const f4 = data => { console.log(); }
const f5 = () => { console.log(); }

//목록삭제
const DeleteFruit = ( )=>{
  return (
    <>
      <h1>과일 정보 삭제</h1>    
    </>
  );
}
//목록수정
const UpdateFruit = () =>{
  return (
    <h1>과일 정보 수정</h1>
  );
}
//목록상세
const InfoFruit = () =>{
  return (
    <>
      <h1>과일 목록</h1>
      <table border="1">
          <tr>
            <th>사과</th>
            <td>1000원</td>
          </tr>
          <tr>
            <th>바나나</th>
            <td>2000원</td>
          </tr>
          <tr>
            <th>멜론</th>
            <td>3000원</td>
          </tr>
          <tr>
            <th>수박</th>
            <td>4000원</td>
          </tr>
        </table>

        <button><Link to="/list">이전으로</Link></button>        
        <button><Link to="/Home">메인으로</Link></button>

    </>
  );
}

export default App;
