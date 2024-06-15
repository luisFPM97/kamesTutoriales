import axiosOriginal from 'axios';
import { showNotification } from '../components/notifications/notificationSlice';
import store from '../reduxStore/store';

const axios = axiosOriginal.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use(function (config) {
  const token = store.getState().auth.token;

  // Only add Authorization header if it's not already present (prevents overwriting)
  if (!config.headers?.Authorization && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use((res) => {
  return res;
}, (error) => {
  if (error.response?.status === 401) {
    throw error; // Handle unauthorized errors appropriately (e.g., logout)
  }

  store.dispatch(showNotification({
    variant: "danger",
    message: "There was an error",
  }));
  console.log(error);
  throw error;
});

export default axios;
