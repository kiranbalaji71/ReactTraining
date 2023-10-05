import axios from "axios";
import { refresh } from "./refresh";
export const URL = "http://127.0.0.1:5000";

export default axios.create({
  baseURL: URL,
});

export const PrivateAxios = axios.create({
  baseURL: URL,
});

PrivateAxios.interceptors.request.use(
  async (config) => {
    config.headers.Authorization = `Bearer ${await refresh()}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
