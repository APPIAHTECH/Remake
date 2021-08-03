import React from "react";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";
import api from "./../../api/index"

import "./postDetail.css";
const PostDetail = () => {

    //Get post id
    const { postID } = useParams()

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
                    <img
                        src={post.photo}
                        alt="blog post img"
                        className="postDetailImg"
                    />
                </div>
                <h1 className="postDetailTitle">
                    {post.title}
                    <div className="postDetailEdit">
                        <span className="postDetailIcon"> <box-icon name="edit"></box-icon></span>
                        <span className="postDetailIcon"><box-icon type="solid" name="trash"></box-icon></span>
                    </div>
                </h1>

                <div className="postDetailInfo">
                    <span className="postDetailAuthor"> Author: <b>{post.username}</b></span>
                    <span className="postDetailPostDate">{ new Date(post.createdAt).toDateString() }</span>
                </div>
                <p className="postDetailDes"> {post.description}</p>
            </div>
        </>
    );
};

export default PostDetail;
