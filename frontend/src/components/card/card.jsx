import React from 'react'
import "./card.css"

const car = (props) => {
  return (
    <div className='card'>

      <div className="container">
        <div className="front">
          <h2>{props.name}</h2>
          <img src={props.img}/>
        </div>

        <div className="back">
          <h2>Description</h2>
          <p>{props.description}</p>
        </div>
      </div>
      
    </div>
  )
}

export default car
