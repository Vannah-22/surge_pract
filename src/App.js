import React from 'react';
import './App.css';
// import {HashRouter, Route} from 'react-router-dom';

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

        <div className="content-section" >
              {/* Set up relationships between the route and the content rendered when that route is active */}
              <Route exact path="/"component={aboutMe} />
        </div>


        <Content />
        <Footer />
      </div>
  
  );
}
export default App;
