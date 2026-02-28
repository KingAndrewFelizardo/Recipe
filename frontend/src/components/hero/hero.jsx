import React from 'react'
import './hero.css'
import image1 from '../../images/hero_1.png'
import image2 from '../../images/hero_2.png'
import image3 from '../../images/hero_3.png'
import image4 from '../../images/hero_4.png'

const hero = () => {
  return (
    <div className="hero">
        <div className="carousel">
            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image4} />

            <img src={image1} />
            <img src={image2} />
            <img src={image3} />
            <img src={image4} />
        </div>
    </div>

  )
}

export default hero
