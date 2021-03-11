import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Navbar.css';
import Home from './Home';
import About from './aboutMe';
import Skills from './Professional';
import Projects from './Projects';
import Contact from './Contact';

function Navbar() {
    return (
        <div className="navbar">
            <Router>
      <div>
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

