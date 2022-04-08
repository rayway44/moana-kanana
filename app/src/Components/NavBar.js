import React from 'react'
import './css/NavBar.css'

import { Link } from 'react-router-dom'


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
          
          <div className="nav-icon"><Link to='/about'>About</Link></div>
          
          <div className="nav-icon"><a href=' '>Services</a></div>
          <div><a href=' '>Contact</a></div>
        </div>
      
      </div>
    </div>
  )
}
