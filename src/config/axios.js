import axios from "axios";

const axiosConfig = () =>
  axios.create({
    baseURL: "http://192.168.15.118:3333",
  });

export default axiosConfig;
