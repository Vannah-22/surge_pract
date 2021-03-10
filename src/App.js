import React from 'react';
import './App.css';
// import {HashRouter, Route} from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (

      <div className="page">
        <Header />
        <Navbar />
        <Content />
        <Footer />
      </div>
  
  );
}
export default App;
