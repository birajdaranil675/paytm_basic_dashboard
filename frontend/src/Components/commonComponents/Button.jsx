import React from 'react'

function Button({buttonFor}) {
  return (
    <div className='Button'>
        <button>{buttonFor}</button>
    </div>
  )
}

export default Button