import React from 'react';
import Header from './components/layouts/Header';
// import SideBar from './components/layouts/SideBar';
import Profile from './components/modules/Profile';
import Home from './components/layouts/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router >
      <div>
        <Header/>
        <Switch>
          {/* <Route path="/sidebar">
              <SideBar/>
          </Route> */}
          <Route path="/profile">
              <Profile/>
          </Route>
          <Route path="/">
              <Home/>
          </Route>
        </Switch>
     </div>
    </Router>
  );
}

export default App;
