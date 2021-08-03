import React from 'react';
import './createPost.css'
import { useState, useContext } from 'react';
import { Context } from '../../../context/Context';
import { useHistory } from 'react-router';
import api from "./../../../api/index"


const CreatePost = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)
    let history = useHistory();

    const handleSubmit = async (event) => {

        event.preventDefault()
        const newPost = {
            username: user.username,
            title, description
        }

        if (file) {
            try {
                const data = new FormData()
                const filename = `${Date.now()}${file.name}`
                data.append("name", filename) //need to be name photos for backend to accept
                data.append("file", file)
                newPost.photo = filename
               const res = await api.upload(data)
            } catch (error) { console.error(error); }
        }
        try {
            const res = await api.createPost(newPost)
            return history.push(`/post/${res.post._id}`)
        } catch (error) { console.error(error); }

    }
    return (
        <>
            <div className="write" onSubmit={handleSubmit}>´

                {file && (
                    <img
                        src={URL.createObjectURL(file)}
                        className="writeImg" />
                )}
                <form action="post" className="writeForm">
                    <div className="writeFormGroup">
                        <label htmlFor="fileInput">
                            <span className="writeIcon"><box-icon name='add-to-queue' ></box-icon></span>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                        <input type="text" placeholder="Title" className="writeInput" onChange={(e) => setTitle(e.target.value)} autoFocus={true} />
                    </div>

                    <div className="writeFormGroup">
                        <textarea placeholder="What's Up ..." type="text" onChange={(e) => setDescription(e.target.value)} className="writeInput writeText"></textarea>
                        <button className="writeSubmit" type="submit"> Publish </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreatePost;
