import React from 'react'
import './css/SectionTwo.css'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function SectionTwo() {

  const [currentOne, setCurrentOne] = useState('set current')
  
  useEffect(()=>{
    axios.get(`http://localhost:5000/pullOne`)
    .then(res => {
      const response = res
      console.log(response.data.contents)
      setCurrentOne(`${response.data.contents}`)
    })
  },[])

  return (
    <div className="section-two-main">
      <div className='section-two-holder'>
        <div className='section-two-top'>
            
              <div className='section-two-one'>
                <img src="Images/BgPacificPattern01.png" alt="" />
              </div>
            
              <div className='section-two-title'>
            WHO WE ARE
            </div>
            <div className='section-two-three'>
            
            </div>
        </div>
        <div className='section-two-content' >
        {currentOne}
        </div>
      </div>

        <div className='section-two-bottom-img-holder'>
          <div className='section-two-bottom-img-one'>
          <img src="Images/BgPacificPattern03.png" alt="" />
          </div>
          <div className='section-two-bottom-img-two'>
          <img src="Images/BgPacificPattern04.png" alt="" />
          </div>
        </div>
    </div>
  )
}
