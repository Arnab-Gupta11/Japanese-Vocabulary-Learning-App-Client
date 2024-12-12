import axios from "axios";

const instance = axios.create({
  baseURL: "https://dictionary-server-two.vercel.app/api/v1", //"http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const patch = (url, data) => instance.patch(url, data);
export const deleteData = (url) => instance.delete(url);

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    console.log("intercpert reponse", response);
    return response;
  },
  function (error) {
    console.log("intercpert reponse", error);
    return Promise.reject(error);
  }
);
