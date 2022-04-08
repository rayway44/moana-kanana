import React, { useEffect } from 'react';
import TNavBar from '../TNavbar/TNavBar';
import '../MainSection/MainSectionP2.css';
import Profile from '../MainSection/MainSectionP2';
import ContentEditable from 'react-contenteditable';
import { useState } from 'react';
import axios from 'axios';



function CMSDashboard() {

  const [text, SetText] = useState([]);
  const [newtext, SetNewText] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/getText')
      .then((res) => {
        SetText(res.data);
        console.log(res.data)
      })
  }, []);

  const onSubmit = () => {
    axios.post("http://localhost:8081/updateAboutUsText", {
      text: newtext,
    })
      .then((response) => {
        console.log(response.status);
        console.log("successful");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const test = text;
  console.log(text)
  return (
    <div>
      <div className='main-sectionp2-container'>
        <div className='main-sectionp2-holder'>
          <TNavBar />
          <div className='main-section-span'>
            <div id='skills-text'>
              DELIVER SKILLS WORKSHOP TO PACIFIC PEOPLE
            </div>
            <br />
            <div id='improve-text'>
              Improve well-being, job prospects and quality of life
            </div>

          </div>
        </div>
        <div className='about-sectionp2-holder'>
          <div id='about-sectionp2-title'>About Us</div>
          <div id='about-img'><img src={Profile} alt='' />
          </div>
          <div id='about-text'>
            <ContentEditable
              html={test}
            // onChange={(e) => SetNewText(e.target.value)}
            // onBlur={onSubmit}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default CMSDashboard;