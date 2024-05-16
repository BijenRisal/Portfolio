import React from "react";
import { Link } from "react-router-dom";


const AdminSkills = () => {
  return (
    <div className="container">
      <nav className="nav">
        <ul>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Clients</a>
          </li>
        </ul>
      </nav>
      <section className="content">
        <div className="skills-section">
          <div className="heading">
            <h2>My Skills</h2>
            <p>These are the skills I have developed over the years.</p>
          </div>
          <div className="add-skill">
            <Link to="/addskills"> <button>Add Skill</button></Link>
          </div>
          <div className="skills-table">
            <table>
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Frontend Development</td>
                  <td>HTML, CSS, JavaScript, React, Vue, Angular</td>
                  <td>
                    <button>Edit</button>
                    <button className="delete">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Backend Development</td>
                  <td>Node.js, Express, MongoDB, SQL</td>
                  <td>
                    <button>Edit</button>
                    <button className="delete">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>UI/UX Design</td>
                  <td>Adobe XD, Figma, Sketch</td>
                  <td>
                    <button>Edit</button>
                    <button className="delete">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminSkills;
