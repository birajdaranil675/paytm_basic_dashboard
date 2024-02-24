import React from 'react'

function InputBox({elementId, inputFor, onChange}) {
  return (
    <div >
        <label htmlFor={elementId}>{inputFor}</label><br />
        <input className='inputBox' onChange={onChange} id={elementId} placeholder={inputFor} type="text" /><br /><br />
    </div>
  )
}

export default InputBox