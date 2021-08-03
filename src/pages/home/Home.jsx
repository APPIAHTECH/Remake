import React from "react";
import { useEffect, useState } from "react";

import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/nav/sidebar/Sidebar";
import "./home.css";

import api from "./../../api/index";
import { useLocation } from "react-router-dom";

const Home = () => {
  //fetch all posts
  const [posts, setPosts] = useState([]);
  const { search } = useLocation()

  useEffect( async () => {
    let response = null
    
    if (search) response = await api.fetchPostsBySearch( search ) // fetch post with query params, use to fetch post by user or category name
    else response = await api.fetchPosts() // if no search default beheviour is to load all post
    
    if( response ) setPosts( response.post )

  }, [search]);

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
