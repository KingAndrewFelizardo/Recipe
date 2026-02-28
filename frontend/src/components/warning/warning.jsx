import React from 'react'
import './warning.css'

const warning = (props) => {
  return (
    <div className='warning'>
      <h1>{props.warning}</h1>
    </div>
  )
}

export default warning
