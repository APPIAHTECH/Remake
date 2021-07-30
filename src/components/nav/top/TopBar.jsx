import React from "react";
import { Link } from "react-router-dom";
import "./topBar.css";

const TopBar = () => {
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <span className="topIcon">
            <box-icon type="logo" name="facebook"></box-icon>
          </span>

          <span className="topIcon">
            <box-icon name="twitter" type="logo"></box-icon>
          </span>
          <span className="topIcon">
            <box-icon name="pinterest" type="logo"></box-icon>
          </span>
          <span className="topIcon">
            <box-icon name="instagram-alt" type="logo"></box-icon>
          </span>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem"> Home </li>
            <li className="topListItem"> About </li>
            <li className="topListItem"> Contact </li>
            <li className="topListItem"> Post </li>
            <li className="topListItem"> Logout </li>
          </ul>
        </div>
        <div className="topRight">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="profile image"
            className="topImg"
          />
          <span className="topSearchIcon">
            <box-icon name="search"></box-icon>
          </span>
        </div>
      </div>
    </>
  );
};

export default TopBar;
