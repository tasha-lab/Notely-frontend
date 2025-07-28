import axios from "axios";

const Api = axios.create({
  baseURL: "https://notely-fullstack.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Api;
