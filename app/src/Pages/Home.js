import React from 'react'
import '../App.css'
import Header from '../Components/Header'
import Nav from '../Components/NavBar'
import SectionOne from '../Components/SectionOne'
import SectionTwo from '../Components/SectionTwo'
import SectionThree from '../Components/SectionThree'

export default function Home() {

  return (
    <div className="page-holder">
      <Header />
      <Nav />
      <SectionOne />
      <SectionTwo />
        Home project
        
    </div>
  )
}
