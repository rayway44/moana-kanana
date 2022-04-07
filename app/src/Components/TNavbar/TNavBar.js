   
import React from 'react'
import Logo from './Logo.png'
import './TNavBar.css'

export default function TNavBar() {
  return (
    <div className="tnav-holder">
      <div className="tnav">

        <div className="tnav-left">
          <img src={Logo} alt='' />
          <div>
            <span className="tleft-title">KANANA</span><br />
            Building Better Futures
          </div>
        </div>

        <div className="tnav-right">
          <div className="tnav-icon">Home</div>
          <div className="tnav-icon">About</div>
          <div className="tnav-icon">Services</div>
          <div>Contact</div>
        </div>
      
      </div>
    </div>
  )
}