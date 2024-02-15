import React from 'react'

function InputBox({inputFor}) {
  return (
    <div className='InputBox'>
        <label htmlFor={inputFor}>{inputFor}</label><br />
        <input type="text" /><br /><br />
    </div>
  )
}

export default InputBox