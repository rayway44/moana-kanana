import {useEffect, useState} from 'react'
import React from 'react'
import TNavBar from '../TNavbar/TNavBar'
import './MainSectionP2.css'
import Profile from './Profilepic.png'
import axios from 'axios'

function MainSectionP2() {

  const [text, SetText] = useState([])
  useEffect(() => {
    axios.get("/gettext")
      .then((res) => {
        SetText(res.data);
      })
  }, []);
  
  return (
    <div>
        <div className='main-sectionp2-container'>
            <div className='main-sectionp2-holder'>
               <TNavBar /> 
                <div className='main-section-span'>
                <div id='skills-text'>
                DELIVER SKILLS WORKSHOP TO PACIFIC PEOPLE
                </div>
                <br/>
                <div id='improve-text'>
                Improve well-being, job prospects and quality of life 
                </div>
                
                </div> 
            </div>
            <div className='about-sectionp2-holder'>
                <div id='about-sectionp2-title'>About Us</div>
                <div id='about-img'><img src={Profile} alt='' />
                  
                </div>
                <div id='about-text' dangerouslySetInnerHTML={{ __html: (text.abouttext)}}>
                </div>
            </div>   

        </div>
    </div>
  )
}

export default MainSectionP2