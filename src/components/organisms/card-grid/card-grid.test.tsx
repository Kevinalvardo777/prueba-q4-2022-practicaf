import { render, screen } from "@testing-library/react";
import { CardGrid } from "./card-grid";
import { Gif } from "../../../utils/interfaces/gif";

const gif: Gif = {
  id: 1,
  url: "https://media.tenor.com/ASs_x_mykqUAAAAC/avengers-marvel-cinematic-universe.gif",
  author_id: 1,
};
const gifs: Gif[] = [{ ...gif }, { ...gif, id: 2 }, { ...gif, id: 3 }];

describe("CardGrid Tests", () => {
  it("should render the correct ammount of card", () => {
    render(<CardGrid gifs={gifs} />);

    const gifCards = screen.getAllByRole("img");

    expect(gifCards.length).toEqual(6);
  });
});
