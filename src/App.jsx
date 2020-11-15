import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Index from './pages/index';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route exact path="/index">
            <Index></Index>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
