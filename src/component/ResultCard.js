import React, { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';

function ResultCard({movie}) {
    const { addMovieToWatchList, watchList } = useContext(GlobalContext);

    let storedMovie=watchList.find(o=>o.id===movie.id);

    const disabledWatchList=storedMovie ? true : false;
    return (
        <>
            <Container className="m-container">
                <Row>
                    <Col md="4" className="resultCard mt-3">
                        {movie.poster_path ? (<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />) : <div className="poster-wrapper"></div>
                        }
                    </Col>
                    <Col md="8" className="content">
                        <h2>{movie.title}</h2>
                        <h3>{movie.release_date ? movie.release_date.substring(0, 4) : " -"}</h3>
                        <div className="module line-clamp">
                            <p>{movie.overview}</p>
                        </div>
                        <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star-half-alt"></i>{movie.vote_average}
                        <Button className="btn-add-watchlist" variant="success" disabled={disabledWatchList} onClick={()=> addMovieToWatchList(movie)}>ADD TO WATCHLIST</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ResultCard
