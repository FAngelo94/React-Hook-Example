import React from 'react';


// Usage
export default function CustomHook() {
  const {value, increment, decrement} = useGlobalCounter()
  console.log(value,increment,decrement);
  return(
    <div>
      <div><Visualizer value={value}/></div>
      <div><Controls increment={increment} decrement={decrement}/></div>
      </div>
    );

  function useGlobalCounter(){
    const [value, onChange] = React.useState(0);

    function increment(){
      onChange(value+1);
    }

    function decrement(){
      onChange(value-1);
    }

    return {value,increment,decrement};
  }
}

function Visualizer(props){
  return (
    <p>{props.value}</p>
  );
}

function Controls(props){
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}