//Login component 
import React, {useState} from "react";

export default function LogIn({handleSubmit, onFormSwitch}) {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  
  return(
    <>
      <h1>Sign In Form</h1>
      <div className="auth-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input onChange={(e)=> setEmail(e.value.target)} value={email} type="email" placeholder="Enter your email" id="email"/>
          <label htmlFor="pass">Password</label>
          <input onChange={(e)=> setPass(e.value.target)} value={pass}htype="password" placeholder="xxxxxxxxx" id="pass"/>
          <button type="submit">Log in</button>
        </form> 
      </div>
      <button onClick={()=> onFormSwitch("Register")}
      >click here to Register if you don't have an account</button>
    </>
    )
}
