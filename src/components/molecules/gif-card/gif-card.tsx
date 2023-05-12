import React, { useState, FC } from 'react'
import './gif-card.scss'
import { Button } from '../../atoms/button/button'
import DeleteIcon from "../../../assets/delete-icon.svg";
import { useGifCard } from './use-gif-card/use-gif-card';
import { Gif } from '../../../interfaces/gif';

export const GifCard:FC<Gif> = ({id, url}) => {

  const {showDeleteOptions, handleDelete, handleToggleDeleteOptions } = useGifCard()

  return (
    <div className='gif-card gif-card__wrapper'>
        {showDeleteOptions && <div className='gif-card gif-card__cover'>
            <h3>¿Deseas eliminar este GIF?</h3>
            <Button onClick={handleDelete}>Eliminar</Button >
            <Button type='secondary' onClick={handleToggleDeleteOptions}>Cancelar</Button >
        </div>}
        <img className='gif-card gif-card__back-image' src={url} alt={`gif #${id}`} />

        {/* TODO: MODIFICAR BUTTON PARA BOTONES CIRCULARES */}
        <div className='gif-card__icon-btn-wrapper'>
          <Button type='circular' onClick={handleToggleDeleteOptions}>
            <img className="gif-card gif-card__icon-image" src={DeleteIcon} alt="Delete icon" />
            {/* texto */}
          </Button>
        </div>
    </div>
  )
}
