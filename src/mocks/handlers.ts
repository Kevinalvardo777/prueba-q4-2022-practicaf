import { rest } from "msw";
import { Gif } from "../utils/interfaces/gif";
import {
  ADD_GIF_SERVICE,
  DELETE_GIF_SERVICE,
  GET_GIFS_SERVICE,
} from "../utils/constants/services-constants";

export const handlers = [
  rest.get(GET_GIFS_SERVICE, (_, res, ctx) => {
    // req.url.searchParams
    return res(
      ctx.json([
        {
          id: 43,
          url: "https://media.tenor.com/3MhDaiH-9ckAAAAC/captain-america.gif",
          author_id: 1,
        },
        {
          id: 550,
          url: "https://media.tenor.com/32g9ZstNXGMAAAAC/avengers-endgame-captain-america.gif",
          author_id: 1,
        },
      ])
    );
  }),

  rest.post(ADD_GIF_SERVICE, async (req, res, ctx) => {
    const { url, author_id }: Gif = (await req.json()) as Gif;

    return res(
      ctx.json({
        id: 43,
        url,
        author_id,
      })
    );
  }),

  rest.delete(DELETE_GIF_SERVICE, async (req, res, ctx) => {
    const { url, author_id }: Gif = (await req.json()) as Gif;

    return res(
      ctx.json({
        id: 43,
        url,
        author_id,
      })
    );
  }),
];
