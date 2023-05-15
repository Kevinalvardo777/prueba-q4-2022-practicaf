import React, { PropsWithChildren, FC } from "react";
import "./card-grid.scss";
import { Gif } from "../../../interfaces/gif";
import { GifCard } from "../../molecules/gif-card/gif-card";

interface CardGridProps extends PropsWithChildren {
  gifs: Gif[];
}

export const CardGrid: FC<CardGridProps> = ({ gifs }) => {
  return (
    <div className="card-grid card-grid__wrapper">
      <div className="card-grip card-grid__grid">
        {gifs.map(({ id, url }) => (
          <GifCard id={id} url={url} key={id} />
        ))}
      </div>
    </div>
  );
};
