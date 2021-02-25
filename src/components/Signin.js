import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const Signin = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [height, setHeight] = useState("");

  const handleChangeUsername = ({ target: { value } }) => {
    setUsername(value);
  };

  const handleChangePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleChangeHeight = ({ target: { value } }) => {
    setHeight(value);
  };

  const btnSignIn = () => {
    const data = {
      username: username,
      password: password,
      height: +height,
    };

    fetch("https://trainning-rest-api.herokuapp.com/v1/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("success!", res);
        if (res.status != 200) {
          alert(res.message);
        } else {
          sessionStorage.setItem("token", res.user.token);
          sessionStorage.setItem("loggedInUser", JSON.stringify(res.user));
          // para recuperarlo --> const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
          history.push("/dashboard");
        }
      })
      .catch((res) => console.log("Error: ", res));
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={handleChangeUsername}
      />
      <input
        type="text"
        value={password}
        placeholder="Password"
        onChange={handleChangePassword}
      />
      <input
        type="number"
        value={height}
        placeholder="Height"
        onChange={handleChangeHeight}
      />
      <button onClick={btnSignIn}>Sign In</button>
    </div>
  );
};

export default withRouter(Signin);
