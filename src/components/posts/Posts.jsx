import React from 'react';
import Post from '../pots/Pots'
import './posts.css'

const listPost = [{},{},{},{},{},{}]
const Posts = () => {
    return (
        <>
        <div className="posts">
            { listPost.map( (post, index)=> (
                <span key={index}> <Post /> </span>
            ) ) }
        </div>
        </>
    );
}

export default Posts;
