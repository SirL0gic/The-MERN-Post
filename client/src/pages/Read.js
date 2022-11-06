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
import Header from "../components/Head";
import DateTime from "../components/Date";

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

      <Row className="heading-row">
        <Col lg={12} className="navigation-col-one">
          <div className="text-center">
            <h1 className="text-center">{<Header />}</h1>
            <p className="date-display">{<DateTime />}</p>
          </div>
        </Col>
      </Row>

      <Row className="new-article-row">
        <Col lg={12} className="news-article-col-one">
            <h1>Title</h1>
            <h2>Sub Title</h2>
            <p>Date</p>
            <p>Author</p>
            <p>image</p>
            <p>body</p>
        </Col>
      </Row>

      <Row className="footer-row">
        <Col lg={12} className="footer-col-one">
          <FooterComp />
        </Col>
      </Row>
    </Container>
  );
};

export default ReadPage;
