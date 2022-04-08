import React from 'react'

import './FormSectionP2.css'

function FormSectoinP2() {
  return (
    <div>
        <div className='form-container'>
            <div className='form-holder'>
                <div className='form-left'>
                   <div id='talanoa'>LET'S TALANOA</div>
                   <div id='talanoa-text'>If you are looking forward to achieve home ownership for a better future and you have no idea where to start from; or you’re an employer who wants to give their workers tools and skills to improve their efficiency; or if you simply want to learn more about Kanana, get in touch! Fill the contact form and we’ll get back to you.</div> 
                </div>

            
                <div className='form-right'>
                        <form className="form-right-content">
                            <input
                                placeholder="Full Name"
                                className="footer-container-right-content-form-input"
                            ></input>
                            <input
                                placeholder="Email"
                                className="footer-container-right-content-form-input"
                            ></input>
                            <input
                                placeholder="Mobile"
                                className="footer-container-right-content-form-input"
                            ></input>
                            <textarea
                                placeholder="Notes"
                                className="footer-container-right-content-form-text-area"
                                rows="10"
                            ></textarea>
                            <button className="footer-container-right-content-form-submit-btn">Submit</button>
                        </form>

                     </div>
            </div>
        </div>
    </div>
  )
}

export default FormSectoinP2