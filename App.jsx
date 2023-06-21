//App
//importing modules 
import React, {useState} from 'react';
import Login from "./Login.tsx";
import Register from "./Register.t"

//App function
export default function App(){
  const [currentForm, setCurrentForm] = useState("login") 
  const handleSubmit = ((e)=>{
        e.preventDefault;
  })
//switches between forms
  const toggleSwitch = (formName)=>{
    setCurrentForm(formName)
  }
  
  return(
    <fragment>
      <div>
        {currentForm === "login"? <Login onFormSwitch={toggleSwitch}/> : <Register onFormSwitch={toggleSwitch}/>} 
      </div>
    </fragment>
    )
}
