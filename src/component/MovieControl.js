import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Button } from 'react-bootstrap';
import '../assets/css/watchlist.css';

export const MovieControl = ({ movie, type }) => {
    const { removeMovieFormWatchlist , addMovieToWatched, moveToWatchlist, removeFromWatched } = useContext(GlobalContext)
    return (
        <div className="btn-container">
            {type === 'watchList' && (
                <>
                 <Button onClick={()=> addMovieToWatched(movie)} className="ctrl-btn" variant="light">&#128065; </Button>
                 <Button onClick={()=> removeMovieFormWatchlist(movie.id)} className="ctrl-btn" variant="light">&#215;</Button>
                </>
            )}
            {type === 'watched' && (
                <>
                 <Button onClick={()=> moveToWatchlist(movie)} className="ctrl-btn" variant="light">&#10672;</Button>
                 <Button onClick={()=> removeFromWatched(movie.id)} className="ctrl-btn" variant="light">&#215;</Button>
                
                </>
            )}
           
        </div>
    )
}
