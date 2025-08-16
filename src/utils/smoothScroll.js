/**
 * Smooth scroll utility functions
 */

/**
 * Smoothly scroll to a specific element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Offset from the top (default: 80px for navbar)
 * @param {string} behavior - Scroll behavior (default: 'smooth')
 */
export const scrollToElement = (elementId, offset = 80, behavior = 'smooth') => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: behavior
    })
  }
}

/**
 * Smoothly scroll to the top of the page
 * @param {string} behavior - Scroll behavior (default: 'smooth')
 */
export const scrollToTop = (behavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    behavior: behavior
  })
}

/**
 * Get the currently visible section based on scroll position
 * @param {Array} sections - Array of section IDs to check
 * @param {number} offset - Offset from the top (default: 80px for navbar)
 * @returns {string} - The ID of the currently visible section
 */
export const getCurrentSection = (sections, offset = 80) => {
  let currentSection = sections[0] || 'home'
  
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= offset && rect.bottom >= offset) {
        currentSection = section
        break
      }
    }
  }
  
  return currentSection
}

/**
 * Add smooth scroll behavior to all anchor links on the page
 */
export const initializeSmoothScroll = () => {
  // Add click event listeners to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href').substring(1)
      scrollToElement(targetId)
    })
  })
}