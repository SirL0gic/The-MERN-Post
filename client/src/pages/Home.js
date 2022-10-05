//Importing Hooks
import React, {useState, useEffect } from "react";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Bootstrap npm lib
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Importing Components
import NavBar from "../components/Nav";
import Header from "../components/Head";
import DateTime from "../components/Date";
import NewsCard from "../components/News";
import WeatherWidget from "../components/weather";
import {Tweet } from "react-twitter-widgets";
import CalendarWidget from "../components/Calendar";


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

//Custom css
import "../css/custom.css";



let HomePage = () => {
  return (
    <Container fluid className="main-container">
      <Row>
        <Col lg={12} className="no-col-nav">
          <div className="text-center">
            <NavBar />
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          <div className="main-heading-area">
            <h1 className="text-center">{<Header />}</h1>
          </div>
          <div className="date-area">
            <div className="text-center">
              <p className="date-display">{<DateTime />}</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <div className="news-area">
            <h1>News Feed</h1>
            <br></br>
            <NewsCard />
            <br></br>
            <br></br>
            <NewsCard />
            <br></br>
            <br></br>
            <NewsCard />
          </div>
        </Col>

        <Col lg={4} className="extra-container">
        <h3 className="weather-title">Weather</h3>
        <div className="weather-widget">
        <WeatherWidget />
        </div>
          
        <h3 className="twitter-title">Latest Tweets</h3>
          <div className='twitter-widget'>
            <Tweet tweetId="841418541026877441" />
          </div>

          <h3 className="events-title">Events</h3>
          <div className='calendar-widget'>
            <CalendarWidget/>
          </div>
          
        </Col>
      </Row>

      <Row>

      </Row>
    </Container>
  );
};

export default HomePage;
