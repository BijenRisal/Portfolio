import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddWorksDetails = ({ addSkill }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addSkill({ name, description });
    navigate("/addworks");
  };

  return (
    <div className="container">
      <div className="sidebar">
       
      <Link to="/uploadcv"><button>Upload CV</button></Link>
        <Link to="/adminskills"><button>Skills</button></Link>
        <Link to="/addworks"><button>Works</button></Link>
        <Link to="/addclients"><button>Clients</button></Link>
        <Link to="/"><button>Log Out</button></Link>
      </div>
      <div className="content">
        <h1>Add Skills</h1>
        <div className="addskill">
          <form className="skill-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="skill-name" className="form-label">Skill Name:</label>
              <input
                type="text"
                id="skill-name"
                name="skill-name"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="skill-description" className="form-label">Skill Description:</label>
              <textarea
                id="skill-description"
                name="skill-description"
                rows="4"
                cols="50"
                className="form-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <input type="submit" value="Submit" className="form-submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWorksDetails;
