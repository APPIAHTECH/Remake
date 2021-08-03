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
      const response =  await axios.post(`${BASE_USER_URL}/register`, data) 
      return response.data
    },

  /*** CATEGORY DATA */
  fetchCategories: async () => { 
    const categories =  await axios.get(`${BASE_CATEGORY_URL}/`) 
    return categories.data
  },

  /*** POST DATA */
  fetchPosts: async () => { 
    const posts =  await axios.get(`${BASE_POST_URL}/`) 
    return posts.data
  },

  fetchPostsBySearch: async (search) => { 
    const posts =  await axios.get(`${BASE_POST_URL}${search}`) 
    return posts.data
  },

  fetchPost: async (postID) => { 
    const post =  await axios.get(`${BASE_POST_URL}/${postID}`) 
    return post.data
  }
};

export default apiSettings;