import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <h1>Hello World</h1>
      </div>
    </Router>
  );
}

export default App;
