import React from 'react'
import "./Hero.css"
import heroOverlay from '../Images/Rectangle 9.png';
import heroImage from '../Images/Hero-image.png';
function Hero() {
    return (
        <div className='hero-container'>
      <section className='hero-section'>
        <div className="text">
        
                <h1>Designing </h1>
                <div className="text2">
                 <h2>&</h2> 
                <h1>Deploying</h1>
                </div>
                 <h1>Things</h1>
               
                <h3 className='button'>Get in touch</h3>
        </div>
        <div className="image-section">
        <div className="image">
            <div className="hero-image"> <img src={heroImage} alt="" /></div>
            <div className="top-rectangle">
            <div className="rectangle1"></div>
            <div className="rectangle2"></div>
            </div>
            <div className="rectangle3"></div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
