import { AddGif } from "./components/molecules/add-gif/add-gif";
import { CardGrid } from "./components/organisms/card-grid/card-grid";
import "./app.scss";
import { useEffect, useState } from "react";
import { Gif } from "./utils/interfaces/gif";
import { useQuery } from "@tanstack/react-query";
import { fetchGifs } from "./services/gif-service/gif-service";

const App = () => {
  const [gifs, setGifs] = useState<Gif[] | undefined>(undefined);

  const { data, error, remove, refetch } = useQuery(
    ["gifs"],
    () => fetchGifs(),
    {
      enabled: gifs === undefined,
    }
  );

  useEffect(() => {
    if (data) setGifs(data);

    return () => remove();
  }, [data]);

  return (
    <div className="app app__color--background">
      <AddGif refetch={refetch} />
      <CardGrid error={error} gifs={gifs} />
    </div>
  );
};

export default App;
