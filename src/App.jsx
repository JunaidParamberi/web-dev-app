
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './Components/Pages/About/About Page'
import Projects from './Components/Pages/Projects/Projects'
import Contact from './Components/Contact/Contact'
import './App.css'
import Home from './Home'
import Footer from './Components/footer/Footer'



function App() {

  
  


  return (
  <>
 
     <div className="container" >
  <Navbar/>
  
 <Routes>
  
  {/* <Route exact path='/portfolio/' element={<Home/>}></Route> */}
  <Route path='/' element={<Home/>}></Route>
  <Route exact path='/about'  element={<About/>}></Route>
  <Route exact path='/projects' element={<Projects/>}></Route>
  <Route exact path='/contact me' element={<Contact/>}></Route>

  </Routes>
  <Footer/>
  </div>
  
  </>
  )
}

export default App
