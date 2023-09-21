import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "../components/Nav";
import Header from "../components/Head";
import DateTime from "../components/Date";
import AnimationNews from "../components/Animation";
import NewsCard from "../components/News";
import Basic from "../components/Weather";
import { Tweet } from "react-twitter-widgets";
import CalendarWidget from "../components/Calendar";
import FooterComp from "../components/Footer";

let HomePage = () => {
  const [allArticles, setAllArticles] = useState([]);

  let getAllArticles = async () => {
    try {
      const dev_url = "http://localhost:4000";
      const production_url = "https://thereactpost.xyz";
      axios.defaults.baseURL = production_url;

      const response = await axios.get("/api/top-headlines");
      setAllArticles(response.data);
      sessionStorage.setItem("articles", JSON.stringify(response.data)); //setting storage
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllArticles();
  }, []);


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
              <h1 className="news-feed-title">News Feed</h1>
              <br></br>
              <ul style={{ listStyle: "none", paddingLeft:"0px" }}>
                {allArticles.map((item, index) => {
                  return (
                    <li key={index}>
                      <NewsCard
                        articleIndex={index}
                        image={item.urlToImage}
                        title={item.title}
                        author={item.author}
                        date={item.publishedAt.slice(0, 10)}
                        description={item.description}
                        link={item.url}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </Col>

          <Col lg={4} className="extra-container">
            <h3 className="weather-title">Weather</h3>
            <div className="weather-widget">
              {" "}
              <Basic />{" "}
            </div>

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
          <Col className="footer-col">
            {" "}
            <div className="footer-box">
              {" "}
              <FooterComp />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default HomePage;
