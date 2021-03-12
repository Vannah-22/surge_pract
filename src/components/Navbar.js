import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Navbar.css';
import Home from './navbarlink_files/Home';
import AboutMe from './navbarlink_files/AboutMe';
import Professional from './navbarlink_files/Professional';
import Projects from './navbarlink_files/Projects';
import Contact from './navbarlink_files/Contact';

function Navbar() {
    return (
        <div>
          <Router>
            <nav>
              <ul>
                <Link to="/">Home</Link> 
                <Link to="/aboutme">About</Link>
                <Link to="/skills">Skills/Experience</Link> 
                <Link to="/projects">Projects</Link> 
                <Link to="/contact">Contact</Link> 
              </ul>
            </nav>

            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              
              <Route path="/projects">
                <Projects/>
              </Route>

              <Route path="/skills">
                <Professional />
              </Route>

              <Route path="/aboutme">
                <AboutMe />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>
            </Switch>

          </Router>
      </div>
    )
}
export default Navbar;

