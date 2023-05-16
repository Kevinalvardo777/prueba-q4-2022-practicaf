import axios, { AxiosRequestConfig } from "axios";
import { Gif } from "../interfaces/gif";
import { CreateGifArgs, DeleteGifArgs } from "../interfaces/requests-args";

export const gifApiEndpoints = {
  getGifs: process.env.API_URL || "",
  addGif: process.env.API_URL || "",
  deleteGif: process.env.API_URL || "",
};

export const axiosController = new AbortController();
export const gifService = axios.create({
  signal: axiosController.signal,
});

export const fullfilledReq = (config: AxiosRequestConfig<any>): any => {
  if (config.method !== "get") {
    config.data = {
      ...config.data,
      author_id: process.env.REACT_APP_AUTHOR_ID,
    };
  }
  return config;
};

gifService.interceptors.request.use(fullfilledReq);

export const getGifs = () =>
  gifService
    .get<Gif[]>(`${gifApiEndpoints.getGifs}?author_id=${process.env.AUTHOR_ID}`)
    .then((res) => res.data);

export const createGif = (createGifArgs: CreateGifArgs) => {
  return gifService
    .post<Gif>(gifApiEndpoints.addGif, createGifArgs)
    .then((res) => res.data);
};

export const deleteGif = (deleteGifArgs: DeleteGifArgs) =>
  gifService
    .delete<Gif>(gifApiEndpoints.deleteGif, { data: deleteGifArgs })
    .then((res) => res.data);
