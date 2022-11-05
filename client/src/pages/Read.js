//Importing-Hooks
import React, { useState, useEffect } from "react";

// Bootstrap-Bundle-JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Bootstrap-npm-lib
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Bootstrap-CSS
import "bootstrap/dist/css/bootstrap.min.css";

let ReadPage = () => {
    return (
        <Container fluid className="main-container">
           <Row className="navigation-area"></Row>
           <Row className="heading-area"></Row>
           <Row></Row>
           <Row className="footer-area"></Row>

        </Container>


    )
};

export default Readpage;