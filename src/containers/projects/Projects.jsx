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
    <div className="po__projects" id="projects">
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
              Developed an intuitive and responsive user interface for the GPT-3
              powered application, ensuring seamless interaction and optimal
              user experience. Implemented cutting-edge frontend technologies,
              including HTML5, CSS, and JavaScript frameworks, to create a
              dynamic and visually appealing interface of GPT.
            </div>
            <div className="po__projects-cards__projectcard-text__links">
              <div className="code">
                <a
                  href="https://github.com/Ankitaggrawal/GPT-Website"
                  target="_blank"
                  className="code"
                >
                  <p>code</p>
                  <img src={github} alt="github" className="github" />
                </a>
              </div>
              <div className="live-demo">
                <a
                  href="https://gpt3-website-ankit-kumars-projects-3ee83ec7.vercel.app/"
                  target="_blank"
                  className="live-demo"
                >
                  <p>Live Demo</p>
                  <img src={external} alt="external" className="external" />
                </a>
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
              Real-estate-page-frontend , Building a responsive and dynamic real
              estate frontend with React to provide an immersive user
              experience. Leveraging React's component-based architecture for
              seamless integration and optimal performance.
            </div>
            <div className="po__projects-cards__projectcard-text__links">
              <div className="code">
                <a
                  href="https://github.com/Ankitaggrawal/real-estate-page-frontend"
                  target="_blank"
                  className="code"
                >
                  <p>code</p>
                  <img src={github} alt="github" className="github" />
                </a>
              </div>
              <div className="live-demo">
              <a
                  href="https://real-estate-page-frontend-ankit-kumars-projects-3ee83ec7.vercel.app/"
                  target="_blank"
                  className="live-demo"
                >
                  <p>Live Demo</p>
                  <img src={external} alt="external" className="external" />
                </a>
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
              Devloped a Restaurant responsive and dynamic Web page with ReactJS
              and Vanilla CSS, ensuring seamless interaction and appealing user
              experience.
            </div>
            <div className="po__projects-cards__projectcard-text__links">
              <div className="code">
                <a
                  href="https://github.com/Ankitaggrawal/modern-restaurant-website"
                  target="_blank"
                  className="code"
                >
                  <p>code</p>
                  <img src={github} alt="github" className="github" />
                </a>
              </div>
              <div className="live-demo">
              <a
                  href="https://modern-restaurant-website-ankit-kumars-projects-3ee83ec7.vercel.app/"
                  target="_blank"
                  className="live-demo"
                >
                  <p>Live Demo</p>
                  <img src={external} alt="external" className="external" />
                </a>
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
              The modern bank web application, powered by React and Tailwind
              CSS, offers a seamless and intuitive user experience. Its sleek
              interface and responsive design ensure efficient navigation and a
              visually appealing banking experience for users.
            </div>
            <div className="po__projects-cards__projectcard-text__links">
              <div className="code">
                <a
                  href="https://github.com/Ankitaggrawal/Modern_Bank_Web_Application"
                  target="_blank"
                  className="code"
                >
                  <p>code</p>
                  <img src={github} alt="github" className="github" />
                </a>
              </div>
              <div className="live-demo">
              <a
                  href="https://modern-bank-web-application-ankit-kumars-projects-3ee83ec7.vercel.app/"
                  target="_blank"
                  className="live-demo"
                >
                  <p>Live Demo</p>
                  <img src={external} alt="external" className="external" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
