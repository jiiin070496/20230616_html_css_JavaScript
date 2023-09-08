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
        id:'냄',
        name : '사과',
        price : '700원',
        amount : '1개'
      }
      ,
      {
        id:'쿵',
        name : '멜론',
        price : '14,800원',
        amount : '1개'
      }
    ] 
  );

  //useState
  const [newFruit, setNewFruit] = useState( //newFruit라는 이름의 저장공간 생성 선언
    {
      id : '',
      name : '',
      price : '',
      amount : ''
    }
  ); 

  //mainHome
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
          <li><Link to="/insert">과일 추가</Link></li>
          <li><Link to="/">메인으로</Link></li>
        </ul>
      </nav>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>             
            <td>이름</td>
            <td>가격</td>
            <td>수량</td>
          </tr>
        </thead>
        <tbody>
          {  // 자바 스크립트 작성하고 싶을때
            /* fruit - 내가 짓는 이름 */
            fruitList.map( 
              (fruit) => { //fruitList가 반복해서 돎. each문과 비슷
            return( // 실제로 화면에 뿌림
              <tr key={fruit.id}>
                <td>{fruit.id}</td>
                <td>{fruit.name}</td>
                <td>{fruit.price}</td>
                <td>{fruit.amount}</td>
                <td><button onClick={ () => {onClickDeleteHandler(fruit.name);} }>삭제</button></td>
              </tr>
            )
            } ) // map
          } 
        </tbody>
      </table>
      </>
    );
  }

  //과일추가
  const Insert = () =>{
    //과일추가
    //과일 목록보기
    //홈으로
    return (
      <>
        <h1>과일 추가</h1>
        <nav>
          <ul>        
            <li><Link to="/">메인으로</Link></li>
          </ul>
        </nav>
        <div>
          <form>
              <div>
                <span>I D: </span>
                <input type="text" onChange={onChangeInput} value={newFruit.id} 
                  name="id" placeholder="사용자 아이디"></input>
              </div>
              <div>
                <span>이름: </span>
                <input type="text" onChange={onChangeInput} value={newFruit.name} 
                  name="name" placeholder="과일명"></input>
              </div>
              <div>
                <span>가격: </span>
                <input type="text" onChange={onChangeInput} value={newFruit.price} 
                  name="price" placeholder="가격"></input>
              </div>
              <div>
                <span>단위: </span>
                <input type="text" onChange={onChangeInput} value={newFruit.amount} 
                  name="amount" placeholder="수량"></input>
              </div>
          </form>  
          <button onClick={onClickHandler}>등록</button>
        </div>
        <List></List>
      </>
    );
  }

  const onClickDeleteHandler = (name) => { //event.target -> this개념
    // console.log(name);
    const filteredFruitList =  fruitList.filter( (fruit) => fruit.name !== name); //fruit 내가 짓는 이름
    // 목록용 저장공간
    setFruitList(filteredFruitList)
  }
  
  const onClickHandler = (event)=>{
    // 유효성검사 -빈 칸
    if(!newFruit.id || !newFruit.name || !newFruit.price || !newFruit.amount){
      alert("모든 값을 입력해주세요.")
      return;
    }
    // 유효성검사 - 같은 이름 없도록
    const idExist = fruitList.some( (fruit)=>fruit.name === newFruit.name );
    if(idExist){
      alert("이미 등록된 과일이름입니다. 이름을 다시 입력해주세요.")

      // 이름 입력란을 공란으로 만들기
      setNewFruit({...newFruit, ['name']:''});
      return;
    }
    console.log("꼭 확인 !!! 클릭");
    console.log(event.target); // js에서 event 발생하면 매개인자로 event 전달됨. 그것을 확인함.!!!
    console.log("---------insert");
    console.log(newFruit);
    // 추가기능용 저장공간 newFruit 을 목록용 저장공간 fruitList 에 추가하기
    setFruitList([...fruitList, newFruit]);

    // 이름, 가격, 수량 입력란을 공란으로 만들기
    setNewFruit({ name : "", price : "", amount : "" });
  }

  //onChangeInput
  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setNewFruit((newFruit) => ({
      ...newFruit,
      [name]: value
    }));
  };
    
// const f0 = function(){ console.log(); }
// const f1 = function(data, a){ console.log(); }
// const f2 = (data, a) => { console.log(); console.log(); }
// const f3 = (data) => { console.log(); }
// const f4 = data => { console.log(); }
const f5 = () => { console.log(); }

//return(<BrowserRouter>)
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>       
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<List />} />
            <Route path="/insert" element={<Insert />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
