//Importing-Hooks
import React from "react";

//Bootstrap-Bundle-JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//Bootstrap-npm-lib
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
      </Row>

      <Row className="heading-row">
        <Col lg={12} className="navigation-col-one">
          <div className="text-center">
            <h1 className="text-center">{<Header />}</h1>
            <p className="date-display">{<DateTime />}</p>
            <hr></hr>
          </div>
        </Col>
      </Row>

      <Row className="new-article-row">
        <Col lg={12} className="news-article-col-one">
          <div className="new-article-container">
            <h1 className="article-title">{props.title}</h1>
            <h4 className="article-sub-title">{props.subtitle}</h4>
            <br></br>
            <p className="info-title">Published: {props.date} | By: {props.author}</p>
            <img
              className="news-img"
              src={props.image}
            ></img>
            <div className="para-container">
              <p className="para">{props.paraone}</p>
              <p className="para">{props.paratwo}</p>
              <p className="para">{props.parathree}</p>
              <p className="para">{props.parafour}</p>
              <p className="para">{props.parafive}</p>
              <p className="para">{props.parasix}</p>
              <p className="para">{props.paraseven}</p>
              <p className="para">{props.paraeight}</p>
              <p className="para">{props.paranine}</p>
              <p className="para">{props.paraten}</p>
            </div>
          </div>
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
