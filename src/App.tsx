import { AddGif } from "./components/molecules/add-gif/add-gif";
import { CardGrid } from "./components/organisms/card-grid/card-grid";

import "./app.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
  {
    id: 551,
    url: "https://media.tenor.com/_lo2Yoyz76oAAAAC/iron-man-avengers.gif",
    author_id: 1,
  },
  {
    id: 1070,
    url: "https://media.tenor.com/6n-OHQbly0IAAAAS/groot-happy-dance.gif",
    author_id: 1,
  },
  {
    id: 1071,
    url: "https://media.tenor.com/6n-OHQbly0IAAAAS/groot-happy-dance.gif",
    author_id: 1,
  },
  {
    id: 1074,
    url: "https://media.tenor.com/VzvFB3Apq-8AAAAC/captain-america-avengers.gif",
    author_id: 1,
  },
  {
    id: 1179,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8dQI_akJagvMDu4esJMPtUcpBYBS_bu95w&usqp=CAU",
    author_id: 1,
  },
  {
    id: 1180,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-JWq-eJOCf30Od2CK2Hqel_NgYzWlbNlog&usqp=CAU",
    author_id: 1,
  },
];

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <div className="app app__color--background">
        <AddGif />
        <CardGrid gifs={gifs} />
      </div>
    </QueryClientProvider>
  );
};

export default App;
