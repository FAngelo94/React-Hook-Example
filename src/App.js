import React from 'react';
import './App.css';
import Input from './Input.jsx'
import InputAlternative from './InputAlternative.jsx'
import CustomHook from './CustomHook'
import CounterProvider from './CounterProvider/CounterProvider'

function App() {
  const [value2, onChangeValue2] = React.useState("5");
  function onChange(value){
    onChangeValue2(value);

  }
  
  return (
    <div className="App">
      <header className="App-header">
      <Input value={value2} onChange={onChange} autofocus={true} />
      <InputAlternative />
      {value2==="5" 
      ? <CustomHook /> 
      : <p></p>
      }
      <CounterProvider />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
