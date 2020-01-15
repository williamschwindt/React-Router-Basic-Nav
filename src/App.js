import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => {
  return (
    <div>
      <Navigation />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component ={About} />
    <Route exact path="/contact" component ={Contact} />
    </div>
  );
};

export default App;
