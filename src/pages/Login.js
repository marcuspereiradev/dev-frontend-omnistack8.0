import React, { Component } from 'react';

import '../styles/Login.scss';

import logo from '../assets/logo.svg';

class Login extends Component {
  render() {
    return (
      <div className='login-container'>
        <form>
          <img src={logo} alt='Tindev' />
          <input placeholder='Digite seu usuário no GitHub'/>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    )
  }
};

export default Login;
