import React from "react";
import "./main.css";
import vector from "../../assets/Vector.png";

const main = () => {
  return (
    <div className="po__main">

      <div className="po__main-text">
        <p className="po__main-heading">
          Hi, I’m <span>Ankit Kumar Aggrawal</span>
        </p>
        <p className="po__main-subheading">
          A front-end web Developer and UI/UX designer
        </p>
        <div className="po__main-buttons">
          <button>See my Resume</button>
          <button>Get in touch</button>
        </div>
      </div>

      <div className="po__main-illus">
        <img src={vector} alt="vector" />
      </div>

    </div>
  );
};

export default main;
