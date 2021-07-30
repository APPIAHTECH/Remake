import React from "react";
import { Link } from "react-router-dom";
import styles from "./topBar.css";

console.log(styles);
const TopBar = () => {
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <box-icon className="topIcon" type="logo" name="facebook"></box-icon>
          <box-icon className="topIcon" name="twitter" type="logo"></box-icon>
          <box-icon className="topIcon" name="pinterest" type="logo"></box-icon>
          <box-icon className="topIcon" name="instagram-alt" type="logo"></box-icon>
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
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile image" className="topImg"/>
          <box-icon name='search' ></box-icon>
        </div>
      </div>
    </>
  );
};

export default TopBar;
