import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Signin = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [height, setHeight] = useState('');

  const handleChangeUsername = ({ target: { value } }) => {
    setUsername(value);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleChangeHeight = ({ target: { value } }) => {
    setHeight(value);
  };

  const btnLogin = () => {
    const data = {
      username: username,
      password: password,
      height: height,
    };

    fetch('https://trainning-rest-api.herokuapp.com/v1/users/login', { //Cambiar por la URL del registro
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
      <input type="text" value={height} placeholder="Height" onChange={handleChangeHeight} />
      <button onClick={btnLogin}>Sign In</button>
    </div>
  );
};

export default withRouter(Signin);
