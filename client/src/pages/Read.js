//Importing-Hooks
import React from "react";

// Bootstrap-Bundle-JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Bootstrap-npm-lib
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Bootstrap-CSS
import "bootstrap/dist/css/bootstrap.min.css";

//Importing-Components..
import NavBar from "../components/Nav";
import FooterComp from "../components/Footer";

//Custom-CSS
import "../css/read.css";

let ReadPage = (props) => {
    return (
        <Container fluid className="main-container">
           <Row className="navigation-row">
            <Col lg={12} className="navigation-col-one">
                <NavBar />
            </Col>
            {props.title}
           </Row>

           <Row className="heading-row"></Row>
           <Row className="new-article-row"></Row>

           <Row className="footer-row">
           <Col lg={12} className="footer-col-one">
           <FooterComp />
            </Col>
            </Row>
        </Container>


    )
}

export default ReadPage;