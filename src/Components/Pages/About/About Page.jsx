import React from 'react'
import heroImage2 from "/src/Components/Images/hero-image-2.jpeg";
import Contact from '../../Contact/Contact';
import "./About Page.css"



function About() {

    
  return (
    <>
    <div className="about-me-page-container">
      <div className="about-me-container">
        <div className="text">

         <nav className="heading-text">
          <h1>About</h1> <h2>Me</h2>
         </nav>

          <p>
          Welcome to my creative world! I'm a versatile artist with a passion for visual storytelling.
           As a Graphic Designer, I transform ideas into stunning visuals that captivate and communicate. <br />
            My lens is my canvas, and as a Photographer, I freeze moments in time, turning them into unforgettable memories. 
            But that's just the beginning.I'm also an experienced Videographer, capturing emotions and narratives through my lens,
            and a skilled Video Editor who weaves together footage into cinematic masterpieces. <br />And to add a digital dimension to 
            my creativity, I'm a Web Developer, crafting interactive online experiences that bridge imagination and technology. 
            Every project I take on is a unique opportunity to blend artistry and innovation.
          </p>

        </div>

        <div className="about-me-image-part">
          <img src={heroImage2} alt="" />
        </div>
       </div>



    </div>
    <Contact/>
    </>
  )
}

export default About
