import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './components/styles/_custom-bootstrap.scss';
import { CSSTransition, TransitionGroup } from 'react-transition-group'; // Import TransitionGroup
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import './components/styles/App.css';

function App() {
  return (
    <Router>
      <div className="bg-dark text-light">
        <Navbar />
        <Route
          render={({ location }) => (
            <TransitionGroup> {/* Wrap the routes in TransitionGroup */}
              <CSSTransition
                key={location.key}
                classNames="slide"
                timeout={1000} // Adjust the timeout as needed
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