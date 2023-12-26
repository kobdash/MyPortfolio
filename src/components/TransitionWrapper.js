
// TransitionWrapper.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles/transition.css';

const TransitionWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={1000}>
        <div>
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionWrapper; 

