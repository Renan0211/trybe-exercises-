import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredClients from './pages/RegisteredClients';
import NewClient from './pages/NewClient';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/clients' component={RegisteredClients} />
        <Route path='/register' component={NewClient} />
      </Switch>
    </div>
  );
}

export default App;
