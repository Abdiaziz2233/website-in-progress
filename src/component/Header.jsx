import React from 'react'
import { NavLink } from 'react-router-dom/'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function Header() {
  return (
    <nav className="landing-div">
        <div>
          <Link to={"/"}>
            <img className='logo-img' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"} alt="" />
          </Link>
        </div>
        <div>
            <NavLink className="links" exact to="/">Home</NavLink>
            <NavLink className="links" exact to="/about">About Us</NavLink>
            <NavLink className="links" exact to="/services">Services</NavLink>
            <NavLink className="links" exact to="/contact-us">Contact Us</NavLink>
            <button id='btn-get-started'>Get Started</button>
        </div>
    </nav>
  )
}

export default Header
