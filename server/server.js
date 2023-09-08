//Imports
const express = require("express");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("");

//Backend Config
const app = express();
const host = "127.0.0.1";
const public_host = "0.0.0.0";
const port = 4000;

//For cross orgin requests and Enable CORS for all routes.
const cors = require("cors");
app.use(cors()); //use this for debuging

app.get("/api/test", (req, res) => {
  res.send(`Server is running on ${host} at ${port}`);
});

app.get("/api/news", (req, res) => {
  // To query /v2/everything
  // You must include at least one q, source, or domain
  newsapi.v2
    .everything({
      q: "bitcoin",
      sources: "bbc-news,the-verge",
      domains: "bbc.co.uk, techcrunch.com",
      from: "2017-12-01",
      to: "2017-12-12",
      language: "en",
      sortBy: "relevancy",
      page: 2,
    })
    .then((response) => {
      console.log(response);
      /*
      {
        status: "ok",
        articles: [...]
      }
    */
    });
});

app.listen(port, host, () => {
  console.log("Server is now running on port", port);
});
