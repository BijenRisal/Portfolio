import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import AdminSkills from "./Components/AdminSkills";
import LoginForm from "./Pages/LoginForm";
import EcommerceProject from "./Components/EcommerceProject";
import AddSkill from "./Components/AdminControl/AddSkill";
import AddWorks from "./Components/AdminControl/AddWorks";
import AddClients from "./Components/AdminControl/AddClients";
import EditSkills from "./Components/AdminControl/EditSkills";

function App() {
  const [skills, setSkills] = useState(JSON.parse(localStorage.getItem('skills')) ||[]);

  // [
  //   { name: "Frontend Development", description: "HTML, CSS, JavaScript, React, Vue, Angular" },
  //   { name: "Backend Development", description: "Node.js, Express, MongoDB, SQL" },
  //   { name: "UI/UX Design", description: "Adobe XD, Figma, Sketch" }
  // ]
  const addSkill = (skill) => {
    setSkills([...skills, skill]);
    localStorage.setItem('skills',JSON.stringify([...skills, skill]))
  };

  const deleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index)
    setSkills(updatedSkills);
    localStorage.setItem('skills',JSON.stringify(updatedSkills))
    
  };

  const updateSkill = (index, updatedSkill) => {
    const updatedSkills = skills.map((skill, i) => (i === index*1 ? updatedSkill : skill));
    setSkills(updatedSkills);
    localStorage.setItem('skills',JSON.stringify(updatedSkills))

  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/ecommerce" element={<EcommerceProject />} />
          <Route path="/portfolioproject" element={<EcommerceProject />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/adminskills" element={<AdminSkills skills={skills} deleteSkill={deleteSkill} />} />
          <Route path="/addskills" element={<AddSkill addSkill={addSkill} />} />
          <Route path="/addworks" element={<AddWorks />} />
          <Route path="/addclients" element={<AddClients />} />
          <Route path="/editskill/:index" element={<EditSkills skills={skills} updateSkill={updateSkill} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
