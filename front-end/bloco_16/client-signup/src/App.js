import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login} />
        {/* <Route path='/clients' component={Clients}/> */}
        {/* <Route path='/sign-up' component={SignUp}/> */}
      </Switch>
      
    </div>
  );
}

export default App;
