import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <h1>Página Principal</h1>
      </div>
    )
  }
}

export default Home;