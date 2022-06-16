import axios from "axios";

const baseURL = `https://api.themoviedb.org/3`;

const config = {
  baseURL,
};

const request = axios.create(config);

export default request;
