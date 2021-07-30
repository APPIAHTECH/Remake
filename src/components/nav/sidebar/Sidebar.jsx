import React from "react";
import "./sideBar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">About me</span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWStqZrjQXiuHFl63lYWqXVTj_KelsLSw3Q&usqp=CAU"
            alt="about me img"
            className="sidebarImg"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, natus.
            Nisi, eveniet aperiam? Quas odio quos harum ipsum incidunt quasi
            quam architecto debitis vero, repellat quisquam culpa totam unde
            dolor!
          </p>
          <div className="sidebarItem">
            <div className="sidebarTitle">Categories</div>
            <ul className="sidebarList">
              <li className="sidebarListItems">Life</li>
              <li className="sidebarListItems">Music</li>
              <li className="sidebarListItems">Style</li>
              <li className="sidebarListItems">Sports</li>
              <li className="sidebarListItems">Tech</li>
            </ul>
          </div>

          <div className="sidebarItem">
            <div className="sidebarTitle">Follow Us</div>
            <div className="sidebarSocial">
              <span className="sidebarIcon">
                <box-icon type="logo" name="facebook"></box-icon>
              </span>

              <span className="sidebarIcon">
                <box-icon name="twitter" type="logo"></box-icon>
              </span>
              <span className="sidebarIcon">
                <box-icon name="pinterest" type="logo"></box-icon>
              </span>
              <span className="sidebarIcon">
                <box-icon name="instagram-alt" type="logo"></box-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
