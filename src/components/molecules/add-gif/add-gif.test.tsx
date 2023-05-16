import { render, screen, waitFor } from "../../../test-utils/test-utils";
import { AddGif } from "./add-gif";
import userEvent from "@testing-library/user-event";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import { gifApiEndpoints } from "../../../api/gif-api";

describe.only("Add Gif Component", () => {
  it("should handle successful gif added and clear input", async () => {
    const url = "http://www.mygif.com";
    const user = userEvent.setup();
    render(<AddGif />);

    const input = screen.getByPlaceholderText(/gift url/i);
    await user.type(input, url);
    expect(input).toHaveValue(url);

    const addBtn = screen.getByText("Agregar");
    await user.click(addBtn);

    await waitFor(() => {
      expect(input).toHaveValue("");
    });
  });

  it("should handle wrong url", async () => {
    const url = "ht://www.mygif.com";
    const user = userEvent.setup();
    render(<AddGif />);

    const input = screen.getByPlaceholderText(/gift url/i);
    await user.type(input, url);
    console.log("typed");
    expect(input).toHaveValue(url);

    const addBtn = screen.getByText("Agregar");
    await user.click(addBtn);

    const errorMsg = screen.getByText(/por favor ingrese/i);

    expect(input).toHaveValue(url);
    expect(errorMsg).toBeInTheDocument();
  });

  it("should handle failed gif added", async () => {
    server.resetHandlers(
      rest.post(gifApiEndpoints.addGif, (req, res, ctx) => res(ctx.status(500)))
    );

    const url = "http://www.mygif.com";
    const user = userEvent.setup();
    render(<AddGif />);

    const input = screen.getByPlaceholderText(/gift url/i);
    await user.type(input, url);

    console.log("typed: ", url);

    expect(input).toHaveValue(url);

    const addBtn = screen.getByText("Agregar");
    await user.click(addBtn);

    await waitFor(async () => {
      const errorMsg = await screen.findByText(/no fue posible agregar/i);
      expect(input).toHaveValue(url);
      expect(errorMsg).toBeInTheDocument();
    });
  });
});
