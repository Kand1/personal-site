import logo from './logo.svg';
import './App.css';
import {About} from "./Components/About";
import {HashRouter, NavLink, Route} from "react-router-dom";
import { Link, Element} from 'react-scroll';
import {Projects} from "./Components/Projects";
import {Redirect} from "react-router";


function App() {
  return (
      <HashRouter>
          <div className="App">
              <header>
                  <div className="app-header">
                      <Link className = "app-header__item" activeClass="active" to="About_me" spy={true} smooth={true} offset={50} duration={500}>
                          About me
                      </Link>
                      <Link className = "app-header__item" activeClass="active" to="Projects" spy={true} smooth={true} offset={50} duration={500}>
                          Projects
                      </Link>
                  </div>
              </header>
              <About />
          </div>
      </HashRouter>

  );
}

export default App;
