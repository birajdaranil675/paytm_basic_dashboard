import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';

function LandingPage() {
    const navigate = useNavigate();
    return (
      <>
        <h1>This is basic Paytm Dashboard React Web Application</h1>
         <Button buttonFor='Sign Up' onClick={()=>{
            navigate('/signup');
          }} />
      </>
    )
}

export default LandingPage