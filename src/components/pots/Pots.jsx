import React from 'react';
import './post.css'

const Pots = () => {
    return (
        <>
            <div className="post">
                <img className="postImg" src="https://blog.ohhdeer.com/s/Allison-Wallpaper-November-Main-High-Res.jpg" alt="post img" className="postImg" />
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Music</span>
                        <span className="postCat">Life</span>
                    </div>
                    <span className="postTitle">
                        Lorem ipsum dolor
                    </span>
                    <span className="postDate"> 1 hour ago</span>
                    <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nemo iure totam fugit nihil cumque quam, 
                    a quo quod eos perferendis aliquid perspiciatis deserunt corporis consequatur provident neque repellendus voluptas unde?</p>
                </div>
            </div>
        </>
    );
}

export default Pots;
