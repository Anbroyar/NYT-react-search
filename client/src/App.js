import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';
import './App.css';

class App extends Component { 

  render() {
    return (
      <Router>
        <div id="body">
          <div className="wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
							<Route exact path="/saved" component={Saved} />
							<Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  };
};

export default App;
