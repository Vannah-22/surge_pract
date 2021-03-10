import React from 'react';
import {Router, Route} from "react-dom";
import './App.css';
// import {HashRouter, Route} from 'react-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
  import aboutMe from './components/aboutMe';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
      <div className="page">

        <Header />
        <Navbar />
          {/* <Route path="/aboutme"component={aboutMe} /> */}
        <Content />
        <Footer />
      </div>
  
  );
}
export default App;
