import React from 'react';
import {HashRouter, Router, Route} from 'react-reactor-dom';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
  import AboutMe from './navbarlink_files/aboutMe';
  // import AboutMe from './navbarlink_files/aboutMe';
  // import AboutMe from './navbarlink_files/aboutMe';
  // import AboutMe from './navbarlink_files/aboutMe';

import Footer from './components/Footer';

function App() {
  return (
      <div className="page">

        <Header />
        <Navbar />
        
          {/* <Route path="/aboutme"component={aboutMe} /> */}
          {/* <Route path="/skillsandexperience"component={aboutMe} /> */}
          {/* <Route path="/projects"component={aboutMe} /> */}
          {/* <Route path="/contact"component={aboutMe} /> */}
        <Content />
        <Footer />
      </div>
  
  );
}
export default App;
