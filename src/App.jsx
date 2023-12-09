
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
     <div className="container">
  <Navbar/>
 <Routes>
  <Route path='/web-dev-app/' element={<Home/>}></Route>
  <Route path='/about'  element={<About/>}></Route>
  <Route path='/projects' element={<Projects/>}></Route>
  <Route path='/contact me' element={<Contact/>}></Route>

  </Routes>

  </div>
  <Footer/>
  </>
  )
}

export default App
