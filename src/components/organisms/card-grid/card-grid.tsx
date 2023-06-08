import React, { PropsWithChildren, FC } from "react";
import "./card-grid.scss";
import { GifCard } from "../../molecules/gif-card/gif-card";
import { Gif } from "../../../utils/interfaces/gif";
import { NoGifs } from "../../molecules/no-gifs/no-gifs";

interface CardGridProps extends PropsWithChildren {
  gifs: Gif[] | undefined;
  refetch: () => void
  displayAlert: (message: string, type: 'success' | 'error') => void
}

export const CardGrid: FC<CardGridProps> = ({ gifs, displayAlert, refetch: refetchGifs}) => {

  return (
    <div className="card-grid card-grid__wrapper">
      <div className="card-grip card-grid__grid">
        {gifs?.map(({ id, url }) => (
          <GifCard id={id} url={url} refetchGifs={refetchGifs} key={id} displayAlert={displayAlert}/>
        ))}
        {(gifs?.length === 0 || gifs === undefined) && (
          <NoGifs />
        )}
      </div>
    </div>
  );
};
