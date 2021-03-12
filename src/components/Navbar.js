import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Navbar.css';
import Home from './navbarlink_files/Home';
import aboutMe from './navbarlink_files/aboutMe';
import Professional from './navbarlink_files/Professional';
import Projects from './navbarlink_files/Projects';
import Contact from './navbarlink_files/Contact';

function Navbar() {
    return (
        <div className="navbar">
          <Router>
            <nav>
              <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/aboutme">About</Link> </li>
                <li> <Link to="/skills">Skills/Experience</Link> </li>
                <li> <Link to="/projects">Projects</Link> </li>
                <li> <Link to="/contact">Contact</Link> </li>
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
                <aboutMe/>
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

