import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "../components/Nav";
import Header from "../components/Head";
import DateTime from "../components/Date";
import AnimationNews from "../components/Animation";
import NewsCard from "../components/News";
import Basic from "../components/weather";
import { Tweet } from "react-twitter-widgets";
import CalendarWidget from "../components/Calendar";
// import FooterComp from "../components/Footer";

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

        <Row>
          <Col lg={8} className="news-container">
            <div className="news-area">
              <h1>News Feed</h1>
              <br></br>
              <NewsCard
                title="Elon Musk planned Twitter layoffs are imminent"
                link="/read-elon"
                height="440px"
                author="Gerrit De Vynck"
                mini="Elon Musks plans to lay off large number of Twitter employees are getting underway, a course of action that could prompt fundamental changes in the way more than 200 million daily users experience the site."
                image="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WKECRV6SQ6EZHD4KAUXNIPE3VM.JPG&w=916"
              />
              <br></br>
              <br></br>
              <NewsCard
                title="Russia pauses grain deal after Ukraine strikes warships in Crimea"
                link="/read-russia"
                height="460px"
                author="Mary Ilyushina"
                mini="Russia suspended its participation in the U.N.-brokered deal that allowed Ukraine to export its grain and other agricultural products from Black Sea ports after claiming that Kyiv used the corridor to attack Kremlin ships, reigniting concerns about global food insecurity."
                image="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KNNJEFH4DFY3QFHPLNPWL7LFAE.jpg&w=916"
              />
              <br></br>
              <br></br>
              <NewsCard
                title="Inside Google new Halloween-themed playable Doodle"
                link="/read-google"
                height="480px"
                author="Shannon Liao"
                mini="When people open Google.com, the tech company Doodle team has a few seconds to hook a visitor into engaging with their games, illustrations or historical facts. This Halloween, Google is inviting people to play an online multiplayer game akin to arcade and classic phone game “Snake.”"
                image="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/EKTPQI3ZQNEC7K5UB6DKDMDT5Y.jpg&w=1440"
              />
            </div>
          </Col>

          <Col lg={4} className="extra-container">
            <h3 className="weather-title">Weather</h3>
            <div className="weather-widget"> <Basic/> </div>

            <h3 className="twitter-title">Latest Tweets</h3>
            <div className="twitter-widget">
              <Tweet tweetId="1586484282423496704" />
            </div>

            <h3 className="events-title">Events</h3>
            <div className="calendar-widget">
              <CalendarWidget />
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="footer-col">{/* <FooterComp /> */}</Col>
        </Row>
      </Container>
    </main>
  );
};

export default HomePage;
