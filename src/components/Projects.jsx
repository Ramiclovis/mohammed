import React, { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Frontend', 'Backend', 'E-commerce', 'POS System']

  const projects = [
    {
      id: 1,
      title: "Troy Gate",
      category: "Frontend",
      description: "Troy Gate General Trading and Logistics Company - Comprehensive business website providing integrated solutions in trade, construction, and contracting with multilingual support.",
      image: "/images/projects/1.webp",
      technologies: ["Bootstrap", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://troygate.com/",
      status: "Live"
    },
    {
      id: 2,
      title: "Vuitton Salons",
      category: "Frontend",
      description: "Full-service salon and barbershop in Glenview offering haircuts, customized hair color, and luxury beauty services with high-end products.",
      image: "/images/projects/2.webp",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://vuittonsalons.com/",
      status: "Live"
    },
   
  
   
    {
      id: 6,
      title: "Right Choice",
      category: "Backend",
      description: "Real estate company specializing in finding perfect homes and investment properties in Dubai and Iraq. Features property listings, off-plan properties, secondary properties, and expert guidance for clients.",
      image: "/images/projects/10.webp",
      technologies: ["HTML", "JavaScript", "Laravel", "CSS", "Bootstrap"],
      liveUrl: "https://rightchoiceco.com/",
      status: "Live"
    },
    {
      id: 7,
      title: "Print Hub",
      category: "E-commerce",
      description: "Professional printing services company specializing in exceptional print solutions. Features business cards, brochures, custom packaging, large-format banners, promotional materials, and innovative printing technology.",
      image: "/images/projects/9.webp",
      technologies: ["HTML", "JavaScript", "Laravel", "CSS", "Bootstrap"],
      liveUrl: "https://printhubdesign.com/",
      status: "Live"
    },
    {
      id: 8,
      title: "HR Systems",
      category: "POS System",
      description: "Comprehensive Human Resources management system designed to streamline HR operations. Features employee management, payroll processing, attendance tracking, performance evaluation, and administrative workflows.",
      image: "/images/projects/3.webp",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      liveUrl: "#",
      status: "Completed"
    },
    {
      id: 9,
      title: "Pharmacy System",
      category: "POS System",
      description: "Advanced pharmacy management system designed to streamline pharmaceutical operations. Features inventory management, prescription processing, sales tracking, customer records, and automated billing workflows.",
      image: "/images/projects/4.webp",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      liveUrl: "#",
      status: "Completed"
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category && project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A showcase of my recent work and creative solutions
        </p>

        {/* Filter Buttons */}
        <div className="projects-filters">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-status">
                  <span className={`status-badge ${project.status.toLowerCase()}`}>
                    <span className="status-dot"></span>
                    {project.status}
                  </span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link live-link" 
                      aria-label="View Live Website"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github-link" 
                        aria-label="View Source Code"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.category && <span className="category-badge">{project.category}</span>}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        <span className="tech-icon">⚡</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="action-btn primary-btn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Visit Site
                    </a>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="action-btn secondary-btn"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 