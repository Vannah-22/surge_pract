import React from 'react';
// import {HashRouter, Router, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
  // import AboutMe from './components/navbarlink_files/aboutMe';
import Footer from './components/Footer';

function App() {
  return (
      <div className="page">
        <Header />
          <div className="navbar">
            <Navbar />
          </div>
        <Footer />
      </div>
  
  );
}
export default App;
