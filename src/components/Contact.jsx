import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submission:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">
            <span className="title-accent">Let's</span> Work Together
          </h2>
          <p className="section-subtitle">
            Ready to turn your vision into reality? I'm here to help you create something amazing.
          </p>
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-grid">
              <div className="contact-card location-card">
                <div className="card-background"></div>
                <div className="contact-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>
                    <span className="primary-info">Erbil, Iraq</span>
                    <span className="secondary-info">Available for Remote Work</span>
                  </p>
                </div>
              </div>

              <div className="contact-card phone-card">
                <div className="card-background"></div>
                <div className="contact-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Call Me</h4>
                  <p>
                    <span className="primary-info">+964 751 251 0983</span>
                    <span className="secondary-info">Available 9 AM - 6 PM</span>
                  </p>
                </div>
              </div>

              <div className="contact-card email-card">
                <div className="card-background"></div>
                <div className="contact-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-details">
                  <h4>Email Me</h4>
                  <p>
                    <span className="primary-info">mohammedalkhlil2005@gmail.com</span>
                    <span className="secondary-info">Ready for collaborations</span>
                  </p>
                </div>
              </div>


            </div>
          </div>

          <div className="contact-form-wrapper">
            <div className="form-container">
              <div className="form-header">
                <h3>Send Me a Message</h3>
                <p>Have a project in mind? Let's discuss how we can bring it to life.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <div className="input-border"></div>
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="input-border"></div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <div className="input-border"></div>
                </div>
                
                <div className="form-group">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project and how I can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                  ></textarea>
                  <div className="input-border"></div>
                </div>
                
                <button type="submit" className="submit-btn">
                  <span className="btn-text">Send Message</span>
                  <div className="btn-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                    </svg>
                  </div>
                  <div className="btn-background"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 