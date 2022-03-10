import React from 'react'
import './InputOptn.css'
function InputOptn({Icon,title,color}) {
  return (
    <div className='inputOption'>
        <Icon style={{color:color}}/>
        <h4>{title}</h4>
    </div>
  )
}

export default InputOptn