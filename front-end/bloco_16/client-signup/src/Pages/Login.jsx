import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label for='email'>
              Email:
              <input type="email" name='email' id='email' />
            </label>
            <br />
            <label for='password'>
              Senha
              <input type="password" id='password' />
            </label>
        </form>
      </div>
    )
  }
}

export default Login;