import React from 'react';
import PostDetail from '../detail/PostDetail';
import Sidebar from "../nav/sidebar/Sidebar";

import './single.css'

const Single = () => {
    return (
        <>
            <div className="single">
                <PostDetail/>
                <Sidebar />
            </div>
        </>
    );
}

export default Single;
