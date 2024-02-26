import React from 'react'

function Services() {
  return (
    <div className="App">
        <header>
          <h1>Our Software Services</h1>
        </header>
        <section className="services">
          <div className="service">
            <h2>Web Development</h2>
            <p>We specialize in creating modern, responsive websites tailored to your needs. Our team of experts utilizes the latest technologies to deliver high-quality web solutions.</p>
          </div>
          <div className="service">
            <h2>Mobile App Development</h2>
            <p>Need a mobile app for your business? We've got you covered. From concept to deployment, we develop custom mobile applications for iOS and Android platforms.</p>
          </div>
          <div className="service">
            <h2>UI/UX Design</h2>
            <p>User experience is paramount in today's digital landscape. Our designers craft intuitive interfaces that enhance usability and engage your audience.</p>
          </div>
        </section>
      </div>
  )
}

export default Services
