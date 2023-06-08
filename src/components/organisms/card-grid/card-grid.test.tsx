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
    const refetch = jest.fn();
    const displayAlert = jest.fn();

    render(<CardGrid gifs={gifs} refetch={refetch} displayAlert={displayAlert} />);

    
    const gifCards = screen.getAllByRole("img", { name: /gif/ });
    expect(gifCards.length).toEqual(2);
    
  });

  it.only("should show no-gifs page if cards length is 0", async () => {
    const gifs: any[] = [];
    const refetch = jest.fn();
    const displayAlert = jest.fn();

    render(<CardGrid gifs={gifs} refetch={refetch} displayAlert={displayAlert} />);

    
      const gifCards = screen.queryAllByRole("img", { name: /gif/ });
      const noGifCardsText = screen.getByText("No posee gifs")
      expect(gifCards.length).toEqual(0);
      expect(noGifCardsText).toBeInTheDocument();
    
  })

});
