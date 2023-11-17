import React from 'react'
import "./contact.css";
import email from '../../assets/email.png'

const Contact = () => {
  return (
    <div className="po__contact" id='contact'>
        <div className="po__contact-text">
            <p>LET<span>'</span>S W<span>O</span>RK T<span>O</span>GETHER</p>
        </div>
        <div className="po__contact-links">
            <div className="po__contact-links__email">
                <a href="mailto:akaggrawal4252@gmail.com">
                <img src={email} alt="email" className='email'/>
                <p>akaggrawal4252.gmail.com</p>
                </a>
            </div>
            <div className="po__emain-links__social">

            </div>
        </div>
    </div>
  )
}

export default Contact