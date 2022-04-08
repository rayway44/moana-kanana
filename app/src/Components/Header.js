import React from 'react'
import { useState, useEffect } from 'react';
import './css/Header.css'

export default function Header() {
  const [showLogin, setShowLogin] = useState('noLogin')
  const handleClick = (e) => {
    setShowLogin('showLogin')
    e.preventDefault()
  }
  const handleClickBack = () => {
    setShowLogin('noLogin')
  }
  return (
    <div className="header-holder">
      <div className='header'>

        <div className='icon-one-left'>
          <img src='Images/Vector.png' alt="" /><a href=' '>info@kanana.co.nz</a>
        </div>
        <div className='icon-two-right'>
          <img src='Images/vector02.png' alt="" /><a href=' '>021 572 353</a>
        </div>
        <div >
          <a className='login-icon' href=""><img src='Images/login-icon.png' alt="" onClick={handleClick} /></a>
        </div>
      </div>
      {showLogin === 'noLogin' && <div></div>}
      {showLogin === 'showLogin' &&
        <div className='login-module-container'>
          <img src='Images/login-logo.PNG' className='login-module-container-header-img' alt="" ></img>
          <form>
            <input placeholder='Username' className='login-module-container-input'></input>
            <input placeholder='Email' className='login-module-container-input'></input>
            <input placeholder='Password' className='login-module-container-input'></input>
            <button className='login-module-container-btn'>Login</button>
            <button className='login-module-container-btn-cancel' onClick={handleClickBack}>Cancel</button>
          </form>
        </div>
      }
    </div>
  )
}
