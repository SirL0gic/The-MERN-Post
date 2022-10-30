//Importing Hooks
import React, { useState, useEffect } from "react";

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
import { Tweet } from "react-twitter-widgets";
import CalendarWidget from "../components/Calendar";
import AnimationNews from "../components/Animation";
import FooterComp from "../components/Footer";

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
        <Col lg={12} className="no-col-nav">
          <div className="main-heading-area">
            <h1 className="text-center">{<Header />}</h1>
          </div>
          <div className="date-area">
            <div className="text-center">
              <p className="date-display">{<DateTime />}</p>
            </div>
          </div>
          <div className="breaking-news">
            <p className="text-center">{<AnimationNews />}</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="news-container">
          <div className="news-area">
            <h1>News Feed</h1>
            <br></br>
            <NewsCard title="Elon Musk planned Twitter layoffs are imminent" author="Gerrit De Vynck" mini="Elon Musks plans to lay off large number of Twitter employees are getting underway, a course of action that could prompt fundamental changes in the way more than 200 million daily users experience the site." image="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WKECRV6SQ6EZHD4KAUXNIPE3VM.JPG&w=916" />
            <br></br>
            <br></br>
            <NewsCard title="Russia pauses grain deal after Ukraine strikes warships in Crimea" author="" mini="" image="" />
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
          <div className="twitter-widget">
            <Tweet tweetId="841418541026877441" />
          </div>

          <h3 className="events-title">Events</h3>
          <div className="calendar-widget">
            <CalendarWidget />
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="footer-col">
        <FooterComp />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
