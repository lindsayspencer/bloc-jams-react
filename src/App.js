import React, { Component } from 'react';
// added for responsive nav bar
import ResponsiveMenu from 'react-responsive-navbar';
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
          <ResponsiveMenu
            menuOpenButton={ <div /> }
            menuCloseButton={ <div /> }
            changeMenuOn="500px"
            largeMenuClassName="large-menu-classname"
            smallMenuClassName="small-menu-classname"
            menu={
              <ul>
                <li><Link to="/"><i className="icon ion-md-home"></i> Home</Link></li>
                <li><Link to="/library"><i className="icon ion-md-musical-notes"></i> Music</Link></li>
              </ul>
            } />
          </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        <p id="signature"><i className="icon ion-logo-twitter"></i> @lindscatspencer • <a href="https://reactjs.org/">React.js</a></p>
      </div>
    );
  }
}

export default App;
