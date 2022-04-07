import React from 'react'
import './css/NavBar.css'

import { Link } from 'react-router-dom'
import About from '../Pages/About'

export default function NavBar() {
  return (
    <div className="nav-holder">
      <div className="nav">

        <div>
        <a href=' 'className="nav-left"><img src='Images/Rectangle-4.png' alt='' />
          <div>
            <span className="left-title">KANANA</span><br />
            Building Better Futures
          </div></a>
        </div>

        <div className="nav-right">
          <div className="nav-icon"><a href=' '>Home</a></div>
          <Link to='/about'>
          <div className="nav-icon"><a href=' '>About</a></div>
          </Link>
          <div className="nav-icon"><a href=' '>Services</a></div>
          <div><a href=' '>Contact</a></div>
        </div>
      
      </div>
    </div>
  )
}
