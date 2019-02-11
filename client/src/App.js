import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import './landscape.css';
import './portrait.css'
import Rsvp from './components/rsvp/rsvp';
import Landing from './components/landing/landing';
import Invite from './components/invite/invite';
import Directions from './components/directions/directions';
import Submitted from './components/submitted/submitted';
import Admin from './components/admin/admin';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  state = {
    attending: false
  }

  handleAttending = () => {
    this.setState({attending: true})
  }

  returnFalse = () => {
    if(this.state.attending) {
      this.setState({attending: false})
    }
  }

  render() {
    return (
      <div className="App">
        <Router >
          <Switch >
            <div className="my-flex">
              <Route exact path="/" render={(props) => <Landing {...props} name='landing' />}/>
              <Route path="/invite" render={(props) => <Invite {...props} name='invite' />}/>
              <Route path="/rsvp" render={(props) => <Rsvp {...props} name='rsvp' handleAttending={this.handleAttending} returnFalse={this.returnFalse}/>}/>
              <Route path="/submitted" render={(props) => <Submitted {...props} name='submitted' attending={this.state.attending} />}/>
              <Route path="/directions" render={(props) => <Directions {...props} name='directions' />}/>
              <Route path="/admin" render={(props) => <Admin {...props} name='admin' />}/>
            </div>
          </Switch>
        </Router>
        
      </div>
    );
  }
}

export default App;
