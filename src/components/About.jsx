import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
              I am a full-stack developer dedicated to creating software solutions that support small businesses. I have experience in front-end and back-end development and constantly strive to learn new technologies. I enjoy working in teams to bring innovative ideas to life and help small businesses grow.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="/images/about/1.jpg" 
              alt="MOHAMMED KHLIL - Full Stack Developer"
            />
          </div>
        </div>

      
      </div>
    </section>
  )
}

export default About 