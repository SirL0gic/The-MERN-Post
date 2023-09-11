import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "../components/Nav";
import Header from "../components/Head";
import DateTime from "../components/Date";

let ReadPage = () => {
  let { id } = useParams(); // Get ID from URL
  let storedArticles = JSON.parse(sessionStorage.getItem('articles')); // Get all articles from session storage
  let article = storedArticles ? storedArticles[id] : null; // Get the specific article using the ID

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
            <h1 className="article-title">{article.title}</h1>
            <h4 className="article-sub-title">{article.description}</h4>
            <br></br>
            <p className="info-title">
              Published: {article.publishedAt.slice(0,10)} | By: {article.author}
            </p>
            <img className="news-img" src={article.urlToImage}></img>
            <div className="para-container">
              <p className="para">{article.content.slice(0,200)}</p>
              <a></a>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="footer-row">
        <Col lg={12} className="footer-col-one">
          {/* <FooterComp /> */}
        </Col>
      </Row>
    </Container>
  );
};

export default ReadPage;
