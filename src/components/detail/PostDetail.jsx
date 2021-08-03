import React from "react";
import { Link, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context"
import { useHistory } from "react-router";
import { BASE_IMAGES_URL} from "../../config"
import api from "./../../api/index"

import "./postDetail.css";
const PostDetail = () => {

    //Get post id
    const { postID } = useParams()
    const { user } = useContext(Context)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    let history = useHistory();

    const handleDelete = async ()=>{
        try {
            const res = await api.deletePost( postID, user.username )
            return history.push('/')
        } catch (error) {
            console.error(error);
        }
    }

    const handleUpdate = async () => {
        try {
            const newPost =  {
                username: user.username,
                title,
                description
            }
          const res = await api.updatePost(postID, newPost)
          window.location.reload()
          setUpdateMode(false)
        } catch (err) { console.error(err);}
      };

    //Fetch post data by id
    const [post, setPost] = useState([])
    useEffect( async () => {
        const response = await api.fetchPost(postID)
        if( response ) setPost( response.post )
    }, [postID]); //if id changes load data

    return (
        <>
            <div className="postDetail">
                <div className="postDetailWrapper">
                    {post.photo && (
                        <img
                            src={ `${BASE_IMAGES_URL}${post.photo}` }
                            alt="blog post img"
                            className="postDetailImg"
                        />
                    )}{
                        updateMode ? ( <input type="text" value={title}  onChange={(e) => setTitle(e.target.value)} className="postDetailTitleInput" autoFocus/>) : (
                            <h1 className="postDetailTitle">
                                {post.title}
                                {user && post.username === user.username && (
                                    <div className="postDetailEdit">
                                        <span className="postDetailIcon" onClick={() => setUpdateMode(true)}> <box-icon name="edit"></box-icon></span> 
                                        <span className="postDetailIcon" onClick={handleDelete}><box-icon type="solid" name="trash"></box-icon></span>
                                    </div>
                                    )
                                }
                            </h1>
                        )
                    }
                </div>
                <div className="postDetailInfo">
                    <span className="postDetailAuthor"> Author: <Link to={`/?user=${post.username}`} className="link">  <b>{post.username}</b> </Link> </span>
                    <span className="postDetailPostDate">{ new Date(post.createdAt).toDateString() }</span>
                </div>
                { updateMode ? (<textarea className="postDetailDescriptionInput" value={description} onChange={(e) => setDescription(e.target.value)}/>) : (<p className="postDetailDes"> {post.description}</p>)}
                {updateMode && (
                    <button className="PostsinglePostButton" onClick={handleUpdate}> Update</button>
                )}
            </div>
        </>
    );
};

export default PostDetail;
