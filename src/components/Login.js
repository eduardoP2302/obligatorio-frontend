import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = ({ target: { value } }) => {
    setUsername(value);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const btnLogin = () => {
    const data = {
      username: username,
      password: password,
    };

    fetch('https://trainning-rest-api.herokuapp.com/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        console.log('success!', res);
        if (res.status) {
          alert(res.message);
        } else {
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('loggedInUser', JSON.stringify(res));
          // para recuperarlo --> const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
          history.push('/tareas');
        }
      })
      .catch(res => console.log('error... :-(', res));
  };

  return (
    <div>
      <input type="text" value={username} placeholder="Username" onChange={handleChangeUsername} />
      <input type="text" value={password} placeholder="Password" onChange={handleChangePassword} />
      <button onClick={btnLogin}>Log in</button>
    </div>
  );
};

export default withRouter(Login);
