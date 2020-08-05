import axios from 'axios';

// The URL for the API server
export default axios.create({
  baseURL: 'http://localhost:3001',
});
