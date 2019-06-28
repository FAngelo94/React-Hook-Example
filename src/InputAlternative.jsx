import React from 'react';

function InputAlternative(props) {
  const inputEl = React.useRef(null);
  function focusInput() {
      console.log(document.querySelector('input'));
      inputEl.current.focus();
      }
    
      return (
      <div>
         <MyInput inputEl={inputEl}/>
         <button onClick={focusInput}>focus!</button>
      </div>
      )
}

export default InputAlternative;

function MyInput(props) {
	return <input ref={props.inputEl} /> // calling the button should focus this input! 
}


// concetti da usare

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
// https://reactjs.org/docs/hooks-reference.html#useref
