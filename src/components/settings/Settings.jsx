import React from 'react';
import Sidebar from '../nav/sidebar/Sidebar';
import './settings.css'

const Settings = () => {
    return (
        <>
            <div className="settings">
                <div className="settingWrapper">
                    <div className="settingsTitle">
                        <div className="settingsUpdateTitle">Update Account</div>
                        <div className="settingsDeleteTitle">Delete Account</div>
                    </div>
                    <form action="post" className="settingsForm">
                        <div className="settingsProfilePicture">
                            <img className="settingsImg" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="profile picture" />
                            <label htmlFor="fileInput">
                                <span className="settingsProfilePictureIcon">
                                    <box-icon name='edit-alt' ></box-icon>
                                </span>
                            </label>
                        </div>
                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                        <label>Username</label>
                        <input type="text" placeholder="shrek" />
                        <label>Email</label>
                        <input type="email" placeholder="test@gmail.com" />
                        <label>Password</label>
                        <input type="password" placeholder="" />
                        <button className="settingsSubmit"> Update</button>
                    </form>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default Settings;
