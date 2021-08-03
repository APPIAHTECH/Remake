import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import Sidebar from '../nav/sidebar/Sidebar';
import { Context } from "../../context/Context"
import { BASE_IMAGES_URL } from "../../config"
import api from "../../api/index"
import './settings.css'

const Settings = () => {

    const { user, dispatch } = useContext(Context)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState(false);

    let history = useHistory();

    const handleDelete = async (event) => {
        if (window.confirm("You are about to delete your account are you sure ?")) {
            event.preventDefault()
            const deleteUser = { userID: user._id, username, email, password }
            try {
                const res = await api.deleteUser(user._id, deleteUser)
                console.log(res);
                if( res ){
                    dispatch({ type: "LOGOUT"})
                    return history.push('/login')
                 }
             } catch (error) {
                 console.error(error);
             }
        }

    }
    const handleUpdate = async (event) => {
        event.preventDefault()
        const newUser = { userID: user._id, username, email, password }
        
        try {
            if (file)
            {
                const data = new FormData()
                const filename = Date.now() + file.name
                data.append("name", filename)
                data.append("file", file)
                newUser.profilePicture = filename
                const res = await api.upload(data)
            }

        } catch (err) { console.error(err); }

        try {
            const res = await api.updateUser(user._id, newUser)
            if (res) {
                setSuccess(true)
                dispatch({ type: "LOGIN_SUCCESS", payload: res.updatedUser })
                window.location.reload()
            }
        } catch (error) { console.error(error); }

    };

    useEffect(async () => {
        setUsername(user.username)
        setEmail(user.email)
    }, []);

    return (
        <>
            <div className="settings">
                <div className="settingWrapper">
                    <div className="settingsTitle">
                        <div className="settingsUpdateTitle">Update Account</div>
                        <div className="settingsDeleteTitle" onClick={handleDelete}>Delete Account</div>
                    </div>
                    <form action="post" className="settingsForm">
                        <div className="settingsProfilePicture">
                            <img className="settingsImg" src={`${BASE_IMAGES_URL}${user.profilePicture}`} alt="profile picture" />
                            <label htmlFor="fileInput">
                                <span className="settingsProfilePictureIcon">
                                    <box-icon name='edit-alt' ></box-icon>
                                </span>
                            </label>
                        </div>
                        <input type="file" onChange={ (e)=> setFile(e.target.files[0])} id="fileInput" style={{ display: 'none' }} />
                        <label>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder={user.username} />
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={user.email} />
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="settingsSubmit" onClick={handleUpdate}> Update</button>
                        {success && <span style={{ color: "grey" }}>Profile has been updated</span>}
                    </form>
                </div>
                <Sidebar />
            </div>
        </>
    );
}

export default Settings;
