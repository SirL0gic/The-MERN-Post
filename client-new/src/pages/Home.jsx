import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "../components/Nav";

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
      </Container>
    </main>
  );
};

export default HomePage;
