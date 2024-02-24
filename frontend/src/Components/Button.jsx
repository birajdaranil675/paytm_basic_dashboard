import React from 'react'

function Button({onClick, buttonFor}) {
  
  return (
      <>
        <button className='button' onClick={onClick}>{buttonFor}</button>
      </>
    )
}

export default Button