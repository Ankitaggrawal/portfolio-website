import React from "react";
import "./main.css";
import vector from "../../assets/Vector.png";

const main = () => {
  return (
    <div className="po__main" id="home">

      <div className="po__main-text">
        <p className="po__main-heading">
          Hi, I’m <span>Ankit Kumar Aggrawal</span>
        </p>
        <p className="po__main-subheading">
          A front-end web Developer and UI/UX designer
        </p>
        <div className="po__main-buttons">
          <button>See my Resume</button>
          <button>
          <a href="#contact">Get in touch</a>
          </button>
        </div>
      </div>

      <div className="po__main-textMobile">
        <div className="po__main-headingMobile">
          <div>Hi, I’m </div>
          <div className="aj">Ankit Kumar Aggrawal</div>
        </div>
        <p className="po__main-subheadingMobile">
          A front-end web Developer and UI/UX designer
        </p>
        <div className="po__main-buttonsMobile">
          <button>
          <a href="https://github.com/Ankitaggrawal">GitHub</a>
          </button>
          <button>
          <a href="#contact">Get in touch</a>
          </button>
        </div>
      </div>

      <div className="po__main-illus">
        <img src={vector} alt="vector" />
      </div>

    </div>
  );
};

export default main;
