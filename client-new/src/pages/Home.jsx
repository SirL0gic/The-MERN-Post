import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "../components/Nav";
import Header from "../components/Head";
import DateTime from "../components/Date";
import AnimationNews from "../components/Animation";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

let HomePage = () => {
  return (
    <main>
      <Container fluid className="main-container">
        <Row>
          <Col lg={12} className="no-col-nav">
            <div className="text-center">
              <NavBar />
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12} className="no-col-nav">
            <div className="main-heading-area">
              <Header />
            </div>
            <div className="date-area">
              <div className="text-center">
                <time className="date-display">{<DateTime />}</time>
              </div>
            </div>
            <div className="breaking-news">
              <div className="text-center">{<AnimationNews />}</div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default HomePage;
