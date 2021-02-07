import axios from "axios";
// import endpoint from '../../webpack.config'
export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-type": "application/json",
    authorization: "token b28dad5aea762c8f9c54ea267a853376d2a96d72",
  },
});
