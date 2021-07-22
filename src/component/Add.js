import React, { useState } from 'react'
import { Form, Container, Row, Col } from 'react-bootstrap';
import '../assets/css/add.css';
import ResultCard from './ResultCard';

function Add() {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);

    const onChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=50e2429fc4ce5e4d7bf19d34d9893713&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then((res) => res.json()).then(data => {
            console.log(data)
            if (!data.errors) {
                setResults(data.results)
            }
            else {
                setResults([]);
            }
        })
    }
    return (
        <>
            <Container>
                <Form.Control
                    className="add-form"
                    type="text"
                    placeholder="Search movie"
                    value={input}
                    onChange={onChange}
                />
                <Row>
                    <Col>
                        {results.length > 0 && (
                            <Col> 
                                {results.map(movie => (
                                    <ResultCard key={movie.id}
                                        movie={movie}
                                    />
                                ))}
                            </Col>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Add
