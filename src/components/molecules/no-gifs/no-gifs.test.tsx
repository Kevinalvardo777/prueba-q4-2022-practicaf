import { render, screen } from "../../../utils/test-utils/test-utils";
import { NoGifs } from "./no-gifs";

describe("NoGifs Tests", () => {
    it("should render text", async () => {
        render(<NoGifs />)
        const textNoGifs = screen.getByText("No posee gifs")
        expect(textNoGifs).toBeInTheDocument()
    })
})