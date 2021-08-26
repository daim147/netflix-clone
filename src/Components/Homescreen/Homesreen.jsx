import React from "react";
import { requests } from "../../Request";
import Banner from "./Banner/Banner";
import "./Homescreen.css";
import Navbar from "./Navbar/Navbar";
import Row from "./Row/Row";
const Homesreen = () => {
  return (
    <div className="homescreen">
      <Navbar />
      <Banner />
      {Object.values(requests).map((category) => (
        <Row key={category.fetchApi} {...category} />
      ))}
    </div>
  );
};

export default Homesreen;
