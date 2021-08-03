import React from "react";
import { Link } from "react-router-dom";
import { Context } from "./../../../context/Context"
import { useContext } from "react";
import "./topBar.css";

const TopBar = () => {
  const { user, dispatch, isFetching} = useContext(Context)
  const handleLogout = ()=>  dispatch( {type: "LOGOUT"})
  console.log(user);
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
            <li className="topListItem"> <Link to="/" className="link">Home</Link> </li>
            <li className="topListItem"> <Link to="/about" className="link">About</Link>  </li>
            <li className="topListItem"> <Link to="/contact" className="link">Contact</Link>   </li>
            <li className="topListItem"> {user && <Link to="/write" className="link">Create Post</Link>}  </li>
            <li className="topListItem"> {user && <Link to="/" className="link" onClick={handleLogout}>Logout</Link> }  </li>
          </ul>
        </div>
        <div className="topRight">
          {
            user ? (
              <img
              src={user.profilePicture}
              alt="profile image"
              className="topImg"
            />

            ) : (
              <ul className="topList">
                <li className="topListItem"> <Link to="/login" className="link">Login</Link> </li>
                <li className="topListItem"> <Link to="/register" className="link">Register</Link>  </li>

              </ul>
            )
          }
          <span className="topSearchIcon">
            <box-icon name="search"></box-icon>
          </span>
        </div>
      </div>
    </>
  );
};

export default TopBar;
