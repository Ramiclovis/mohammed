import { useState, useEffect, useCallback } from 'react'
import { scrollToElement, getCurrentSection } from '../utils/smoothScroll'

/**
 * Custom hook for smooth scrolling functionality
 * @param {Array} sections - Array of section IDs to track
 * @param {number} offset - Offset from the top (default: 80px for navbar)
 * @returns {Object} - Object containing scroll functions and current section
 */
export const useSmoothScroll = (sections = [], offset = 80) => {
  const [activeSection, setActiveSection] = useState(sections[0] || 'home')

  // Scroll to a specific section
  const scrollTo = useCallback((sectionId) => {
    scrollToElement(sectionId, offset)
    setActiveSection(sectionId)
  }, [offset])

  // Update active section based on scroll position
  useEffect(() => {
    if (sections.length === 0) return

    const handleScroll = () => {
      const currentSection = getCurrentSection(sections, offset)
      setActiveSection(currentSection)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', throttledHandleScroll)
  }, [sections, offset])

  return {
    activeSection,
    scrollTo,
    setActiveSection
  }
}

/**
 * Custom hook for back to top functionality
 * @param {number} threshold - Scroll threshold to show the button (default: 300px)
 * @returns {Object} - Object containing visibility state and scroll to top function
 */
export const useBackToTop = (threshold = 300) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > threshold)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledToggleVisibility = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          toggleVisibility()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledToggleVisibility, { passive: true })
    
    return () => window.removeEventListener('scroll', throttledToggleVisibility)
  }, [threshold])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return {
    isVisible,
    scrollToTop
  }
}