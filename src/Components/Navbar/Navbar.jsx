import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav>
          <ul>
            <li><NavLink to="/">SBHR</NavLink></li>
            <li><NavLink to="/hyderabad">Hyderabad</NavLink></li>
            <li><NavLink to="/guntur">Guntur</NavLink></li>
            <li><NavLink to="/bangalore">Bangalore</NavLink></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar;