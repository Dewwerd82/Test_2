import React, { useState } from 'react';

function Calc2(props) {

  let n = 0;

  props.add ? n = 1 : n = 0;
  
  
  
  const [counter, setCounter] = useState(n)
  const [state, setState] = useState(props.status)
  

  const incClick = () => {
     setCounter(counter + 1)
  }


  const decClick = () => {
     (counter > 0) ? setCounter(counter - 1) : setCounter(0)  
  } 



  const resetClick = () => setCounter(0)



  const delClick = () => {setState(false)}

  return (
    <div style={{display: state ? 'block' : 'none'}}>
    <input type="text" className="form-control totaCount" value={props.num}  disabled />
      <p>Значение счетчика: {counter}</p>
      <button onClick={incClick}>Увеличить</button>
      <button onClick={decClick}>Уменьшить</button>
      <button onClick={resetClick}>Сброс</button>
      <button onClick={delClick}>Удалить</button>
      
    </div>
  )
}

export default Calc2;