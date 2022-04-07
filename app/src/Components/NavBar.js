import React from 'react'
import './css/NavBar.css'

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
          <div className="nav-icon">About</div>
          <div className="nav-icon">Services</div>
          <div>Contact</div>
        </div>
      
      </div>
    </div>
  )
}
