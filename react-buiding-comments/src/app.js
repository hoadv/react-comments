import React, { Component } from 'react';
// First we import some modules...
import { Router, Route, hashHistory } from 'react-router'
import Auth from './services/auth.service'
import Login from './components/login';
import Home from './components/home';
class App extends Component {
  constructor(props) {
    super(props);
    this.requireAuth = this.requireAuth.bind(this);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home} onEnter={this.requireAuth} />
        <Route path="login" component={Login} />
      </Router>
    );
  }

  requireAuth(nextState, replace) {
    if (!Auth.loggedIn()) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }
}

export default App;
