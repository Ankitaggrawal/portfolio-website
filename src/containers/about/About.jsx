import React from "react";
import "./about.css";
import html from "../../assets/pngegg (4).png";
import css from "../../assets/pngegg (3).png";
import js from "../../assets/pngegg (5).png";
import react from "../../assets/pngegg (7).png";
import tailwind from "../../assets/pngwing.com.png";
import git from "../../assets/pngegg (8).png";
import face from "../../assets/My project 2.png";
import pin from "../../assets/pngwing.com (1).png";

const About = () => {
  return (
    <div className="po__about" id="about">
      <div className="po__about-techstack">
        <div className="po__about-techstack__name">
          <p>Tech Stack</p>
        </div>
        <div className="po__about-techstack__tools">
          <img src={html} alt="HTML" className="html" />
          <img src={css} alt="CSS" className="css" />
          <img src={js} alt="js" className="js" />
          <img src={react} alt="React" className="react" />
          <img src={tailwind} alt="tailwind" className="tailwind" />
          <img src={git} alt="git" className="git" />
        </div>
      </div>
      <div className="po__about-aboutme">
        <div className="po__about-aboutme__catty">
          <img src={face} alt="XX" />
        </div>
        <div className="po__about-aboutme__text">
          <div className="po__about-aboutme__text-heading">About me</div>
          <div className="po__about-aboutme__text-subheading">
            <p>
              A dedicated Front-end web Developer based in Bangalore, India
              <img src={pin} alt="ll" />
            </p>
          </div>
          <div className="po__about-aboutme__text-dec">
            I'm a Junior Front-End Developer with an amazing toolkit of HTML,
            CSS, JavaScript, tailwind and ReactJs. Creating and managing
            user-friendly, responsive websites is what I love to
            do. enthusiastic about UI/UX. I have over a year of programming
            expertise with the HTML, CSS, JS, and ReactJS framework. I'm also
            now honing my NextJS skills. Along with being a good team player, I
            enjoy working with diverse teams to create amazing online web
            applications.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
