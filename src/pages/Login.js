import React, { useState } from 'react';
import Api from '../services/Api';

import '../styles/Login.scss';

import logo from '../assets/logo.svg';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await Api.post('/devs', { username });
    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt='Tindev' />
        <input
          placeholder='Digite seu usuário no GitHub'
          onChange={event => setUsername(event.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
};

export default Login;
