import axios from 'axios';

import {
  BASE_USER_URL,
  BASE_POST_URL,
  API_URL,
  API_KEY,
  BASE_CATEGORY_URL
} from './../config';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const apiSettings = {
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