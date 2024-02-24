import React, { useState } from 'react'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import InputBox from '../Components/InputBox'
import Button from '../Components/Button'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handleClick(){
    console.log(firstName+" "+lastName+" "+email+" "+password);
    navigate("/dashboard")
  }

  return (
    <div className='signup-card'>
        <Heading header='Sign Up'/>
        <SubHeading subHeading='Enter your information to create an account'/>
        <InputBox inputFor='First Name' elementId='firstName' onChange={(e)=>{setFirstName(e.target.value)}}/>
        <InputBox inputFor='Last Name' elementId='lastName' onChange={(e)=>{setLastName(e.target.value)}}/>
        <InputBox inputFor='Email' elementId='email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <InputBox inputFor='Password' elementId='password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <Button buttonFor='Sign up' onClick={handleClick}/>
        <p>Already registered? <Link to="/signin">Sign In</Link></p>
    </div>
  )
}

export default Signup