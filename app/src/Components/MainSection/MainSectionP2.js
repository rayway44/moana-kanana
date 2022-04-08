import axios from 'axios'
import {useEffect, useState} from 'react'
import React from 'react'
import TNavBar from '../TNavbar/TNavBar'
import './MainSectionP2.css'
import Profile from './Profilepic.png'

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
                The name Kanana is the Samoan word for Canaan, the country where the Israelite longed to move and live as free people. Those dreams, hopes and aspirations of the Israelite are similar to the ones our Pacific peoples have here in Aotearoa, who moved looking to build a new future for their families.
                <br/>
                <br/>
                
                Kanana Ltd. is a mentoring company offering adult training and project management services to the Paciific (Pasifika) communities in order to help them achieve a better life quality. Kanana’s two milestones are Project Ikuna, offering training for Pacific employers; and Project No Place Like Home, aimed at home ownership.
                <br/>
                <br/>
                
                Founder and CEO Isileli Saluni manages projects and mentoring programs himself, assuring high-quality training and effective results.
                <br/>
                <br/>
                Kanana’s mission is to help Pacific people build a better future with job prospects, education for their children and a high quality of life through programs devoted to financial management, basic computer skills, health, and well-being.
                CEO of Kanana Ltd. Isileli Saluni strongly believes that a strong work ethic with professional standards, loyalty, commitment and attention to detail are the basic ingredients of success.

                </div>
            </div>   

        </div>
    </div>
  )
}

export default MainSectionP2