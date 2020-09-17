import React, { Component } from 'react'
import Login from './components/layouts/Login';
import Default from './components/Default';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router >
        <div>
          <Switch>
            <Route path="/default">
                <Default/>
            </Route>
            <Route path="/">
                <Login/>
            </Route>
          </Switch>
       </div>
      </Router>
        
    );
  }
}

export default App;
