import React from 'react'
import './css/Header.css'

export default function Header() {
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
          <a className='login-icon' href=""><img src='Images/login-icon.png' alt="" /></a>
        </div>
      </div>
      <div className='login-module-container'>

        <img src='Images/login-logo.PNG' className='login-module-container-header-img' ></img>

        <form>
          <input placeholder='Username' className='login-module-container-input'></input>
          <input placeholder='Email' className='login-module-container-input'></input>
          <input placeholder='Password' className='login-module-container-input'></input>
          <button className='login-module-container-btn'>Login</button>
          <button className='login-module-container-btn'>Cancel</button>
        </form>
      </div>
    </div>
  )
}
