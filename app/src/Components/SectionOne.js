import React from 'react'
import './css/SectionOne.css'

export default function SectionOne() {
  return (
    <div className="section-one">
        <div className="section-one-holder-top">
            <div className="section-one-left">
                <div className="section-one-left-top-title">Empowering<br />
                    People with<br />
                    essential<br />
                    life skills
                </div>
                
                <br />

                <div className="section-one-left-bottom-title">
                    Improve well-being,<br />
                    job prospects and<br />
                    quality of life
                </div>

            </div>
            <div className="section-one-right">
                <div className="section-one-right-top">   
                    <div className="section-one-right-icon01">
                        <img src="Images/Icon01.png" alt=''/><br />
                        ADULT<br />
                        TRAINING
                    </div>
                    <div className="section-one-right-icon02">
                        <img src="Images/Icon02.png" alt=''/><br />
                        PROJECT <br />
                        MANAGEMENT
                    </div>
                </div>
                <div className="section-one-right-bottom">
                    <img src="Images/BgPacificPattern02.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
