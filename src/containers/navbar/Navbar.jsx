import React from 'react'
import './navbar.css'
import github from "../../assets/github.png"
import linkedIn from "../../assets/linkedIn.png"

const Navbar = () => {
  return (
    <div className="po__navbar">
        <div className="po__navbar-links">
            <div className="po__navbar-links__components">
              <p><a href="#home">Home</a></p>
              <p><a href="#about">About</a></p>
              <p><a href="#projects">Work</a></p>
              <p><a href="#contact">Contact</a></p>
            </div>
          
            <div className="po__navbar-links__ids">
              <a href="https://www.linkedin.com/in/ankit-aggrawal-615185205/" target="_blank">
                <img src={ linkedIn } alt="LinkedIn" className="po__navbar-links__ids-linkedIn" />
              </a>
              
              <a href="https://github.com/Ankitaggrawal" target="_blank">
              <img src={ github } alt="github" className="po__navbar-links__ids-github"/>
              </a>
              
            </div>

        </div>

        
    </div>
  )
}

export default Navbar