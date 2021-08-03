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

  /*** CATEGORY DATA */

  fetchCategories: async () => { 
    const categories =  await axios.get(`${BASE_CATEGORY_URL}/`) 
    console.log(categories);
    return categories.data
  },

  /*** POST DATA */
  fetchPosts: async () => { 
    const posts =  await axios.get(`${BASE_POST_URL}/`) 
    return posts.data
  },

  fetchPost: async (postID) => { 
    const post =  await axios.get(`${BASE_POST_URL}/${postID}`) 
    return post.data
  }
};

export default apiSettings;