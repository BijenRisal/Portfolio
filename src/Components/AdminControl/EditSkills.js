import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditSkills = ({ skills, updateSkill }) => {
  const { index } = useParams();
  const skill = skills[index];
  const [name, setName] = useState(skill.name);
  const [description, setDescription] = useState(skill.description);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSkill = {
      name,
      description,
      file: file ? URL.createObjectURL(file) : skill.file
    };
    updateSkill(index, updatedSkill);
    navigate("/adminskills");
  };

  return (
    <div>
      <div className="sidebar">
        
      <Link to="/uploadcv"><button>Upload CV</button></Link>
        <Link to="/adminskills"><button>Skills</button></Link>
        <Link to="/addworks"><button>Works</button></Link>
        <Link to="/addclients"><button>Clients</button></Link>
        <Link to="/"><button>Log Out</button></Link>
      </div>
      <div className="edit">
        <h1>Edit Skill</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Skill Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>
          {/* <div>
            <label>Upload Icon</label>
            <input
              type="file"
              onChange={handleFileChange}
            />
          </div> */}
          <button type="submit">Update Skill</button>
        </form>
      </div>
    </div>
  );
};

export default EditSkills;
