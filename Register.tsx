//Register component 
import React, {useState} from "react";

export default function Register({handleSubmit}) {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [name, setName] = useState("")
  
  return(
    <>
      <h1>Sign In Form</h1>
      <div className="auth-form-container">
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="name">Name</label>
          <input onChange={(e)=> setEmail(e.value.target)} value={name} type="name" placeholder="Enter your Name" id="name"/>
          <label htmlFor="email">Email</label>
          <input onChange={(e)=> setPass(e.value.target)} value={email} type="email" placeholder="Enter your email" id="email"/>
          <label htmlFor="pass">Password</label>
          <input onChange={(e)=> setName(e.value.target)} value={pass}htype="password" placeholder="xxxxxxxxx" id="pass"/>
          <button type="submit">Log in</button>
        </form> 
      </div>
      <button onClick={()=> onFormSwitch("logn")}>click here to Login if you already have an account</button>
    </>
    )
}
