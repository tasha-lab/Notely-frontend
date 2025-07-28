import axios from "axios";

const Api = axios.create({
  baseURL: "https://notely-fullstack.onrender.com/api",
  // baseURL: "http://localhost:2345/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

Api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default Api;
