import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Formats from './pages/Formats'
import HowItWorks from './pages/HowItWorks'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen bg-transparent transition-colors duration-300'>
      <Navbar/>
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/formats' element={<Formats/>} />
          <Route path='/how-it-works' element={<HowItWorks/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
