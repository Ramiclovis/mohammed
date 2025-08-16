import React, { useState, useEffect } from 'react'
import './App.css'

// Import components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import BackToTop from './components/BackToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for images and content
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // 2 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app">
      <LoadingSpinner loading={loading} />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
