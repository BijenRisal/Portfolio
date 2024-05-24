import React from "react";
import HTML from "../Assets/html.png";
import UI from "../Assets/ui-ux.png";
import Reacts from "../Assets/react.png";


const Skills = () => {
  return (
    <section id="skills">
      <span className="skill-title">My Expertise</span>
      <span className="skill-description">
        I am a skilled and passionate web designer and developer with the beginner experience in software design and development.
      </span>
      <div className="skill-bars">
        <div className="skill-bar">
          <div className="skillbar-text">
            <img src={UI} alt="UI/UX" className="skill-icon" />
            <h2>UI/UX Design</h2>
           
          </div>
        </div>
        <div className="skill-bar">
          <div className="skillbar-text">
            <img src={HTML} alt="HTML/CSS" className="skill-icon" />
            <h2>HTML/CSS</h2>
           
          </div>
        </div>
        <div className="skill-bar">
          <div className="skillbar-text">
            <img src={Reacts} alt="React" className="skill-icon" />
            <h2>React</h2>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;