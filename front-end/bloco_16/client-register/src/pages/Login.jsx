import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.checkCredentials = this.checkCredentials.bind(this);
    this.showLoginError = this.showLoginError.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state={
      shouldRedirect: false,
      unvalidEmailOrPassword: false,
      password: '',
      email: '',
    }
  }

  handleChange ({target}) {
    const {name, value} = target;
    this.setState({[name]: value});
  }

  checkCredentials(email,password) {
    const {clients} = this.props;
    const user = clients.find(client => client.email = email);
    if (user===undefined) {
      this.setState({unvalidEmailOrPassword: true});
      return;
    }
    const userPasswordMatch = user.password === password;
    if (userPasswordMatch) this.setState({shouldRedirect: true});
    else {
      this.setState({unvalidEmailOrPassword: true});
      return;
    }
  }

  showLoginError() {
    const {unvalidEmailOrPassword} = this.state;
    if (unvalidEmailOrPassword) return 'Email ou senha inválidos'
    return '';
  }

  render() {
    const {shouldRedirect, email, password} = this.state;
    if(shouldRedirect) return <Redirect to='/clients'/>
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            E-mail
            <input onChange={this.handleChange} name='email' id='email' type="email" />
          </label>
          <br />
          <label htmlFor="password">
            Senha
            <input onChange={this.handleChange} name='password' id="password" type="password" />
          </label>
          <br />
          <p>{this.showLoginError()}</p>
          <button onClick={() => this.checkCredentials(email, password)} type="button">Entrar</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  clients: state.createClient.state
});


export default connect(mapStateToProps, null) (Login);
