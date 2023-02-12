import React ,{useRef,useState,useEffect} from 'react'
import '../styles/App.css';
import InputField from './InputField.js';
const App = () => {
 
//code here 
const [value, setValue]= useState('');
const [value2, setValue2]= useState('');
const newRef = useRef(null);

const settingValue =()=>{
  setValue2(value);
  setValue('');
}

const focusInput =()=>{
  newRef.current.focus();
}

const handle =()=>{
  
}
 
  return (
    <div>
    <InputField  ref={newRef} value={value} setValue={setValue}  type="text"/><br/>
    <button id="settingValueButton" onClick={settingValue}>Set Value</button>
    <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
     <textarea id="textarea" value={value2} onChange={handle}></textarea>

    </div>
  );
}


export default App;
