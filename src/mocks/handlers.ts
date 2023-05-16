import { rest } from "msw";
import { Gif } from "../interfaces/gif";
import { gifApiEndpoints } from "../api/gif-api";

export const handlers = [
  rest.get(process.env.API_URL || "", (req, res, ctx) => {
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

  rest.post(gifApiEndpoints.addGif || "", async (req, res, ctx) => {
    const { url, author_id }: Gif = (await req.json()) as Gif;

    console.log("LLEGA");

    return res(
      ctx.json({
        id: 43,
        url,
        author_id,
      })
    );
  }),

  rest.delete(gifApiEndpoints.deleteGif || "", async (req, res, ctx) => {
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
