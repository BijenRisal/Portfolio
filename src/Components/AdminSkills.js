import React from "react";
import { Link } from "react-router-dom";
import DeleteSkillButton from "./AdminControl/DeleteSkillButton";
import UploadCV from "./AdminControl/UploadCV";


const AdminSkills = ({ skills, deleteSkill }) => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className="sidebar">
        
        <Link to="/uploadcv"><button>Upload CV</button></Link>
        <Link to="/adminskills"><button>Skills</button></Link>
        <Link to="/addworks"><button>Works</button></Link>
        <Link to="/addclients"><button>Clients</button></Link>
        <Link to="/"><button>Log Out</button></Link>
      </div>
      {/* Content */}
      <div className="content">
        <h1>My Skills</h1>
        <Link to="/addskills"><button className="add-skill-btn">Add Skill</button></Link>
        <table className="skills-table">
          <thead>
            <tr>
              <th>Icon</th>
              <th>Skill</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills?.map((skill, index) => (
              <tr key={index}>
                <td>
                  {skill.file && <img src={skill.file} alt={skill.name} className="skill-icon" style={{ height: "100px", width: "100px" }} />}
                </td>
                <td>{skill.name}</td>
                <td>{skill.description}</td>
                <td>
                  <Link to={`/editskill/${index}`}><button className="edit-btn">Edit</button></Link>
                  <DeleteSkillButton onDelete={() => deleteSkill(index)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSkills;
