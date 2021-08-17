import logo from './logo.svg';
import './App.css';
import {About} from "./Components/About";
import {HashRouter, NavLink, Route} from "react-router-dom";
import {Projects} from "./Components/Projects";
import {Redirect} from "react-router";


function App() {
  return (
      <HashRouter>
        <div className="App">
          <header>
              <div className="app-header">
                  <NavLink className = "app-header__item" to = "/about">About me</NavLink>
                  <NavLink className = "app-header__item" to = "/projects">Projects</NavLink>
              </div>
          </header>
            <Route exact path='/' render={() => <Redirect to="/about"/>}/>
            <Route exact path='/projects' render={() => <Projects />}/>
            <Route exact path='/about' render={() => <About />}/>

        </div>
      </HashRouter>

  );
}

export default App;
