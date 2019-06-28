import React from 'react';

function Input(props) {
  const [value, onChange] = React.useState(props.value);

  React.useEffect(() => {
    props.onChange(value);
  });

  return (
    <input type="text" value={value} onChange={v =>{ 
      onChange(v.currentTarget.value);
    }}></input>
  );
}

export default Input;