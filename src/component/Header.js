import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../assets/css/header.css'
const Header = () => {
    return (
        <>
            <Container fluid>
                <Row className="header">
                    <Container>
                        <Row>
                            <Col md={5} className="brand-name">
                            <h3> <Link to="/">WatchList</Link></h3>
                            </Col>
                            <Col md={7} className="nav-btn">
                                   
                                            <Link to="/">Watch List</Link>
                                       
                                            <Link to="/watched">Watched</Link>
                                       
                                            <Link to="/add"> <Button variant="success">+ADD</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    )
}
export default Header;