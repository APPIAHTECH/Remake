// Configuration for Remake API
const API_URL = 'http://localhost:5000/api/';
const API_KEY = process.env.REACT_APP_API_KEY;

// For Users
const users = "users"
const BASE_USER_URL = `${API_URL}${users}`;

// For Posts
const post = "post"
const BASE_POST_URL = `${API_URL}${post}`;

// For Categories
const category = "category"
const BASE_CATEGORY_URL = `${API_URL}${category}`;

export {
  BASE_USER_URL,
  BASE_POST_URL,
  BASE_CATEGORY_URL,
  API_URL,
  API_KEY
  
};