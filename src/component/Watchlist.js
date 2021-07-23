import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/watchlist.css';
import MovieCard from './MovieCard';

export const Watchlist = () => {
    const { watchList } = useContext(GlobalContext);

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="heading">My Watchlist</h1>
                    <Row>
                        {watchList.length > 0 ? (<Col className="watchlist-movie">
                            {watchList.map((movie, index) => (
                                <MovieCard key={index} movie={movie} type="watchList"/>
                            ))}
                        </Col>) : (<Col>
                            <h5 className="mt-2 text-danger">No movie in your list, Please select first</h5>
                            <p className="text-center">🙁🙁🙁</p>
                        </Col>)}

                    </Row>

                </Col>
            </Row>
        </Container>

    )
}


