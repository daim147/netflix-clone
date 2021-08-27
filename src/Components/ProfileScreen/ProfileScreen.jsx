import React from "react";
import { useSelector } from "react-redux";
import { selectUserAuth } from "../../features/userSlice";
import { auth } from "../../Firebase";
import Navbar from "../Homescreen/Navbar/Navbar";
import "./ProfileScreen.css";
const ProfileScreen = () => {
  const {
    user: { email },
  } = useSelector(selectUserAuth);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__button"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
