import axios from "axios";

const instance = axios.create({
  "baseURL": process.env.VUE_API_URL,
});

export default instance;
