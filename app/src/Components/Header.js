import React from 'react'
import './css/Header.css'

export default function Header() {
  return (
    <div className="header-holder">
        <div className='header'>
            
            <div className='icon-one-left'>
                <img src='Images/Vector.png' alt="" />info@kanana.co.nz
            </div>
            <div className='icon-two-right'>
                <img src='Images/vector02.png' alt="" />021 572 353
            </div>

        </div>
    </div>
  )
}
