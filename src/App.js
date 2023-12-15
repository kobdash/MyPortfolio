import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './components/styles/_custom-bootstrap.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import './components/styles/App.css';

function App() {
  const [navbarVisible, setNavbarVisible] = useState(false); 

  const toggleNavbar = () => {
    setNavbarVisible(!navbarVisible);
  };



  return (
    <Router>
      <div>
      <button onClick={toggleNavbar} class="btn btn-secondary dropdown-toggle"><span class='highlight'>Menu</span>
</button>
        <div className={`navbar-container ${navbarVisible ? 'visible' : ''}`}>
          <Navbar />
        </div>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
  key={location.key}
  classNames={location.pathname === '/' ? 'initial-slide' : 'slide'}
  timeout={1000}
>
  <Switch location={location}>
    <Route path="/" exact component={HomePage} />
    <Route path="/portfolio" component={PortfolioPage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/contact" component={ContactPage} />
  </Switch>
</CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    </Router>
  );
}

export default App;