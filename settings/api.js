import axios from "axios";

export default axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://yang-cms-api.herokuapp.com/"
      : "http://localhost:3005",
  timeout: 10000
});
