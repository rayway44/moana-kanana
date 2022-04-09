import "./css/SectionThreeLarge.css";
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function CommunityProjects() {

  const [currentTwo, setCurrentTwo] = useState('set current')
  const [currentThree, setCurrentThree] = useState('set current')
  
  useEffect(()=>{
    
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


  return (
    <>
      <div className="section-three">
        <div className="section-three-title">
          <span>COMMUNITY PROJECTS</span>
        </div>

        <div className="section-three-component">
          <div className="section-three-component-left">
            {/* image below */}
            <div className="section-three-circle1"></div>

          </div>
          <div className="section-three-component-right">
            <div className="section-three-project">
                <span className="section-three-project-title">NO PLACE LIKE HOME PROGRAM</span>
                <p className="section-three-project-content">
                  {currentTwo}
                </p>
                <div className="section-three-ready">READY TO GET STARTED</div>
              </div>
          </div> 
        </div>

        <div className="section-three-component">
          <div className="section-three-component-left">
            {/* image below */}
            <div className="section-three-circle2"></div>
            
          </div>
          <div className="section-three-component-right">
            <div className="section-three-project">
                <span className="section-three-project-title">PROJECT IKUNA PROGRAMME</span>
                <p className="section-three-project-content">
                {currentThree}
                </p>
                <div className="section-three-ready">READY TO GET STARTED</div>
              </div>
          </div> 
        </div>
      </div>
    </>
  );
}
