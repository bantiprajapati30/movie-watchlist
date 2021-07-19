import React from 'react'
import '../assets/css/watchlist.css';
import { MovieControl } from './MovieControl';
function MovieCard({ movie, type }) {
    return (
        <>

            <div className="movie-Card">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title} Poster`} />
                ) : (<div className="movie-poster-wrapper">
                    <h5 className="poster-title">{movie.title}</h5>
                </div>)}
                <MovieControl type={type} movie={movie} />
            </div>

        </>
    )
}

export default MovieCard;
