import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Navbar.css';
import Home from './navbarlink_files/Home';
// import AboutMe from './navbarlink_files/AboutMe';
import Professional from './navbarlink_files/Professional';
import Projects from './navbarlink_files/Projects';
// import Contact from './navbarlink_files/Contact';
// import bulletpoint from './media/images/ball-point-pen-24.pdf';

function Navbar() {
    return (
        <div>
          <Router>
            <nav className="navbar">
                <ul className="navlinks"> <Link to="/">Home</Link> </ul>
                {/* <ul className="navlinks"> <Link to="/aboutme">About</Link> </ul> */}
                <ul className="navlinks"> <Link to="/skills">Skills/Experience</Link> </ul>
                <ul className="navlinks"> <Link to="/projects">Projects</Link> </ul>
                {/* <ul className="navlinks"> <Link to="/contact">Contact</Link> </ul> */}
            </nav>

            <Switch>
              {/* <Route path="/contact">
                <Contact />
              </Route> */}
              
              <Route path="/projects">
                <Projects/>
              </Route>

              <Route path="/skills">
                <Professional />
              </Route>

              {/* <Route path="/aboutme">
                <AboutMe />
              </Route> */}

              <Route exact path="/">
                <Home />
              </Route>
            </Switch>

          </Router>
      </div>
    )
}
export default Navbar;

