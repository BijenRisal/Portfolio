import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState(JSON.parse(localStorage.getItem('skills')) || []);

  useEffect(() => {
    const storedSkills = JSON.parse(localStorage.getItem('skills'));
    if (storedSkills) {
      setSkills(storedSkills);
    }
  }, []);

  return (
    <section id="skills">
      <span className="skill-title">My Expertise</span>
      <span className="skill-description">
        I am a skilled and passionate web designer and developer with beginner experience in software design and development.
      </span>
      <div className="skill-bars">
        {skills.map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="skillbar-text">
              {skill.file && <img src={skill.file} alt={skill.name} className="skill-icon" />}
              <h2>{skill.name}</h2>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
