import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Components/Layout';
import AdminSkills from "./Components/AdminSkills";
import LoginForm from "./Pages/LoginForm";
import EcommerceProject from "./Components/EcommerceProject";
import AddSkill from "./Components/AdminControl/AddSkill";
import AddWorks from "./Components/AdminControl/AddWorks";
import AddClients from "./Components/AdminControl/AddClients";
import EditSkills from "./Components/AdminControl/EditSkills";
import UploadCV from "./Components/AdminControl/UploadCV";

function App() {
  const [skills, setSkills] = useState(JSON.parse(localStorage.getItem('skills')) || []);

  const addSkill = (skill) => {
    const updatedSkills = [...skills, skill];
    setSkills(updatedSkills);
    localStorage.setItem('skills', JSON.stringify(updatedSkills));
  };

  const deleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    localStorage.setItem('skills', JSON.stringify(updatedSkills));
  };

  const updateSkill = (index, updatedSkill) => {
    const updatedSkills = skills.map((skill, i) => (i === index ? updatedSkill : skill));
    setSkills(updatedSkills);
    localStorage.setItem('skills', JSON.stringify(updatedSkills));
  };

  return (
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
        <Route path="/UPLOADCV" element={<UploadCV />} />
      </Routes>
    </Router>
  );
}

export default App;
