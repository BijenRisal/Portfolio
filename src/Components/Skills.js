import React from "react";
import HTML from "../Assets/html.png";
import UI from "../Assets/ui-ux.png";
import Reacts from "../Assets/react.png";
const Skills = () => {
    return (
        <section id="skills">
            <span className="skill-title">What I Do</span>
            <span className="skill-description">
                I am a skilled and passionate web designer with beginner experience in software development
            </span>
            <div className="skill-bars">
                <div className="skill-bar">
                    <div className="skillbar-text">
                        <img src={UI} alt="" className="" />
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="skillbar-text">
                        <img src={HTML} alt="P" className="" />
                        <h2>HTML/CSS</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
                <div className="skill-bar">
                    <div className="skillbar-text">
                        <img src={Reacts} alt="" className="" />
                        <h2>React</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
