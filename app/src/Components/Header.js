import axios from 'axios';
import React from 'react'
import { useState} from 'react';
import './css/Header.css'

export default function Header() {
  const [showLogin, setShowLogin] = useState('noLogin')

  // const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')





  // const username = document.getElementById('login-username')
  // const email = document.getElementById('login-email')
  // const password = document.getElementById('login-password')

  // const loginObject = {
  //   username: username,
  //   email: email,
  //   password: password
  // }
  const checkCredentials = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8081/adminLogin`, {
      // username: username,
      email: email,
      password: password
    })
      .then((res) => {
        const response = res.data
        if (response === true) {
          window.location.href = "http://localhost:3000/dashboard";
        } else {
          alert('Incorrect credentials please try again.')
        }


      })
      .catch((err) => {
        console.log(err);
        console.log('logins failed')
      });

  };

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
          <a className='login-icon' href=" "><img src='Images/login-icon.png' alt="" onClick={handleClick} /></a>
        </div>
      </div>
      {showLogin === 'noLogin' && <div></div>}
      {showLogin === 'showLogin' &&
        <div className='login-module-container'>
          <img src='Images/login-logo.PNG' className='login-module-container-header-img' alt="" ></img>
          <form>
            {/* <input required id='login-username' placeholder='Username' className='login-module-container-input' onChange={(e) => { setUsername(e.target.value) }}></input> */}
            <input required id='login-email' placeholder='Email' className='login-module-container-input' onChange={(e) => { setEmail(e.target.value) }}></input>
            <input required type="password" id='login-password' placeholder='Password' className='login-module-container-input' onChange={(e) => { setPassword(e.target.value) }}></input>
            <button className='login-module-container-btn' onClick={checkCredentials}>Login</button>
            <button className='login-module-container-btn-cancel' onClick={handleClickBack}>Cancel</button>
          </form>
        </div>
      }
    </div>
  )
}
