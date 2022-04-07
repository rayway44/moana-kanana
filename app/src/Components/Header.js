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

        </div>
    </div>
  )
}
