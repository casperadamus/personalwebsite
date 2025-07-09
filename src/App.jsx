
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" className="App-link">Home</Link>
            <span> | </span>
            <Link to="/about" className="App-link">About</Link>
          </nav>
          <Routes>
            <Route path="/" element={
              <p>
                My name is Casper Adamus.
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
