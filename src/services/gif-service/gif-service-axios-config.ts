import axios, { AxiosRequestConfig } from "axios";

const axiosController = new AbortController();
export const gifService = axios.create({
  signal: axiosController.signal,
});

const fullfilledReq = (config: AxiosRequestConfig<any>): any => {
  if (config.method !== "get") {
    config.data = {
      ...config.data,
      author_id: process.env.REACT_APP_AUTHOR_ID,
    };
  }
  return config;
};

gifService.interceptors.request.use(fullfilledReq);
