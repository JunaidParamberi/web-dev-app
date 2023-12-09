
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Intro from './Components/Intro/Intro'
import ProjectsCard from './Components/ProjectsCard/ProjectsCard'
import CardData from './Components/ProjectsCard/Carddata'
import Clients from './Components/Clients/Clients'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/Footer'

import './App.css'

const projectCardDatas = CardData.map((card)=> {
  return <ProjectsCard key = {card.id} cards = {card}/>
})


function Home() {

  
  


  return (
  <div className='App'>
    <div className="container">

      {/* <Navbar/> */}
      
      <Hero/>
      <Intro/>
      <div className="project-component">
      <h6>Portfolio & Projects</h6> 
      <div className="project-cards-all">
        {projectCardDatas}
      </div>
      </div>
      <Clients/>
      <Contact/>
      <div className="footer"> 
      {/* <Footer/> */}
      </div>


    </div>
  </div>
  )
}

export default Home
