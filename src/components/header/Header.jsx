import React from 'react';
import './header.css'
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="headerTitles">
                    <span className="headerTitleSm"> React & Node</span>
                    <span className="headerTitleLg"> Blog</span>
                </div>
            </div>

            <img className="headerImg" 
            src="https://www.wallsauce.com/uploads/wallsauce-com/images/thumbs/432/705da69e38e1854aa4397fba75a423554e28bc46_800__R_N_90.jpg" 
            alt="blog img" />
        </>
    );
}

export default Header;
