import React, { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

const Login = ({ token, setToken }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = (e) => {
    setError("");
    setPassword("");
    setUserName("");
    e.preventDefault();
    console.log("I have reached");
    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: userName,
        password: password,
      },
    })
      .then((res) => {
        console.log("set token", res.data.token);
        setToken(res.data.token);
        localStorage.setItem("userToken", res.data.token);
      })
      .catch((err) => {
        console.log("set error", err.response);
        setError(err.response.data);
      });
    // fetch({
    //     url: "https://fakestoreapi.com/auth/login",
    //     method: "POST",
    //     data: {
    //         userName: userName,
    //         password: password
    //     }
    // }).then((res) => {
    //     console.log(res.data.token);
    //     setToken(res.data.token);
    //     localStorage.setItem("userToken", res.data.token)
    // }).catch((err) => {
    //     console.log(err.response);
    //     setError(err.response.data)
    // })
  };
  return (
    <div>
      <div>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="username"
          required={true}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          required={true}
        />
        {error && <small> {error}</small>}
        <button onClick={loginHandler}>Login</button>
        <small>Hint - mor_2314/83r5^_</small>
      </div>
    </div>
  );
};

export default Login;
