import React, { useEffect } from 'react';
import TNavBar from '../TNavbar/TNavBar';
import '../MainSection/MainSectionP2.css';
// import Profile from '../MainSection/MainSectionP2';
// import ContentEditable from 'react-contenteditable';
import { useState } from 'react';
import axios from 'axios';



function CMSDashboard() {

  const [inputOne, setInputOne] = useState('')
  const [outputOne, setOutputOne] = useState('')
  const [currentOne, setCurrentOne] = useState('set current')
  
  const [inputTwo, setInputTwo] = useState('')
  const [outputTwo, setOutputTwo] = useState('')
  const [currentTwo, setCurrentTwo] = useState('set current')

  const [inputThree, setInputThree] = useState('')
  const [outputThree, setOutputThree] = useState('')
  const [currentThree, setCurrentThree] = useState('set current')
  
  useEffect(()=>{
    axios.get(`http://localhost:5000/pullOne`)
    .then(res => {
      const response = res
      console.log(response.data.contents)
      setCurrentOne(`${response.data.contents}`)
    })

    axios.get(`http://localhost:5000/pullTwo`)
    .then(res => {
      const response = res
      console.log(response.data)
      setCurrentTwo(`${response.data}`)
    })

    axios.get(`http://localhost:5000/pullThree`)
    .then(res => {
      const response = res
      console.log(response.data)
      setCurrentThree(`${response.data}`)
    })


  },[])

  function pullOne(e){
    e.preventDefault()
    const content = inputOne
    axios.get(`http://localhost:5000/updateOne/${content}`)
    .then(res => {
      const response = res
      console.log(response)
      setOutputOne(response.data)
    })
    console.log('HITTING CLICK FUNCTION')
  }


  function pullTwo(e){
    e.preventDefault()
    const content = inputTwo
    axios.get(`http://localhost:5000/updateTwo/${content}`)
    .then(res => {
      const response = res
      console.log(response)
      setOutputTwo(response.data)
    })
    console.log('HITTING CLICK FUNCTION')
  }

  function pullThree(e){
    e.preventDefault()
    const content = inputThree
    axios.get(`http://localhost:5000/updateThree/${content}`)
    .then(res => {
      const response = res
      console.log(response)
      setOutputThree(response.data)
    })
    console.log('HITTING CLICK FUNCTION')
  }

  return (
    <div>
      <div className='dashboard-container'>
        <div className='main-sectionp2-holder'>
          <TNavBar />
          <div className='main-section-span'>
            <div id='skills-text' >
            DELIVER SKILLS WORKSHOP TO PACIFIC PEOPLE
            </div>
            <br />
            <div id='improve-text'>
              Improve well-being, job prospects and quality of life
            </div>
          </div>
        </div>
        <div className='about-sectionp2-holder'>

          <div className='dashboard-holder'>
            <div id='about-sectionp2-title'>
              Who we are
            </div>
            <div>
              <textarea placeholder={currentOne} onChange={e => setInputOne(e.target.value)} className='dashboard-textarea' ></textarea>
            </div>
            <div onClick={pullOne} className='dashboard-submit-button'>
              SUBMIT
            </div>
            <div className="change-text">
            <span className='default-text'>Default text:</span> Kanana Ltd. is a mentoring company offering adult training and project management services to the Paciific (Pasifika) communities in order to help them achieve a better life quality. Kanana’s two milestones are Project Ikuna, offering training for Pacific employers; and Project No Place Like Home, aimed at home ownership.
            </div>
            <div className="change-text">
            {outputOne}
            </div>
          </div>
          
          <div className='dashboard-holder'>
            <div id='about-sectionp2-title'>
              Community Project Brief one
            </div>
            <div>
              <textarea placeholder={currentTwo} onChange={e => setInputTwo(e.target.value)} className='dashboard-textarea' ></textarea>
            </div>
            <div onClick={pullTwo} className='dashboard-submit-button'>
              SUBMIT
            </div>
            <div className="change-text">
            <span className='default-text'>Default text:</span> A four-step programme that will help, educate, assist and support families throughout the home ownership process. The programme includes financial skills learning; budget management; home loan application and other financing options to purchase a home; and post purchase assistance and mentoring, including advice about financial obligations, house maintenance and more.
            </div>
            <div className="change-text">
            {outputTwo}
            </div>
          </div>

          <div className='dashboard-holder'>
            <div id='about-sectionp2-title'>
              Community Project Brief two
            </div>
            <div>
              <textarea placeholder={currentThree} onChange={e => setInputThree(e.target.value)} className='dashboard-textarea' ></textarea>
            </div>
            <div onClick={pullThree} className='dashboard-submit-button'>
              SUBMIT
            </div>
            <div className="change-text">
            <span className='default-text'>Default text:</span> Designed to support Pacific workers in low-skilled jobs, this programme aims at giving them useful tools and strategies to improve their abilities and move toward higher level jobs. They will learn about financial management including budgeting and goal setting; and digital skills. As a result, employers will have increased productivity and a future-ready, skilled, engaged, motivated and effective staff.
            </div>
            <div className="change-text">
            {outputThree}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CMSDashboard;