import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/login'>Login</Link>
        <h1>Página Principal</h1>
      </div>
    )
  }
}
