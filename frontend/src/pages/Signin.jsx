import React, { useState } from 'react'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import InputBox from '../Components/InputBox'
import Button from '../Components/Button'
import { Link, useNavigate } from 'react-router-dom'

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleClick(){
    console.log(email+" "+password);
    navigate("/dashboard")
  }
  return (
    <div className='signin-card'>
        <Heading header='Sign In'/>
        <SubHeading subHeading='Welcome Back !!!!'/>
        <InputBox inputFor='Email' elementId='email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <InputBox inputFor='Password' elementId='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <Button buttonFor='Sign In' onClick= {handleClick}/>
        <p>Don't have account?<Link to="/signup" >Register</Link></p>
    </div>
  )
}

export default Signin