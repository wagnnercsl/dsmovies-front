import React from 'react';
import MovieScore from '../MovieScore';
import './styles.css';

const MovieCard = ({ movie }) => {
    return (
        <div className="dsmovie-movie-card-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </div>
        </div>
    );
}

export default MovieCard;