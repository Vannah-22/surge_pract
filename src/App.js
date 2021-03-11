import React from 'react';
// import {HashRouter, Router, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
  import AboutMe from './components/navbarlink_files/aboutMe';
import Content from './components/navbarlink_files/Content';
import Footer from './components/Footer';

function App() {
  return (
      <div className="page">
        <Header />
        <Navbar />
        <AboutMe />
        <Content />
        <Footer />
      </div>
  
  );
}
export default App;
