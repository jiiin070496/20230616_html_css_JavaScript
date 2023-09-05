import logo from './logo.svg';
import './App.css';
import ImportComponent from './R003_ImportComponent';
import LifecycleEx from './R004_LifecycleEx';
import LifecycleEx2 from './R005_LifecycleEx';
import PropsDatatype from './R018_PropsDatatype';
import $ from 'jquery';

function App() {
  return (
    <div className="App">
      <ImportComponent></ImportComponent>
      <h1>안녕 리엑트</h1>
      <LifecycleEx2
          prop_value = 'FromApp.js'
      />

      <PropsDatatype
        String = "react"
        number={200}
        Boolean={1==1}
        Array={[0, 1, 8]}
        Object Json={{react:"리액트", towhundred:"200"}}  
        Function={console.log("FunctionProps: function!")}
      />
    </div>
  );
}

export default App;
