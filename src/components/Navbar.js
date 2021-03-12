import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Navbar.css';
import Home from './navbarlink_files/Home';
import About from './navbarlink_files/aboutMe';
import Skills from './navbarlink_files/Professional';
import Projects from './navbarlink_files/Projects';
import Contact from './navbarlink_files/Contact';

function Navbar() {
    return (
      <div className="navbar">
      <Router>
        <div className="content--body">
          <nav>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/aboutme">About</Link>
              <Link to="/skills">Skills/Experience</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </nav>
        </div>

          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            
            <Route path="/projects">
              <Projects/>
            </Route>

            <Route path="/skills">
              <Skills />
            </Route>

            <Route path="/aboutme">
              <aboutMe/>
            </Route>

            <Route path="/">
              <div className="content--homepage"> 
              <Home />
              </div>
            </Route>

          </Switch>

      </Router>
      </div>
    )
}
export default Navbar;

