import axios from 'axios';

import {
  BASE_USER_URL,
  BASE_POST_URL,
  BASE_CATEGORY_URL,
  API_URL,
  API_KEY
} from './../config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const apiSettings = {

  /*** USER DATA */

  authRegister: async (data) => {
    const response = await axios.post(`${BASE_USER_URL}/register`, data)
    return response.data
  },

  authLogin: async (username, password) => {
    const response = await axios.post(`${BASE_USER_URL}/login`, { username, password })
    return response.data
  },

  upload: async (photo) => {
    const uploaded = await axios.post(`${BASE_USER_URL}/upload`, photo)
    return uploaded.data
  },

  /*** CATEGORY DATA */
  fetchCategories: async () => {
    const categories = await axios.get(`${BASE_CATEGORY_URL}/`)
    return categories.data
  },

  /*** POST DATA */
  fetchPosts: async () => {
    const posts = await axios.get(`${BASE_POST_URL}/`)
    return posts.data
  },

  fetchPostsBySearch: async (search) => {
    const posts = await axios.get(`${BASE_POST_URL}${search}`)
    return posts.data
  },

  fetchPost: async (postID) => {
    const post = await axios.get(`${BASE_POST_URL}/${postID}`)
    return post.data
  },

  createPost: async (post) => {
    const createdPost = await axios.post(`${BASE_POST_URL}/create`, post)
    return createdPost.data
  },

  deletePost: async (postID, username) => {
    const postDeleted = await axios.delete(`${BASE_POST_URL}/${postID}`,  { data: { username }})
    return postDeleted.data
  },

  updatePost: async (postID, newPost) => {
    console.log(newPost);
    const postUpdated = await axios.put(`${BASE_POST_URL}/${postID}`,  newPost)
    return postUpdated.data
  }
};

export default apiSettings;