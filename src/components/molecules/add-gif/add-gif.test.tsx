import { render, screen, waitFor } from "../../../utils/test-utils/test-utils";
import { AddGif } from "./add-gif";
import userEvent from "@testing-library/user-event";
import { server } from "../../../mocks/server";
import { rest } from "msw";
import { ADD_GIF_SERVICE } from "../../../utils/constants/services-constants";

describe.only("Add Gif Component", () => {
  it("should handle successful gif added and clear input", async () => {
    const refetch = jest.fn();

    const url = "http://www.mygif.com";
    const user = userEvent.setup();
    render(<AddGif refetch={refetch} />);

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
    const refetch = jest.fn();

    const url = "ht://www.mygif.com";
    const user = userEvent.setup();
    render(<AddGif refetch={refetch} />);

    const input = screen.getByPlaceholderText(/gift url/i);
    await user.type(input, url);
    expect(input).toHaveValue(url);

    const addBtn = screen.getByText("Agregar");
    await user.click(addBtn);

    const errorMsg = screen.getByText(/por favor ingrese/i);

    expect(input).toHaveValue(url);
    expect(errorMsg).toBeInTheDocument();
  });

  it("should handle failed gif added", async () => {
    const refetch = jest.fn();

    server.resetHandlers(
      rest.post(ADD_GIF_SERVICE, (_, res, ctx) => res(ctx.status(500)))
    );

    const url = "http://www.mygif.com";
    const user = userEvent.setup();
    render(<AddGif refetch={refetch} />);

    const input = screen.getByPlaceholderText(/gift url/i);
    await user.type(input, url);

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
