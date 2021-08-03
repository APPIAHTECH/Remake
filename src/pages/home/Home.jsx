import React from "react";
import { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/nav/sidebar/Sidebar";
import "./home.css";

import api from "./../../api/index";

const Home = () => {
  //fetch all posts
  const [posts, setPosts] = useState([]);
  useEffect( async () => {
      const response = await api.fetchPosts()
      if( response ) setPosts( response.post )
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
