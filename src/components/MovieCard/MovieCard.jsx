import React from 'react';
import { StarRating } from '../StartRating/StarRating';
import './styles.css';

export const MovieCard = ({ src, title, of = 5 }) => {
    return (
        <div className="movie-card">
            <img className="movie-card__image" src={src} alt={title} />
            <div className="movie-card__info">
                <h2 className="movie-card__title">{title}</h2>
                <StarRating of={5} />
            </div>
        </div>
    );
}
