import React from "react";
import { Link } from "react-router-dom";
import Reacts from "../Assets/react.png";

const Admin = () => {
  return (
    <div className="grid">
      <div className="sidebar">
        <div className="sidebar-header">
          <h2> Portfolio</h2>
        </div>
        <div className="sidebar-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/adminskills" className="active">Skills</Link></li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <header>
          <h2>Portfolio Management</h2>
        </header>
        <main>
          <section>
            <h3>Skills</h3>
            <p>Add or edit your skills here.</p>
          </section>
          <section>
            <h3>Clients</h3>
            <p>Manage your clients here.</p>
          </section>
          <section>
            <h3>Works</h3>
            <div className="work-item">
              <img src={Reacts} alt="Work 1" />
              <h3>Acme Website</h3>
              <p>A modern and responsive website for Acme Inc, a leading technology company.</p>
              {/* <a href="#">View Demo</a>
              <a href="#">GitHub</a> */}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Admin;
