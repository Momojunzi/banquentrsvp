import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import Rsvp from './components/rsvp/rsvp';
import Landing from './components/landing/landing';
import Invite from './components/invite/invite';
import Directions from './components/directions/directions';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router >
          <Switch >
            <div className="my-flex">
              <Route exact path="/" render={(props) => <Landing {...props} name='landing' />}/>
              <Route path="/invite" render={(props) => <Invite {...props} name='invite' />}/>
              <Route path="/rsvp" render={(props) => <Rsvp {...props} name='rsvp' />}/>
              <Route path="/directions" render={(props) => <Directions {...props} name='directions' />}/>
            </div>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
