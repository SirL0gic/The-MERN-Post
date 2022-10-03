import DateTime from '../components/Date';

import React, {useState, useEffect } from "react";
//extra css fro BS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap npm lib
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Custom css
import './custom.css';

import NavBar from '../components/Nav';

let GridHome = () => {
    
    return(
        <Container>
            <Row>
                <Col xxl={12}>
                <div className="main-heading">
                    <h1 className="text-center">The MERN Post</h1>
                </div>
                <div className="date-area">
                    <div className="text-center"> 
                    <p className="date-display">{<DateTime />}</p>
                    </div>
                </div>
                </Col>
            </Row>

            <Row>
                <Col>
                <NavBar />
                </Col>
            </Row>
            <Row>
                <Col>3 of 3</Col>
            </Row>
        </Container>
    );
}

export default GridHome;