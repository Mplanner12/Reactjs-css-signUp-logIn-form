//App
import React, {useState} from 'react';
import Login from "./Login.tsx";
import Register from "./Register.t"

export default function App(){
  const [currentForm, setCurrentForm] = useState("login") 
  const handleSubmit = ((e)=>{
        e.preventDefault;
        console.log(email)
  })
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