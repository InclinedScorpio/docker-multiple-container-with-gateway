import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.linkedin.com/in/ashutosh3309/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ashutosh Tiwari
          </a>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
