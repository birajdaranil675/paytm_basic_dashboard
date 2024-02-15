import React from 'react'
import Heading from './commonComponents/Heading'
import SubHeading from './commonComponents/SubHeading'
import InputBox from './commonComponents/InputBox'
import Button from './commonComponents/Button'

function Signup() {
  return (
    <div className='signup-card'>
        <Heading header='Sign Up'/>
        <SubHeading subHeading='Enter your information to create an account'/>
        <InputBox inputFor='First Name'/>
        <InputBox inputFor='Last Name'/>
        <InputBox inputFor='Email'/>
        <InputBox inputFor='Password'/>
        <Button buttonFor='Sign up'/>
    </div>
  )
}

export default Signup