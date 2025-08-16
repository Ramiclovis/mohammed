import React from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      position: "Full-Stack Developer",
      company: "Freelance",
      period: "October 2022 - Present",
      description: "Providing comprehensive web development services to clients, building modern web applications using React, PHP Laravel, and MySQL."
    },
    {
      id: 2,
      position: "Translator",
      company: "VTS Organization",
      period: "September 2020 - Present",
      description: "Helping clients with their daily needs and providing them with the best possible service."
    },
   
    {
      id: 4,
      position: "Marketing",
      company: "DMK",
      period: "December 2025 - Present",
      description: "Providing excellent customer service and support, handling customer inquiries and resolving issues efficiently."
    }
  ]

  const education = [
    {
      degree: "Information Technology (IT)",
      school: "Cis College",
      period: "July 2021",
      description: "Focused on information technology, computer systems, and modern web technologies."
    },

    {
      degree: "English Language",
      school: "Cambridge College",
      period: "July 2021",
      description: "Focused on English language and communication skills."
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <p className="section-subtitle">
          My professional journey and educational background
        </p>

        {/* Work Experience */}
        <div className="experience-section">
          <h3 className="subsection-title">
            <span className="icon">💼</span>
            Work Experience
          </h3>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4 className="position">{exp.position}</h4>
                    <span className="period">{exp.period}</span>
                  </div>
                  <h5 className="company">{exp.company}</h5>
                                     <p className="description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="experience-section">
          <h3 className="subsection-title">
            <span className="icon">🎓</span>
            Education
          </h3>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h4 className="position">{edu.degree}</h4>
                    <span className="period">{edu.period}</span>
                  </div>
                  <h5 className="company">{edu.school}</h5>
                  <p className="description">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

     
      </div>
    </section>
  )
}

export default Experience 