import React from "react";
import "./projects.css";

import github from "../../assets/github.png";
import external from "../../assets/external-link.gif";
import gpt3 from "../../assets/gpt3.png";
import realstate from "../../assets/realstate.png";
import restaurant from "../../assets/restaurant.png";
import banking from "../../assets/banking.png";


const Projects = () => {
  return (
    <div className="po__projects">
      <div className="po__projects-head">
        <div className="po__projects-head__heading">Projects</div>
        <div className="po__projects-head__subheading">
          Projects and ideas I’ve worked on
        </div>
      </div>
      <div className="po__projects-cards">
        <div
          className="po__projects-cards__projectcard"
          id="po__projects-card1"
        >
          <div className="po__projects-cards__projectcard-img">
            <img src={gpt3} alt="gpt3" />
          </div>
          <div className="po__projects-cards__projectcard-text">
            <div className="po__projects-cards__projectcard-text__heading">
              GPT3
            </div>
            <div className="po__projects-cards__projectcard-text__subheading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took
            </div>
            <div className="po__projects-cards__projectcard-text__links">
              <div className="code">
                <p>code</p>
                <img src={github} alt="github" className="github" />
              </div>
              <div className="live-demo">
                <p>Live Demo</p>
                <img src={external} alt="external" className="external" />
              </div>
            </div>
          </div>
        </div>


        <div
          className="po__projects-cards__projectcard"
          id="po__projects-card2"
        >
                    <div className="po__projects-cards__projectcard-img">
            <img src={realstate} alt="realstate" />
          </div>
          <div className="po__projects-cards__projectcard-text">
            <div className="po__projects-cards__projectcard-text__heading">
              REAL STATE
            </div>
            <div className="po__projects-cards__projectcard-text__subheading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took
            </div>
            <div className="po__projects-cards__projectcard-text__links">
              <div className="code">
                <p>code</p>
                <img src={github} alt="github" className="github" />
              </div>
              <div className="live-demo">
                <p>Live Demo</p>
                <img src={external} alt="external" className="external" />
              </div>
            </div>
          </div>
        </div>


        <div
          className="po__projects-cards__projectcard"
          id="po__projects-card3"
        >
                    <div className="po__projects-cards__projectcard-img">
            <img src={restaurant} alt="restaurant" />
          </div>
          <div className="po__projects-cards__projectcard-text">
            <div className="po__projects-cards__projectcard-text__heading">
            RESTAURANT
            </div>
            <div className="po__projects-cards__projectcard-text__subheading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took
            </div>
            <div className="po__projects-cards__projectcard-text__links">
              <div className="code">
                <p>code</p>
                <img src={github} alt="github" className="github" />
              </div>
              <div className="live-demo">
                <p>Live Demo</p>
                <img src={external} alt="external" className="external" />
              </div>
            </div>
          </div>
        </div>


        <div
          className="po__projects-cards__projectcard"
          id="po__projects-card4"
        >
                    <div className="po__projects-cards__projectcard-img">
            <img src={banking} alt="banking" />
          </div>
          <div className="po__projects-cards__projectcard-text">
            <div className="po__projects-cards__projectcard-text__heading">
              BANKING
            </div>
            <div className="po__projects-cards__projectcard-text__subheading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took
            </div>
            <div className="po__projects-cards__projectcard-text__links">
              <div className="code">
                <p>code</p>
                <img src={github} alt="github" className="github" />
              </div>
              <div className="live-demo">
                <p>Live Demo</p>
                <img src={external} alt="external" className="external" />
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Projects;
