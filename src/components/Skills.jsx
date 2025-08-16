import React from 'react'

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 85, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "🟨" },
        { name: "HTML & CSS", level: 95, icon: "🌐" },
        { name: "Bootstrap", level: 90, icon: "🅱️" },
        { name: "jQuery & Ajax", level: 85, icon: "🔄" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "PHP Laravel", level: 95, icon: "🚀" },
        { name: "PHP", level: 90, icon: "🐍" },
        { name: "MySQL", level: 90, icon: "🟢" },
      ]
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with to bring ideas to life
        </p>
        
        <div className="skills-grid">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
       
      </div>
    </section>
  )
}

export default Skills 