import { render, screen, waitFor } from "../../../utils/test-utils/test-utils";
import { CardGrid } from "./card-grid";

describe("CardGrid Tests", () => {
  it("should render the correct ammount of cards", async () => {
    const gifs = [
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
    ];
    const error = null;
    const refetch = jest.fn();

    render(<CardGrid gifs={gifs} error={error} refetch={refetch}/>);

    await waitFor(async () => {
      const gifCards = await screen.findAllByRole("img", { name: /gif/ });
      expect(gifCards.length).toEqual(2);
    });
  });
});
