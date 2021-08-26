import React, { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const showNavBLack = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showNavBLack);

    return () => window.removeEventListener("scroll", showNavBLack);
  }, []);
  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <div className="navbar__content">
        <img
          className="navbar__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="navbar__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
