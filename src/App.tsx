import { Button } from "./components/atoms/button/button";
import { Input } from "./components/atoms/input/input";
import { AddGif } from "./components/molecules/add-gif/add-gif";
import { CardGrid } from "./components/organisms/card-grid/card-grid";

const App = () => {
  return (
    <>
      <AddGif />
      <CardGrid />
    </>
  );
};

export default App;
