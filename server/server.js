//Imports
const express = require("express");
const NewsAPI = require("newsapi");
const dotenv = require("dotenv");

//Backend Config
const app = express();
const host = "127.0.0.1";
const public_host = "0.0.0.0";
const port = 4000;

//Env variables
dotenv.config();
const newsapi = new NewsAPI(process.env.NEWSAPIKEY);

//For cross orgin requests and Enable CORS for all routes.
const cors = require("cors");
app.use(cors()); //use this for debuging

app.get("/api/test", (req, res) => {
  res.send(`Server is running on ${host} at ${port}`);
});

app.get("/api/news", (req, res) => {
  // You must include at least one q, source, or domain
  newsapi.v2
    .everything({
      //   q: "bitcoin",
      sources: "bbc-news,the-verge",
      domains: "bbc.co.uk, techcrunch.com",
      from: "2023-08-10",
      to: "2023-09-08",
      language: "en",
      sortBy: "relevancy",
      page: 1,
    })
    .then((response) => {
        
    var filter = response.articles.slice(0,5);
    res.send(filter);
    console.log(filter.length);
    });
});

app.listen(port, host, () => {
  console.log("Server is now running on port", port);
});
