import React from 'react'
import img from "../teamphoto.jpg"

function About() {
  return (
    <div className="App">
      <header>
        <h1>About Us</h1>
      </header>
      <section className="about-us">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>We are a team of passionate individuals dedicated to delivering high-quality software solutions to our clients.</p>
        </div>
        <div className="about-image">
          <img src={img} alt="Our Team" />
        </div>
      </section>
    </div>
  )
}

export default About
