import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='father-nav'>
      <ul className='list-nav'>
        <li><Link className='items-link item-home' to="/">Home</Link></li>
        <li><Link className='items-link' to="/about">About</Link></li>
        <li><Link className='items-link' to="/projects">Projects</Link></li>
        <li> <Link className='items-link' to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
