   
import React from 'react'
import Logo from './Logo.png'
import { Link } from 'react-router-dom'
import './TNavBar.css'

export default function TNavBar() {
  return (
    <div className="tnav-holder">
      <div className="tnav">

        <div className="tnav-left">
        <img src={Logo} alt='' />
          <div>
            <span className="tleft-title"><a href=' '>KANANA</a></span><br />
            Building Better Futures
          </div>
        </div>

        <div className="tnav-right">
          <div className="tnav-icon"><Link to='/'>Home</Link></div>
          <div className="tnav-icon"><a href=' '>About</a></div>
          <div className="tnav-icon"><a href=' '>Services</a></div>
          <div><a href=' '>Contact</a></div>
        </div>
      
      </div>
    </div>
  )
}