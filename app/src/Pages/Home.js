import React from 'react'
import '../App.css'
import Header from '../Components/Header'
import Nav from '../Components/NavBar'
import SectionOne from '../Components/SectionOne'
import SectionTwo from '../Components/SectionTwo'
import '../Components/css/Home.css'

export default function Home() {

  return (
    <div className="home-holder">
      <Header />
      <Nav />
      <SectionOne />
      <SectionTwo />
        Home project
        
    </div>
  )
}
