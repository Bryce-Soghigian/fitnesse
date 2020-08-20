import React, { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/context";
import axios from "axios";
import "./auth.css";
const Signup = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [PostBody, setPostBody] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const { state, dispatch } = useContext(GlobalContext);

  const LoginRequest = () => {
    let finalFullName = `${name.firstName} ${name.lastName}`;
    setPostBody({ ...PostBody, fullname: finalFullName });

    axios
      .post(
        `https://fitnesse-api.herokuapp.com/api/v1/userRouter/login`,
        PostBody
      )
      .then((data) => {
        dispatch({ type: "login", payload: data });
      })
      .catch((err) => {
        dispatch({ type: "loginError", payload: err });
      });
  };
  const HandleEmail = (e) =>
    setPostBody({ ...PostBody, email: e.target.value });
  const HandlePassword = (e) =>
    setPostBody({ ...PostBody, password: e.target.value });

  const HandleFirstName = (e) =>
    setName({ ...name, firstName: e.target.value });

  const HandleLastName = (e) => setName({ ...name, lastName: e.target.value });
  return (
    <div className="main-container">
      <div className="login-container">
        <p>Login to Fitnesse</p>
        <input placeholder="First Name" onChange={HandleFirstName} className="input"/>
        <input placeholder="Last Name" onChange={HandleLastName} className="input"/>
        <input placeholder="Email" onChange={HandleEmail} className="input"/>
        <input
          placeholder="Password"
          type="password"
          onChange={HandlePassword}
          className="input"
        />
        <button onClick={LoginRequest} className="submit-button">Login</button>
        <p className="error-text">{state.errorMessage}</p>
      </div>
    </div>
  );
};

export default Signup;
