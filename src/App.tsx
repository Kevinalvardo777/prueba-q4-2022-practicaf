import { AddGif } from "./components/molecules/add-gif/add-gif";
import { CardGrid } from "./components/organisms/card-grid/card-grid";
import "./app.scss";
import { useEffect, useState } from "react";
import { Gif } from "./utils/interfaces/gif";
import { useQuery } from "@tanstack/react-query";
import { fetchGifs } from "./services/gif-service/gif-service";
import { Alert } from "./components/atoms/alert/alert";

interface AlertInfoArgs {
  show: boolean, 
  type?: "success" | "error" , 
  message?: string
}

const App = () => {
  const [gifs, setGifs] = useState<Gif[] | undefined>(undefined);
  const [ alertInfo, setAlertInfo ] = useState<AlertInfoArgs>({show:false})
  

  const { data, remove, refetch } = useQuery(
    ["gifs"],
    () => fetchGifs(),
    {
      enabled: gifs === undefined,
    }
  );

  useEffect(() => {
    console.log("imprimiendo");
    
    if ((data as any)?.code_error )  {
      displayAlert("mensaje de error", "error")
    } else if (data) {
      console.log("algo")
      setGifs(data)      
    }
    

    return () => remove();
  }, [data]);

  const displayAlert = (message: string, type: 'success' | 'error') => {
    setAlertInfo({show: true, type, message})
       setGifs([])
       setTimeout(() => {
          setAlertInfo({show: false})
       }, 6000);
  }

  return (
    <div className="app app__color--background">
      <AddGif refetch={refetch} displayAlert={displayAlert} />
      <CardGrid gifs={gifs} refetch={refetch} displayAlert={displayAlert} />
      <Alert show={alertInfo.show} type={alertInfo.type}>{alertInfo.message}</Alert>
    </div>
  );
};

export default App;
