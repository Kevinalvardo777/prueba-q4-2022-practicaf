import React, { useState, FC } from "react";
import "./gif-card.scss";
import { Button } from "../../atoms/button/button";
import DeleteIcon from "../../../assets/delete-icon.svg";
import { useGifCard } from "./use-gif-card/use-gif-card";

interface GifCardProps {
  id: number, 
  url: string, 
  refetchGifs: () => void
  displayAlert: (message: string, type: 'success' | 'error') => void
}

export const GifCard: FC<GifCardProps> = ({ id, url, refetchGifs, displayAlert } ) => {
  const { showDeleteOptions, handleDelete, handleToggleDeleteOptions } =
    useGifCard({id, url, refetchGifs, displayAlert});

  return (
    <div className="gif-card gif-card__wrapper">
      {showDeleteOptions && (
        <div className="gif-card gif-card__cover">
          <h3>¿Deseas eliminar este GIF?</h3>
          <Button onClick={handleDelete}>Eliminar</Button>
          <Button type="secondary" onClick={handleToggleDeleteOptions}>
            Cancelar
          </Button>
        </div>
      )}
      <img
        className="gif-card gif-card__back-image"
        src={url}
        alt={`gif #${id}`}
      />
      <div className="gif-card__icon-btn-wrapper">
        <Button type="circular" onClick={handleToggleDeleteOptions}>
          <img
            className="gif-card gif-card__icon-image"
            src={DeleteIcon}
            alt="Delete icon"
          />
        </Button>
      </div>
    </div>
  );
};
