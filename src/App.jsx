import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Service from './Components/Service'
import Projects from './Components/Projects'
import Context from './Components/Context'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Projects/>
      <Context/>
      <Footer/>
    </div>
  )
}

export default App