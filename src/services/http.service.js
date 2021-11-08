import axios from 'axios';

// import store from '../redux/store';
// import { signOut } from '../redux/slices/auth';

import storage from './storage.service';

const defaultResponse = (response) => {
  return response;
};

const errorInterceptor = (error) => {
  if (error.response.status === 401) {
    // store.dispatch(signOut());
  }
  return Promise.reject(error);
};

// eslint-disable-next-line no-undef
const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:4000';
const http = axios.create({ baseURL });
http.interceptors.response.use(defaultResponse, errorInterceptor);

const AUTH_STORAGE_KEY = 'auth';

export const getAuthHeader = () => {
  const auth = storage.getItem(AUTH_STORAGE_KEY);
  const accessToken = auth ? auth.access_token : null;
  return { Authorization: `Bearer ${accessToken}` };
};

const get = (url, headers = {}, params = {}) => {
  const authHeader = getAuthHeader();
  return http.get(url, {
    ...params,
    headers: {
      ...authHeader,
      ...headers,
    },
  });
};

const post = (url, data, headers = {}, params = {}) => {
  const authHeader = getAuthHeader();
  return http.post(url, data, {
    ...params,
    headers: {
      ...authHeader,
      ...headers,
    },
  });
};

function remove(url, data, headers = {}) {
  const authHeader = getAuthHeader();
  return http.delete(url, {
    headers: {
      ...authHeader,
      ...headers,
    },
    data,
  });
}

export default {
  http,
  get,
  post,
  remove,
};
