import React from 'react';
import Post from '../pots/Pots'
import './posts.css'
import { BASE_IMAGES_URL} from "../../config"

const Posts = ({posts}) => {
    return (
        <>
        <div className="posts">
            { posts.map( (post, index)=> (
                <span key={index}> <Post 
                    _id= {post._id}
                    title={post.title} 
                    image={ `${BASE_IMAGES_URL}${post.photo}` }
                    category={post.categories}
                    date= {post.createdAt}
                    description={post.description} /> 
                </span>
            ) ) }
        </div>
        </>
    );
}

export default Posts;
