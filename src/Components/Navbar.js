import React from "react";
import logo from '../Assets/virinchi.png';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink alias
import { Link as ScrollLink } from "react-scroll";

// const JPG_FILE_URL = "http://localhost:3000/images.jpg";

const Navbar = () => {
  // const downloadFileAtURL = (url) => {
  //   fetch(url)
  //     .then((response) => {
  //       console.log("Response:", response);
  //       return response.blob();
  //     })
  //     .then((blob) => {
  //       console.log("Blob:", blob);
  //       const blobURL = window.URL.createObjectURL(blob);
  //       console.log("Blob URL:", blobURL);
  //       const filename = url.split("/").pop();
  //       console.log("Filename:", filename);
  //       const aTag = document.createElement("a");
  //       aTag.href = blobURL;
  //       aTag.setAttribute("download", filename);
  //       document.body.appendChild(aTag);
  //       aTag.click();
  //       aTag.remove();
  //     })
  //     .catch((error) => {
  //       console.error("Error downloading file:", error);
  //     });
  // };
  

  return (
    <nav className="navbar"> 
      <img src={logo} alt="logo" className="logo" />
      <div className="menu"> 
        <ScrollLink activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="menulistitem">Home</ScrollLink>
        <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} offset={-60} duration={500} className="menulistitem">Skills</ScrollLink>
        <ScrollLink activeClass="active" to="works" spy={true} smooth={true} offset={-45} duration={500} className="menulistitem">Works</ScrollLink>
        <ScrollLink activeClass="active" to="client" spy={true} smooth={true} offset={-100} duration={500} className="menulistitem">Clients</ScrollLink>
      </div>
      <div className="box">
        {/* <button className="contactbtn" onClick={() => { downloadFileAtURL(JPG_FILE_URL) }}>Download CV </button> */}
        <button className="contactbtn" onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>Contact</button>
        <RouterLink to="/login" className="contactbtn">Developer Mode</RouterLink> {/* Use RouterLink */}
      </div>
    </nav>
  );
};

export default Navbar;
