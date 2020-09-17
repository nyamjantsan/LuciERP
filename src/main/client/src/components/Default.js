import React, { Component } from 'react';
import Header from '../components/layouts/Header';
import Profile from '../components/modules/Profile';
import Home from '../components/layouts/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Default extends Component {
  render() {
    return (
      <Router >
        <div>
          <Header/>
          <Switch>
            <Route path="/profile">
                <Profile/>
            </Route>
            <Route path="/default">
                <Home/>
            </Route>
          </Switch>
       </div>
      </Router>
    );
  }
}

export default Default;
