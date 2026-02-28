import React from 'react'
import './id.css'
import pic from '../../assets/react.svg'

const id = () => {
  return (
    <div className='id'>
      <div className="container">

        <div className="img">
          <img src={pic}/>
        </div>

        <div className="detail">
          <h2>Name:</h2>
        </div>
        
      </div>
    </div>
  )
}

export default id
