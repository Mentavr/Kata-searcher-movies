import axios from 'axios';

const url = import.meta.env.VITE_API_BASE_URL;
const token = import.meta.env.VITE_API_AUTHORIZATION_TOKEN;

export const clientAxios = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

export const setupInterceptors = (setIsUnauthorized: (value: boolean) => void) => {
  clientAxios.interceptors.response.use(
    (response) => {
      setIsUnauthorized(false);
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        setIsUnauthorized(true);
      }
      return Promise.reject(error);
    }
  );
};
