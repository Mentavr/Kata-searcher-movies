import axios from "axios";

const url = import.meta.env.VITE_API_BASE_URL;
const token = import.meta.env.VITE_API_AUTHORIZATION_TOKEN;

export const clientAxios = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
