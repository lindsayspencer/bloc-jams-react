import React, { Component } from 'react';
// added to implement the router
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing.js';
import Library from './components/Library.js';
import Album from './components/Album.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
          <ul>
            <li><Link to="/">Landing</Link></li>
            <li><Link to="/library">Library</Link></li>
          </ul>
          </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
