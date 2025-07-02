import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <Link to="/" className="App-link">Home</Link>
            <span> | </span>
            <Link to="/about" className="App-link">About</Link>
          </nav>
          <Routes>
            <Route path="/" element={
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
            } />
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
