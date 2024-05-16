import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import Works from './Works';
import Contact from './Contact';
import Footer from './Footer';

function Layout() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default Layout;
