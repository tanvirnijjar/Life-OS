import axios from "axios";
import { Capacitor } from "@capacitor/core";

const getBaseURL = () => {
  if (Capacitor.getPlatform() === "android") {
    return "http://127.0.1.1:8000/api";
  }

  return "http://192.168.1.40:8000/api";
};

const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;