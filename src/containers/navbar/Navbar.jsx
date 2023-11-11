import React from 'react'
import './navbar.css'
import github from "../../assets/github.png"
import linkedIn from "../../assets/linkedIn.png"

const Navbar = () => {
  return (
    <div className="po__navbar">
        <div className="po__navbar-links">
            <div className="po__navbar-links__components">
              <p><a href="">Home</a></p>
              <p><a href="">About</a></p>
              <p><a href="">Work</a></p>
              <p><a href="">Contact</a></p>
            </div>
          
            <div className="po__navbar-links__ids">
              <img src={ linkedIn } alt="LinkedIn" className="po__navbar-links__ids-linkedIn" />
              <img src={ github } alt="github" className="po__navbar-links__ids-github"/>
            </div>

        </div>

        
    </div>
  )
}

export default Navbar