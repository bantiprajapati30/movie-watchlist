import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/watchlist.css';
import MovieCard from './MovieCard';

function Watched() {
    const { watched } = useContext(GlobalContext);

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="heading">Watched movies</h1>
                    <Row>
                        {watched.length > 0 ? (<Col className="watchlist-movie">
                            {watched.map((movie, index) => (
                                <MovieCard key={index} movie={movie} type="watched"/>
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

export default Watched
