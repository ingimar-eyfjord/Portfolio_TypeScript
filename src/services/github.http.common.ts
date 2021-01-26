import axios from "axios";
// import endpoint from '../../webpack.config'
export default axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-type": "application/json",
    authorization: `token 8a2845fe21a6ab72772faebbc0aa2555553e06c2`,
  },
});
