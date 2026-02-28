import React from 'react'
import './title.css'

const title = (props) => {
  return (
    <div className='title'>
      <h1>{props.title}</h1>
    </div>
  )
}

export default title
