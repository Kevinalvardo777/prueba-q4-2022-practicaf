import React, { PropsWithChildren, FC } from "react";
import "./card-grid.scss";
import { GifCard } from "../../molecules/gif-card/gif-card";
import { Gif } from "../../../utils/interfaces/gif";
import { NoGifs } from "../../molecules/no-gifs/no-gifs";

interface CardGridProps extends PropsWithChildren {
  gifs: Gif[] | undefined;
  error: any;
  refetch: () => void
}

export const CardGrid: FC<CardGridProps> = ({ gifs, error, refetch: refetchGifs}) => {
  if (error) return <div> Error al cargar los gifs </div>;



  return (
    <div className="card-grid card-grid__wrapper">
      <div className="card-grip card-grid__grid">
        {gifs?.map(({ id, url }) => (
          <GifCard id={id} url={url} refetchGifs={refetchGifs} key={id} />
        ))}
        {gifs?.length === 0 && (
          <NoGifs />
        )}
      </div>
    </div>
  );
};
