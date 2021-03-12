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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutme">About</Link>
              </li>
              <li>
                <Link to="/skills">Skills/Experience</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route><Route path="/projects">
              <Projects/>
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/aboutme">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    )
}
export default Navbar;

