import React, { useState } from 'react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

const Navbar = () => {
  const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
  const { activeSection, scrollTo } = useSmoothScroll(sections)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (section) => {
    scrollTo(section)
    setIsMenuOpen(false) // إغلاق القائمة بعد النقر
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="">
            <h2>MOHAMMED KHLIL</h2>
          </a>
        </div>
        {/* Desktop Navigation */}
        <div className="nav-links">
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('about')
            }}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('skills')
            }}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('projects')
            }}
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('experience')
            }}
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('contact')
            }}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('about')
            }}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('skills')
            }}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('projects')
            }}
          >
            Projects
          </a>
          <a 
            href="#experience" 
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('experience')
            }}
          >
            Experience
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('contact')
            }}
          >
            Contact
          </a>
        </div>
       
      </div>
    </nav>
  )
}

export default Navbar