import { Gif } from "../../utils/interfaces/gif";
import { CreateGifArgs, DeleteGifArgs } from "./gif-service-args.interface";
import {
  ADD_GIF_SERVICE,
  DELETE_GIF_SERVICE,
  GET_GIFS_SERVICE,
} from "../../utils/constants/services-constants";
import { gifService } from "./gif-service-axios-config";

export const getGifs = () =>
  gifService
    .get<Gif[]>(
      `${GET_GIFS_SERVICE}?author_id=${process.env.REACT_APP_AUTHOR_ID}`
    )
    .then((res) => res.data);

export const createGif = (createGifArgs: CreateGifArgs) => {
  return gifService
    .post<Gif>(ADD_GIF_SERVICE, createGifArgs)
    .then((res) => res.data);
};

export const deleteGif = (deleteGifArgs: DeleteGifArgs) =>
  gifService
    .delete<Gif>(DELETE_GIF_SERVICE, { data: deleteGifArgs })
    .then((res) => res.data);
