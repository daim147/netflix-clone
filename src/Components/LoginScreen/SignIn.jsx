import React, { useState } from "react";
import { auth } from "../../Firebase";
import "./Signin.css";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Invalid Email or Password");
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then()
      .catch((error) => alert(error))
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Invalid Email or Password");
      return;
    }
    auth
      .signInWithEmailAndPassword(email, password)
      .then()
      .catch((error) => alert(error))
      .finally(() => {
        setEmail("");
        setPassword("");
      });
  };
  return (
    <div className="signinSrcreen">
      <form>
        <h1>Sign in</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={signIn} type="submit">
          Sign in
        </button>
        <h4>
          <span>New to Netflix? </span>{" "}
          <span onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignIn;
