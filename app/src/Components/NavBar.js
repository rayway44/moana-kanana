import React from 'react'
import './css/NavBar.css'

import { Link } from 'react-router-dom'
import About from '../Pages/About'

export default function NavBar() {
  return (
    <div className="nav-holder">
      <div className="nav">

        <div className="nav-left">
          <img src='Images/Rectangle-4.png' alt='' />
          <div>
            <span className="left-title">KANANA</span><br />
            Building Better Futures
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-icon">Home</div>
          <Link to='/about'>
          <div className="nav-icon">About</div>
          </Link>
          <div className="nav-icon">Services</div>
          <div className="nav-icon">Contact</div>
        </div>
      
      </div>
    </div>
  )
}
