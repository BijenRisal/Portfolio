// App.js
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout';
import EcommerceProject from './Components/EcommerceProject';
import Admin from './Components/Admin'; // Ensure correct import path
import AdminSkills from "./Components/AdminSkills";

import LoginForm from "./Pages/LoginForm";
import AddSkill from "./Components/AdminControl/AddSkill";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/ecommerce" element={<EcommerceProject />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminskills" element={<AdminSkills />} />
          <Route path="/addskills" element={<AddSkill />} / >
        </Routes>
      </Router>
    </div>
  );
}

export default App;
