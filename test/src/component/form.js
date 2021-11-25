import But from "./but";
import React, { useState } from 'react';


export let allCount = 0;
export let count = 0;
export let state = false;

const Form = () => {
    const [inputList, setInputList] = useState([]);
    
  
    const onAddBtnClick = event => {
      setInputList(inputList.concat(<But key={inputList.length} />));
      allCount++;
      count = inputList.length;
      console.log(inputList.length);
      state = true;
    };
    
    const onResetBtnClick = event => {
       setInputList([]);
       allCount = 0;
        return (<div></div>)
      
  
    };
  
    return (
      <div className="container">
        <button onClick={onAddBtnClick}>Add input</button>
        <button onClick={onResetBtnClick}>Reset</button>
        
        {inputList}
        
      </div>
      
    );
  };

  export default Form;