import React, { useState } from "react";
import "./LoginScreen.css";
import SignIn from "./SignIn";
const LoginScreen = () => {
  const [isSign, setSign] = useState(false);
  return (
    <div className="loginsreen">
      <div className="loginscreen__background">
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          className="loginscreen__logo"
          alt=""
        />
        <button
          onClick={setSign.bind(this, true)}
          className="loginscreen__button"
        >
          Sign in
        </button>
      </div>
      <div className="loginscreen__fade"></div>
      <div className="loginscreen__body">
        {!isSign ? (
          <>
            {" "}
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginscreen__input">
              <form>
                <input type="email" placeholder="Enter email" />
                <button onClick={setSign.bind(this, true)}>GET STARTED</button>
              </form>
            </div>
          </>
        ) : (
          <SignIn />
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
