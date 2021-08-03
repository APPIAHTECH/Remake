import React from 'react';
import { Link } from 'react-router-dom';
import './post.css'

const Pots = ({ title, image, category, date, description, _id }) => {
    return (
        <>
            <div className="post">
                <img className="postImg" src={image} alt="post img" className="postImg" />
                <div className="postInfo">
                    <div className="postCats">
                        {category.map((cat, index) => (
                            <span className="postCat" key={index}>{cat}</span>
                        ))}

                    </div>
                    <Link to={`/post/${_id}`} className="link">
                        <span className="postTitle">
                            {title}
                        </span>
                    </Link>
                    <span className="postDate"> {new Date(date).toDateString()}</span>
                    <p className="postDesc"> {description}</p>
                </div>
            </div>
        </>
    );
}

export default Pots;
