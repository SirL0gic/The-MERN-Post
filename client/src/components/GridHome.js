import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

let GridHome = () => {
    return(
        <Container>
            <Row>
                <Col>1 of 3</Col>
            </Row>
            <Row>
                <Col>2 of 3</Col>
            </Row>
            <Row>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    )
}

export default GridHome;